import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Optivality Contact Form <onboarding@resend.dev>', // Update this with your verified domain
      to: ['its.aniketsingh04@gmail.com'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #133a2f; border-bottom: 2px solid #2c6b58; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong style="color: #2c6b58;">Name:</strong> ${name}</p>
            <p><strong style="color: #2c6b58;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong style="color: #2c6b58;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong style="color: #2c6b58;">Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p><strong style="color: #2c6b58;">Message:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #2c6b58; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { 
          success: false,
          error: error.message || 'Failed to send email' 
        },
        { status: 400 }
      )
    }

    // Email sent successfully
    return NextResponse.json({ 
      success: true, 
      data,
      message: 'Email sent successfully'
    }, { status: 200 })
  } catch (error: any) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        error: error?.message || 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    )
  }
}
