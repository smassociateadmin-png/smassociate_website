import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResendClient = () => {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    return apiKey ? new Resend(apiKey) : null;
};

const normalizeText = (value: unknown): string => {
    if (typeof value !== 'string') return '';
    return value.replace(/\s+/g, ' ').trim();
};

const isAllowedOrigin = (origin: string | null): boolean => {
    if (!origin) return true;

    try {
        const { hostname } = new URL(origin);
        const allowedHosts = ['localhost', '127.0.0.1', 'smassociate.in', 'www.smassociate.in'];
        return allowedHosts.includes(hostname) || hostname.endsWith('.smassociate.in');
    } catch {
        return false;
    }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
    const origin = request.headers.get('origin');
    if (origin && !isAllowedOrigin(origin)) {
        return NextResponse.json({ message: 'Forbidden origin.' }, { status: 403 });
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        return NextResponse.json({ message: 'Invalid request format.' }, { status: 415 });
    }

    let payload: unknown;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: 'Please complete the form and try again.' }, { status: 400 });
    }

    if (!payload || typeof payload !== 'object') {
        return NextResponse.json({ message: 'Please complete the form and try again.' }, { status: 400 });
    }

    const body = payload as Record<string, unknown>;
    const name = normalizeText(body.name);
    const email = normalizeText(body.email).toLowerCase();
    const phone = normalizeText(body.phone);
    const reason = normalizeText(body.reason);
    const value = normalizeText(body.value);
    const message = normalizeText(body.message);
    const honeypot = normalizeText(body.honeypot);

    if (honeypot) {
        return NextResponse.json({ message: 'Submission rejected.' }, { status: 400 });
    }

    if (!name || !email || !reason || !message) {
        return NextResponse.json({ message: 'Please complete all required fields and try again.' }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
        return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

    const resendClient = getResendClient();

    if (!apiKey || !toEmail || !fromEmail || !resendClient) {
        console.error('Contact form configuration missing.', {
            hasApiKey: Boolean(apiKey),
            hasToEmail: Boolean(toEmail),
            hasFromEmail: Boolean(fromEmail),
            hasResendClient: Boolean(resendClient),
        });

        return NextResponse.json(
            { message: 'The contact form is not available right now. Please try again later.' },
            { status: 503 }
        );
    }

    const reference = `SM-${Date.now().toString(36).toUpperCase()}`;
    const formattedReason = reason
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const textBody = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Subject: ${formattedReason}`,
        `Budget / Approximate Value: ${value || 'Not provided'}`,
        '',
        'Message:',
        message,
        '',
        `Submitted at: ${new Date().toISOString()}`,
        `Reference: ${reference}`,
    ].join('\n');

    const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 12px;">New contact form inquiry</h2>
      <p><strong>Reference:</strong> ${reference}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Subject:</strong> ${formattedReason}</p>
      <p><strong>Budget / Approximate Value:</strong> ${value || 'Not provided'}</p>
      <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
      <div style="margin-top: 20px; padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap;">
        ${message.replace(/\n/g, '<br />')}
      </div>
    </div>
  `;

    try {
        const result = await resendClient.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `[SM Associate] ${formattedReason} - ${name}`,
            text: textBody,
            html: htmlBody,
        });

        if (result.error) {
            console.error('Resend email send failed.', result.error);
            return NextResponse.json(
                { message: 'Your message could not be sent right now. Please try again later.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true, reference }, { status: 200 });
    } catch (error) {
        console.error('Contact form email error.', {
            message: error instanceof Error ? error.message : 'Unknown error',
        });

        return NextResponse.json(
            { message: 'Your message could not be sent right now. Please try again later.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}
