import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Resend API key kontrolü
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY bulunamadı!');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email servisi yapılandırılmamış. Lütfen RESEND_API_KEY environment variable ekleyin.' 
        },
        { status: 500 }
      );
    }

    // Resend API'ye istek
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'İletişim Formu <onboarding@resend.dev>', // Resend'in test email adresi
        to: ['tonguckaracay@gmail.com'],
        reply_to: email,
        subject: `İletişim Formu - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              Yeni İletişim Formu Mesajı
            </h2>
            
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Ad Soyad:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>E-posta:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
              <p style="margin: 10px 0;"><strong>Şirket:</strong> ${company || 'Belirtilmedi'}</p>
              <p style="margin: 10px 0;"><strong>İlgilendiği Hizmet:</strong> ${service || 'Belirtilmedi'}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Mesaj:</strong></p>
              <p style="color: #555; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 12px;">
              <p>Bu mesaj tonguckaracay.com iletişim formundan gönderildi.</p>
            </div>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API Hatası:', data);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email gönderilemedi. Lütfen daha sonra tekrar deneyin.',
          details: data 
        },
        { status: 500 }
      );
    }

    console.log('Email başarıyla gönderildi:', data);
    
    return NextResponse.json({ 
      success: true,
      message: 'Email başarıyla gönderildi',
      id: data.id
    });

  } catch (error) {
    console.error('API Route Hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Beklenmeyen bir hata oluştu' 
      },
      { status: 500 }
    );
  }
}
