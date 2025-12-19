# EmailJS Setup Guide for Appointment Form

This guide will help you set up EmailJS to send appointment requests to your Gmail account.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** as your email service
4. Click **Connect Account** and authorize EmailJS to access your Gmail
5. Give your service a name (e.g., "RV Band Gmail")
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Configure the template:

**Template Name:** Appointment Request

**Subject:** New Appointment Request from {{from_name}}

**Content:** Choose one of the following options:

### Option 1: HTML Template (Recommended - Matches Your Website Design)

Copy the content from `email-template.html` file in your project root, or use this simplified HTML version:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Poppins', Arial, sans-serif; background: #0a0a0a; color: #e5e5e5; }
        .container { max-width: 600px; margin: 0 auto; background: #1a1a1a; padding: 30px; }
        .header { background: linear-gradient(135deg, #991b1b 0%, #dc2626 100%); padding: 20px; text-align: center; }
        .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 900; }
        .section { margin: 20px 0; }
        .section-title { color: #fff; font-weight: 700; border-bottom: 2px solid #dc2626; padding-bottom: 10px; }
        .info-row { background: rgba(0,0,0,0.3); padding: 12px; margin: 10px 0; border-left: 3px solid #dc2626; }
        .label { color: #dc2626; font-size: 12px; font-weight: 600; text-transform: uppercase; }
        .value { color: #fff; font-size: 15px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>RV LIGHTS AND SOUNDS</h1>
            <p style="color: #fff; margin: 10px 0 0 0; font-size: 11px; letter-spacing: 2px;">NEW APPOINTMENT REQUEST</p>
        </div>
        
        <div class="section">
            <div class="section-title">📞 Contact Information</div>
            <div class="info-row">
                <div class="label">Full Name</div>
                <div class="value">{{from_name}}</div>
            </div>
            <div class="info-row">
                <div class="label">Email</div>
                <div class="value">{{from_email}}</div>
            </div>
            <div class="info-row">
                <div class="label">Phone</div>
                <div class="value">{{phone}}</div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-title">🎉 Event Details</div>
            <div class="info-row">
                <div class="label">Event Type</div>
                <div class="value">{{event_type}}</div>
            </div>
            <div class="info-row">
                <div class="label">Date</div>
                <div class="value">{{event_date}}</div>
            </div>
            <div class="info-row">
                <div class="label">Time</div>
                <div class="value">{{event_time}}</div>
            </div>
            <div class="info-row">
                <div class="label">Location</div>
                <div class="value">{{location}}</div>
            </div>
            <div class="info-row">
                <div class="label">Expected Guests</div>
                <div class="value">{{#guests}}{{guests}}{{/guests}}{{^guests}}Not specified{{/guests}}</div>
            </div>
        </div>
        
        {{#message}}
        <div class="section">
            <div class="section-title">💬 Additional Message</div>
            <div class="info-row">
                <div class="value">{{message}}</div>
            </div>
        </div>
        {{/message}}
        
        <div style="background: rgba(220,38,38,0.15); border-left: 4px solid #dc2626; padding: 15px; margin-top: 20px;">
            <p style="color: #fff; margin: 0; font-weight: 600;">⚡ Action Required: Please contact the client to confirm this appointment.</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #9ca3af; font-size: 12px;">© 2025 RV Lights and Sounds. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

### Option 2: Plain Text Template (Simple)

If you prefer a plain text version, use the content from `email-template-simple.txt` or:

```
Subject: New Appointment Request from {{from_name}}

========================================
   RV LIGHTS AND SOUNDS
   NEW APPOINTMENT REQUEST
========================================

📞 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

🎉 EVENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Event Type: {{event_type}}
Event Date: {{event_date}}
Event Time: {{event_time}}
Location: {{location}}
Expected Guests: {{#guests}}{{guests}}{{/guests}}{{^guests}}Not specified{{/guests}}

💬 ADDITIONAL MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{{#message}}{{message}}{{/message}}{{^message}}No additional message provided.{{/message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Action Required: Please contact the client to confirm this appointment.

---
This email was sent from the RV Band website appointment form.
© 2025 RV Lights and Sounds. All rights reserved.
```

**Important Notes:**
- For HTML templates, make sure to select **HTML** as the content type in EmailJS
- The template uses Handlebars syntax: `{{variable_name}}` for required fields and `{{#variable}}{{/variable}}` for optional fields
- The `{{#guests}}{{guests}}{{/guests}}{{^guests}}Not specified{{/guests}}` syntax shows "Not specified" if the guests field is empty

4. Set **To Email** to your Gmail address (e.g., RV@gmail.com)
5. Set **From Name** to "RV Band Website" or "RV Lights and Sounds"
6. Set **Reply To** to `{{from_email}}` so you can reply directly to the client
7. Click **Save**
8. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. In the root directory of your project, create a file named `.env`
2. Add the following content (replace with your actual values):

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_RECIPIENT_EMAIL=RV@gmail.com
```

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=abc123xyz789
VITE_EMAILJS_SERVICE_ID=service_gmail123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_RECIPIENT_EMAIL=RV@gmail.com
```

## Step 6: Restart Your Development Server

After creating the `.env` file, restart your Vite development server:

```bash
npm run dev
```

## Step 7: Test the Form

1. Fill out the appointment form on your website
2. Submit the form
3. Check your Gmail inbox for the appointment request

## Troubleshooting

### Form not sending emails?
- Check that all environment variables are set correctly
- Verify your EmailJS service is connected to Gmail
- Check the browser console for any error messages
- Make sure your EmailJS account hasn't exceeded the free tier limit

### Emails going to spam?
- Check your spam/junk folder
- Make sure your EmailJS service is properly connected
- Consider adding EmailJS to your email whitelist

### Need more emails?
- EmailJS free tier: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Security Note

The `.env` file should be added to `.gitignore` to prevent committing your API keys to version control. The `.env` file is already typically ignored by default in most projects.

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `src/components/Appointment.jsx` and replace:
- `YOUR_PUBLIC_KEY` with your EmailJS public key
- `YOUR_SERVICE_ID` with your EmailJS service ID
- `YOUR_TEMPLATE_ID` with your EmailJS template ID

However, using environment variables is the recommended approach for better security and easier configuration management.

