# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio website to send emails to your inbox.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account (you get 200 emails/month on the free tier)

## Step 2: Add Email Service

1. After signing in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions:
   - For Gmail: Click "Connect Account" and authorize EmailJS
   - Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template format:

**Template Name:** Contact Form

**Subject:** Portfolio Contact: {{subject}}

**Content:**
```
Hello Nivas,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **Save**
5. Note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy this key

## Step 5: Update the JavaScript File

Open `js/script.js` and replace these three placeholders:

1. **Line 242**: Replace `YOUR_PUBLIC_KEY` with your Public Key
   ```javascript
   emailjs.init("your_public_key_here");
   ```

2. **Line 268**: Replace `YOUR_SERVICE_ID` with your Service ID
   ```javascript
   emailjs.send('your_service_id_here', 'YOUR_TEMPLATE_ID', formData)
   ```

3. **Line 268**: Replace `YOUR_TEMPLATE_ID` with your Template ID
   ```javascript
   emailjs.send('YOUR_SERVICE_ID', 'your_template_id_here', formData)
   ```

## Example of Updated Code

After updating, your code should look like this:

```javascript
// Initialize EmailJS with your Public Key
emailjs.init("abcdefghijklmnop");

// ... later in the code ...

// Send email using EmailJS
emailjs.send('service_abc123', 'template_xyz789', formData)
    .then(function() {
        // Success handler
    })
    .catch(function(error) {
        // Error handler
    });
```

## Step 6: Test the Form

1. Open your portfolio website in a browser
2. Navigate to the Contact section
3. Fill out the form and submit
4. Check your email inbox for the message

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify Service ID, Template ID, and Public Key are correct
- **CORS errors**: Make sure your Public Key is correctly set in `emailjs.init()`

## Free Tier Limits

- 200 emails per month
- For more emails, you can upgrade to a paid plan

## Security Note

The Public Key is safe to expose in client-side code. EmailJS uses it to verify your account but won't allow unauthorized access to your services.

---

Need help? Visit [EmailJS Documentation](https://www.emailjs.com/docs/) for more information.
