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

    // Send confirmation email to subscriber (only if it's the verified email for testing)
    // For production, you'll need to verify your domain to send to any email
    const subscriberEmail = email === 'its.aniketsingh04@gmail.com' ? email : 'its.aniketsingh04@gmail.com'
    const { data, error } = await resend.emails.send({
      from: 'Optivality <onboarding@resend.dev>', // Update this with your verified domain
      to: [subscriberEmail],
      subject: 'Welcome to Optivality Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #133a2f; border-bottom: 2px solid #2c6b58; padding-bottom: 10px;">
            Thank you for subscribing!
          </h2>
          <div style="margin-top: 20px;">
            <p>Hello,</p>
            <p>Thank you for subscribing to the Optivality newsletter. You'll now receive:</p>
            <ul style="color: #2c6b58;">
              <li>Latest articles on longevity and wellness</li>
              <li>Product updates and new formulations</li>
              <li>Exclusive wellness tips and insights</li>
              <li>Special offers and announcements</li>
            </ul>
            <p style="margin-top: 20px;">We're excited to have you on this wellness journey with us!</p>
            <p style="margin-top: 20px; color: #666;">
              Best regards,<br>
              The Optivality Team
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error (subscriber email):', error)
      return NextResponse.json(
        { error: error.message || 'Failed to subscribe' },
        { status: 400 }
      )
    }

    // Also notify Optivality team (don't fail if this fails)
    try {
      await resend.emails.send({
        from: 'Optivality Newsletter <onboarding@resend.dev>',
        to: ['its.aniketsingh04@gmail.com'],
        subject: 'New Newsletter Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #133a2f;">New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    } catch (teamEmailError) {
      // Log but don't fail the subscription if team notification fails
      console.error('Failed to send team notification:', teamEmailError)
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
