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
    const { email } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Send notification to the team about new subscriber
    // Note: With Resend free tier (onboarding@resend.dev), emails can only be sent
    // to the account owner's email. Once a domain is verified at resend.com/domains,
    // you can also send a confirmation email to the subscriber.
    const { data, error } = await resend.emails.send({
      from: 'Optivality Newsletter <onboarding@resend.dev>',
      to: ['optivitality5@gmail.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #133a2f; border-bottom: 2px solid #2c6b58; padding-bottom: 10px;">
            New Newsletter Subscriber
          </h2>
          <div style="margin-top: 20px;">
            <p><strong style="color: #2c6b58;">Email:</strong> ${email}</p>
            <p><strong style="color: #2c6b58;">Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error (newsletter):', error)
      return NextResponse.json(
        { error: error.message || 'Failed to subscribe' },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { 
        error: error?.message || 'Failed to subscribe. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error?.stack : undefined
      },
      { status: 500 }
    )
  }
}
