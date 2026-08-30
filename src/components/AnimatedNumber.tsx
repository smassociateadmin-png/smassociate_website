'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedNumberProps {
  value?: number | string;
  target?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  target: explicitTarget,
  prefix: explicitPrefix,
  suffix: explicitSuffix,
  decimals: explicitDecimals,
  duration = 1400,
  className = '',
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (value !== undefined) return String(value);
    return `${explicitPrefix || ''}${explicitTarget ?? 0}${explicitSuffix || ''}`;
  });

  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let targetNum: number | null = null;
    let prefix = explicitPrefix || '';
    let suffix = explicitSuffix || '';
    let decimalPlaces = explicitDecimals ?? 0;

    if (explicitTarget !== undefined) {
      targetNum = explicitTarget;
    } else if (typeof value === 'number') {
      targetNum = value;
    } else if (typeof value === 'string') {
      // Parse strings like "₹500M+", "$18.4M", "500+", "4.9/5", "98%", "24h"
      const trimmed = value.trim();
      
      // Match optional prefix, the numeric part (with optional decimals), and suffix
      const match = trimmed.match(/^([^0-9.-]*)([-+]?[0-9]*\.?[0-9]+)(.*)$/);
      
      if (match) {
        prefix = explicitPrefix !== undefined ? explicitPrefix : match[1];
        const numStr = match[2];
        suffix = explicitSuffix !== undefined ? explicitSuffix : match[3];
        targetNum = parseFloat(numStr);
        
        if (explicitDecimals === undefined && numStr.includes('.')) {
          decimalPlaces = numStr.split('.')[1].length;
        }
      }
    }

    // If string is purely static text without numbers (e.g. "Fast", "Trusted")
    if (targetNum === null || isNaN(targetNum)) {
      setDisplayValue(String(value ?? ''));
      return;
    }

    if (hasAnimated) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const start = performance.now();
          const finalTarget = targetNum as number;

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Cubic ease-out identical to VaultContactSection
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentNum = eased * finalTarget;

            const formattedNum = decimalPlaces > 0
              ? currentNum.toFixed(decimalPlaces)
              : Math.floor(currentNum).toLocaleString();

            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              const finalFormatted = decimalPlaces > 0
                ? finalTarget.toFixed(decimalPlaces)
                : finalTarget.toLocaleString();
              setDisplayValue(`${prefix}${finalFormatted}${suffix}`);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [value, explicitTarget, explicitPrefix, explicitSuffix, explicitDecimals, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
