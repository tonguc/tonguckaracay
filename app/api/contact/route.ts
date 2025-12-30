import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basit doğrulama
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Gerekli alanları doldurun.' },
        { status: 400 }
      );
    }

    // RESEND_API_KEY kontrolü
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY tanımlı değil!');
      return NextResponse.json(
        { 
          error: 'Email servisi yapılandırılmamış. RESEND_API_KEY environment variable tanımlı değil.',
          details: 'Lütfen Vercel Settings > Environment Variables kısmından RESEND_API_KEY ekleyin.'
        },
        { status: 500 }
      );
    }

    // Resend API ile gönder
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'İletişim Formu <onboarding@resend.dev>',
        to: 'tonguckaracay@gmail.com',
        reply_to: email,
        subject: `İletişim Formu - ${name}`,
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
          <p><strong>Şirket:</strong> ${company || 'Belirtilmedi'}</p>
          <p><strong>Hizmet:</strong> ${service || 'Belirtilmedi'}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: 'Mesajınız başarıyla gönderildi!' },
        { status: 200 }
      );
    } else {
      console.error('Resend API hatası:', data);
      return NextResponse.json(
        { 
          error: 'Email gönderilemedi.',
          details: data.message || 'Resend API hatası',
          resendError: data
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { 
        error: 'Mesaj gönderilemedi.',
        details: error instanceof Error ? error.message : 'Bilinmeyen hata'
      },
      { status: 500 }
    );
  }
}
