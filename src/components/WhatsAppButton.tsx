'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { generateWhatsAppUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  const message = 'Hello SM Associate, I am interested in your finance/vehicle services. I would like to know more.';
  const whatsappUrl = generateWhatsAppUrl(message, COMPANY_INFO.whatsappNumber);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 p-4 bg-green-500 hover:bg-green-600 active:scale-95 hover:scale-110 text-white rounded-full shadow-lg transition-all duration-300 animate-bounce-soft flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
