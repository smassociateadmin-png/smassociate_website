'use client';

import { useMemo } from 'react';

interface DateFormatterProps {
  date: string | Date;
  options?: Intl.DateTimeFormatOptions;
  locale?: string;
}

/**
 * Format dates deterministically so server HTML matches the client HTML during hydration.
 * We pin a single locale/time zone for all formatting instead of relying on the runtime locale.
 */
export function DateFormatter({ date, options = {}, locale = 'en-IN' }: DateFormatterProps) {
  const formattedDate = useMemo(() => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (Number.isNaN(dateObj.getTime())) {
      return '';
    }

    return new Intl.DateTimeFormat(locale, {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options,
    }).format(dateObj);
  }, [date, locale, options]);

  return <span>{formattedDate}</span>;
}
