# Resend Email Setup Instructions

## Step 1: Get Your Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month free)
3. Navigate to **API Keys** in your dashboard
4. Click **Create API Key**
5. Copy your API key

## Step 2: Add API Key to Your Project

Create a file named `.env.local` in the root of your project (same level as `package.json`) and add:

```
RESEND_API_KEY=your_actual_api_key_here
```

**Important:**
- Replace `your_actual_api_key_here` with your actual Resend API key
- Do NOT include quotes around the API key
- The `.env.local` file is already in `.gitignore` so it won't be committed to GitHub

## Step 3: Update Email "From" Address

After verifying your domain with Resend, update the "from" email addresses in:

1. **Contact Form**: `app/api/contact/route.ts` (line 18)
   - Change: `from: 'Optivality Contact Form <onboarding@resend.dev>'`
   - To: `from: 'Optivality Contact Form <noreply@yourdomain.com>'`

2. **Newsletter**: `app/api/newsletter/route.ts` (line 19 and 33)
   - Change: `from: 'Optivality <onboarding@resend.dev>'`
   - To: `from: 'Optivality <noreply@yourdomain.com>'`

**Note:** For testing, you can use `onboarding@resend.dev` but you'll need to verify your domain for production.

## Step 4: Test the Forms

1. Start your development server: `npm run dev`
2. Test the contact form on `/contact` page
3. Test the newsletter signup in the footer
4. Check your email inbox (Optivitality5@gmail.com) for the submissions

## Features Implemented

✅ Contact form sends emails to Optivitality5@gmail.com
✅ Newsletter signup sends confirmation email to subscriber
✅ Newsletter signup notifies Optivality team
✅ Success/error messages displayed to users
✅ Form validation and loading states

## Troubleshooting

- **"Failed to send email"**: Check that your API key is correct in `.env.local`
- **"Invalid API key"**: Make sure you copied the full API key without extra spaces
- **Emails not arriving**: Check spam folder, verify domain in Resend dashboard
- **Need to restart server**: After adding `.env.local`, restart your Next.js dev server
