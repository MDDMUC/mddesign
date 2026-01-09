# Contact Form Setup Guide

This guide will help you set up the contact form backend for the Martin Drexler portfolio website.

## Overview

The contact form uses **Web3Forms**, a free third-party service that handles form submissions without requiring a backend server. This solution is perfect for static Next.js sites and works seamlessly with static export.

### Why Web3Forms?

- Works with static sites (no backend required)
- Free tier with generous limits (250 submissions/month)
- GDPR compliant
- Spam protection included (honeypot, reCAPTCHA v3)
- No rate limiting on free tier
- Simple fetch API integration
- Email notifications sent directly to your inbox

## Setup Instructions

### Step 1: Create a Web3Forms Account

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Sign up with your email address (or GitHub/Google)
4. Verify your email address

### Step 2: Get Your Access Key

1. Log in to your Web3Forms dashboard
2. Click "Create New Form" or use the default form
3. Configure your form settings:
   - **Form Name**: "Martin Drexler Portfolio Contact Form"
   - **Email Address**: Enter the email where you want to receive submissions (e.g., hello@martindrexler.com)
   - **Subject Line**: You can customize this or leave it (we set it in code)
4. Copy your **Access Key** (looks like: `a1b2c3d4-e5f6-7890-abcd-1234567890ab`)

### Step 3: Configure Environment Variables

1. Open the file `.env.local` in the `site` directory (it should already exist)
2. Replace the placeholder with your actual Access Key:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your_actual_access_key_here
   ```
3. Save the file

**Important**: The `.env.local` file is already in `.gitignore` and will not be committed to version control. This keeps your API key secure.

### Step 4: Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:3000/contact`

3. Fill out and submit the form with test data

4. Check your configured email inbox for the form submission

5. Verify the submission also appears in your Web3Forms dashboard

### Step 5: Configure Spam Protection (Optional but Recommended)

Web3Forms includes built-in spam protection, but you can enhance it:

1. In your Web3Forms dashboard, go to form settings
2. Enable **reCAPTCHA v3** (invisible, no user interaction needed):
   - Get reCAPTCHA keys from [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
   - Add site key and secret key to Web3Forms settings
3. Enable **Honeypot** (already enabled by default)
4. Set up **Email Verification** if you want users to verify their email

## Form Features

The implemented contact form includes:

### User Features
- Real-time validation for all fields
- Email format validation
- Minimum message length requirement (20 characters)
- Character counter for message field (1000 char limit)
- Loading state during submission ("Sending..." button text)
- Success message on successful submission
- Error message on failed submission or network errors
- Form automatically clears on successful submission
- Disabled submit button during form submission

### Email Format

When a user submits the form, you'll receive an email with:
```
Subject: New Contact Form Submission - martindrexler.com
From: Martin Drexler Portfolio

Name: [User's Name]
Email: [User's Email]
Company: [User's Company/Role]

Message:
[User's Message]
```

### Technical Features
- Works with Next.js static export
- Client-side submission (no server required)
- Graceful error handling
- Network error detection
- Response parsing and validation
- Automatic form reset on success
- Hidden fields for metadata (subject, from_name, etc.)

## Troubleshooting

### Form Submissions Not Arriving

1. **Check your Access Key**:
   - Verify it's correctly set in `.env.local`
   - Make sure you restart the dev server after changing `.env.local`
   - The key should start with `NEXT_PUBLIC_` to be available in the browser

2. **Check spam folder**:
   - Web3Forms emails might be filtered as spam initially
   - Mark them as "Not Spam" to train your email filter

3. **Verify email address**:
   - Ensure the email in your Web3Forms dashboard is correct
   - Check if the email needs verification (check your inbox)

4. **Check Web3Forms dashboard**:
   - All submissions appear in the dashboard regardless of email delivery
   - Check if submissions are arriving in the dashboard but not via email

### Error Messages Appearing

1. **"Invalid Access Key"**:
   - Your access key is incorrect or missing
   - Double-check the key in `.env.local`
   - Restart the development server

2. **"Network error"**:
   - Check your internet connection
   - Verify Web3Forms service is operational (check status.web3forms.com)
   - Check browser console for CORS or network errors

3. **Validation Errors**:
   - These are expected - the form has strict validation
   - Name, email, company, and message are all required
   - Email must be valid format
   - Message must be at least 20 characters

### Form Not Submitting

1. **Check browser console**:
   - Open Developer Tools (F12)
   - Look for JavaScript errors
   - Check Network tab for failed requests

2. **Verify environment variable**:
   - The key must start with `NEXT_PUBLIC_` to work in the browser
   - Check if `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` has a value
   - Add a console.log in the component to verify

3. **Test with minimal data**:
   - Try submitting with minimal valid data
   - Check if specific fields are causing issues

## Advanced Configuration

### Custom Email Templates

You can customize the email template in your Web3Forms dashboard:
1. Go to form settings
2. Click "Email Template"
3. Use template variables like `{{name}}`, `{{email}}`, `{{message}}`
4. Save your custom template

### Auto-Response to Users

Send an automatic confirmation email to users:
1. In Web3Forms dashboard, go to "Auto Response"
2. Enable auto-response
3. Customize the message
4. Users will receive a confirmation at their submitted email

### Webhooks (Advanced)

If you need to integrate with other services:
1. Go to form settings > Webhooks
2. Add webhook URL
3. Submissions will POST to your webhook endpoint
4. Useful for integrating with CRM, Slack, Discord, etc.

### Form Analytics

Web3Forms dashboard provides:
- Total submissions count
- Submission timeline
- Export submissions to CSV
- Individual submission details

## Production Deployment

### Before Deploying

1. Ensure `.env.local` is in `.gitignore` (already done)
2. Do NOT commit your access key to version control
3. Test the form thoroughly in development

### Deployment Platforms

#### Vercel
1. Go to your project settings in Vercel
2. Add environment variable:
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: Your access key
3. Redeploy your site

#### Netlify
1. Go to Site settings > Build & deploy > Environment
2. Add environment variable:
   - Key: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: Your access key
3. Trigger a new deploy

#### Other Platforms
Add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` with your access key in your platform's environment variable settings.

## Limits and Pricing

### Free Tier
- 250 submissions per month
- Unlimited forms
- Email notifications
- Spam protection
- CSV exports
- No credit card required

### Paid Tiers
If you need more submissions:
- **Starter**: $5/month - 1,000 submissions
- **Pro**: $15/month - 5,000 submissions
- **Business**: $49/month - 25,000 submissions

For most portfolio sites, the free tier is more than sufficient.

## Alternative Solutions

If Web3Forms doesn't meet your needs, consider:

1. **Formspree** - Similar to Web3Forms, 50 submissions/month free
2. **Netlify Forms** - Built into Netlify, 100 submissions/month free
3. **Email.js** - Client-side email sending, 200 emails/month free
4. **Getform** - Form backend, 50 submissions/month free

## Support

- **Web3Forms Documentation**: [https://docs.web3forms.com](https://docs.web3forms.com)
- **Web3Forms Support**: support@web3forms.com
- **Status Page**: [https://status.web3forms.com](https://status.web3forms.com)

## Security Notes

- The access key is intentionally public (prefixed with `NEXT_PUBLIC_`)
- This is safe because Web3Forms validates submissions server-side
- Spam protection prevents abuse
- Never expose secret keys or API secrets in client-side code
- The `.env.local` file prevents accidental commits but the key itself is designed to be public

## Testing Checklist

Before going live, test:

- [ ] Form validation (all fields required)
- [ ] Email format validation
- [ ] Message minimum length (20 characters)
- [ ] Successful submission shows success message
- [ ] Form clears after successful submission
- [ ] Loading state appears during submission
- [ ] Error state appears on network failure
- [ ] Email arrives in your inbox
- [ ] Submission appears in Web3Forms dashboard
- [ ] Test on mobile devices
- [ ] Test in different browsers

## Maintenance

Regular tasks:
- Monitor submission count in Web3Forms dashboard
- Check spam folder periodically
- Review and respond to form submissions promptly
- Export submissions monthly for backup (optional)
- Monitor for spam submissions and adjust protection if needed
