# Email Notification Setup Guide

## Overview
Email notifications have been configured to notify the admin (maildemo752@gmail.com) whenever:
- A user submits a contact form
- A user enrolls in a course

## Setup Instructions

### 1. Gmail Configuration (Required)

To enable email notifications, you need to set up a Gmail account with an app-specific password:

#### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings (https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled

#### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" as the app
3. Select "Other" as the device and name it "HackUp Technology Backend"
4. Click "Generate"
5. Copy the 16-character password (save it securely)

### 2. Update Environment Variables

Edit the `backend/.env` file and update the following:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=maildemo752@gmail.com
```

Replace:
- `your-gmail-address@gmail.com` with your actual Gmail address
- `your-16-character-app-password` with the app password from Step 2

**Important:** Use the app-specific password, NOT your regular Gmail password!

### 3. Files Modified

The following files were created/modified:

1. **backend/emailService.js** - New email service utility with:
   - `sendContactNotification()` - Sends styled email for contact form submissions
   - `sendEnrollmentNotification()` - Sends styled email for course enrollments

2. **backend/server.js** - Updated with:
   - Email service import
   - Contact endpoint integration
   - Enrollment endpoint integration

3. **backend/.env** - Added email configuration variables

4. **backend/.env.example** - Template for environment variables

5. **backend/package.json** - Added nodemailer dependency

## Email Templates

### Contact Notification Email
Includes:
- 📧 Contact details (name, email, phone)
- 📋 Subject and message
- ⏰ Submission timestamp
- 🆔 Reference ID

### Enrollment Notification Email
Includes:
- 🎓 Course information
- 👤 Student details (name, email, phone)
- 📚 Qualification and experience
- 📍 Training mode (online/offline/hybrid)
- 💬 Additional message (if provided)
- ⏰ Enrollment timestamp
- 🆔 Enrollment ID

## Testing

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Test contact form:
   - Submit a contact form through your website
   - Check admin email (maildemo752@gmail.com) for notification

3. Test enrollment form:
   - Submit a course enrollment through your website
   - Check admin email for enrollment notification

## Troubleshooting

### Email not sending?

1. **Check environment variables:**
   ```bash
   node -e "require('dotenv').config(); console.log('EMAIL_USER:', process.env.EMAIL_USER); console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);"
   ```

2. **Verify app password:**
   - Make sure you're using the app-specific password, not your regular password
   - The password should be 16 characters without spaces

3. **Check Gmail security:**
   - Ensure 2-Factor Authentication is enabled
   - Verify the app password is still active

4. **Check server logs:**
   - Look for "✅ Admin notified" or "⚠️ Failed to notify admin" messages
   - Error messages will provide details about what went wrong

5. **Common errors:**
   - "Invalid login" → Check EMAIL_USER and EMAIL_PASSWORD
   - "Self-signed certificate" → Update nodemailer or Node.js
   - "Connection timeout" → Check internet connection/firewall

## Features

- ✅ Automatic admin notifications for contact and enrollment
- ✅ Professional HTML email templates
- ✅ Responsive email design
- ✅ Detailed user information included
- ✅ Non-blocking (emails sent asynchronously)
- ✅ Error handling with console logs
- ✅ Forms still work even if email fails

## Security Notes

- Never commit `.env` file to version control
- Keep app passwords secure
- Use environment variables for sensitive data
- The `.env.example` file is safe to commit (no real credentials)

## Alternative Email Services

If you prefer not to use Gmail, you can modify `emailService.js` to use:
- Outlook/Office365
- SendGrid
- AWS SES
- Mailgun
- Custom SMTP server

Just update the transporter configuration in `createTransporter()` function.
