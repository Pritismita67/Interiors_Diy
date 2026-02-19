// FILE: src/app/api/free-guide/route.js

import { NextResponse } from 'next/server';
import mongoose         from 'mongoose';
import { Resend }       from 'resend';
import path             from 'path';
import fs               from 'fs';

const resend = new Resend(process.env.RESEND_API_KEY);

// ── MongoDB ─────────────────────────────────────────────────────────
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI missing from .env.local');
  await mongoose.connect(process.env.MONGODB_URI, { dbName: 'diy-interiors' });
  isConnected = true;
  console.log('✅ MongoDB connected');
}

// ── Mongoose Model ───────────────────────────────────────────────────
const LeadSchema = new mongoose.Schema(
  {
    fullName:         { type: String, required: true, trim: true },
    email:            { type: String, required: true, trim: true, lowercase: true },
    mobile:           { type: String, required: true, trim: true },
    possessionStatus: { type: String, required: true },
    city:             { type: String, trim: true, default: '' },
    emailSent:        { type: Boolean, default: false },
  },
  { timestamps: true, collection: 'free-guide-leads' }
);

const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

// ── Send email with PDF directly attached ───────────────────────────
async function sendKitEmail(toEmail, toName) {
  const firstName = toName.split(' ')[0];

  const pdfPath   = path.join(process.cwd(), 'public', 'free.pdf');
  const pdfExists = fs.existsSync(pdfPath);

  if (!pdfExists) {
    console.warn('⚠️ PDF not found at:', pdfPath);
  }

  await resend.emails.send({
    from:    'DIY Interiors <info@dointeriorsyourself.com>',
    to:      toEmail,
    subject: `🏠 Your free Interior Kit is here, ${firstName}!`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:0;background:#faf8f5;font-family:Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
    style="background:#faf8f5;padding:48px 16px;">
    <tr><td align="center">
      <table role="presentation" width="580" cellpadding="0" cellspacing="0"
        style="max-width:100%;background:#fff;border-radius:20px;overflow:hidden;
               box-shadow:0 12px 40px rgba(28,25,22,.12);">

        <!-- Header -->
        <tr>
          <td style="background:#c0442a;padding:36px 44px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:.14em;
                      text-transform:uppercase;color:rgba(255,255,255,.72);font-weight:600;">
              START-RIGHT INTERIOR KIT
            </p>
            <h1 style="margin:0;font-size:27px;font-weight:700;color:#fff;
                       font-family:Georgia,serif;line-height:1.22;">
              Your Free Guide Has Arrived! 🎉
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:38px 44px 34px;">
            <p style="margin:0 0 16px;font-size:16px;font-weight:600;color:#1c1916;">
              Hi ${firstName},
            </p>
            <p style="margin:0 0 18px;font-size:15px;color:#7a6f6a;line-height:1.78;">
              Welcome to the Start-Right community! 🙌 Your
              <strong style="color:#1c1916;">Start-Right Interior Decision Kit</strong>
              is <strong style="color:#c0442a;">attached to this email</strong> as a PDF.
              Just open the attachment to start planning your dream home the smart way!
            </p>

            <!-- Attachment notice box -->
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="background:#faf8f5;border:1.5px dashed #e6ddd8;border-radius:10px;
                            padding:16px 20px;">
                  <p style="margin:0;font-size:14px;color:#1c1916;font-weight:600;">
                    📎 Start-Right-Interior-Kit.pdf
                  </p>
                  <p style="margin:4px 0 0;font-size:13px;color:#7a6f6a;">
                    Open the attachment below to access your free guide.
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 0;font-size:14px;color:#7a6f6a;line-height:1.75;">
              Inside the kit you'll find everything you need to make confident,
              cost-effective interior decisions before spending a single rupee. 🏠
            </p>

            <hr style="border:none;border-top:1px solid #e6ddd8;margin:28px 0 22px;"/>

            <p style="margin:0 0 6px;font-size:12.5px;color:#a89e99;text-align:center;">
              📬 Can't find this email? Check your <strong>Spam</strong> or
              <strong>Promotions</strong> folder.
            </p>
            <p style="margin:0;font-size:11.5px;color:#c0b6b1;text-align:center;">
              © ${new Date().getFullYear()} DIY Interiors · You requested this free kit.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,

    attachments: pdfExists
      ? [{
          filename: 'Start-Right-Interior-Kit.pdf',
          content:  fs.readFileSync(pdfPath).toString('base64'),
          type:     'application/pdf',
        }]
      : [],
  });

  console.log(`📧 Email sent to ${toEmail}`);
}

// ── Validation ───────────────────────────────────────────────────────
const VALID_STATUSES = new Set([
  'already_taken', 'within_3_months', '3_6_months_away', 'just_exploring',
]);

function validate({ fullName, email, mobile, possessionStatus }) {
  if (!fullName?.trim())         return 'Full name is required.';
  if (!email?.trim())            return 'Email address is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please provide a valid email.';
  if (!mobile?.trim())           return 'Mobile number is required.';
  if (!/^[6-9]\d{9}$/.test(mobile.replace(/[\s\-()]/g, '')))
    return 'Please provide a valid 10-digit mobile number.';
  if (!possessionStatus?.trim()) return 'Possession status is required.';
  if (!VALID_STATUSES.has(possessionStatus)) return 'Invalid possession status.';
  return null;
}

// ── POST handler ─────────────────────────────────────────────────────
export async function POST(request) {
  try {
    let body;
    try { body = await request.json(); }
    catch { return NextResponse.json({ message: 'Invalid request.' }, { status: 400 }); }

    const { fullName, email, mobile, possessionStatus, city } = body;

    const validationError = validate({ fullName, email, mobile, possessionStatus });
    if (validationError)
      return NextResponse.json({ message: validationError }, { status: 400 });

    await connectDB();

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await Lead.findOne({ email: normalizedEmail });
    let emailSent = false;

    if (!existing) {
      const newLead = await Lead.create({
        fullName: fullName.trim(),
        email: normalizedEmail,
        mobile: mobile.replace(/[\s\-()]/g, ''),
        possessionStatus,
        city: city?.trim() || '',
      });
      console.log(`💾 Lead saved: ${normalizedEmail}`);

      try {
        await sendKitEmail(normalizedEmail, fullName.trim());
        emailSent = true;
        await Lead.findByIdAndUpdate(newLead._id, { emailSent: true });
      } catch (emailErr) {
        console.error('⚠️ Email failed:', emailErr.message);
      }
    } else {
      console.log(`ℹ️ Duplicate: ${normalizedEmail} — resending email`);
      try {
        await sendKitEmail(normalizedEmail, existing.fullName);
        emailSent = true;
      } catch (e) {
        console.error('⚠️ Email retry failed:', e.message);
      }
    }

    return NextResponse.json(
      { message: 'Success! Check your inbox for the Interior Kit.', emailSent },
      { status: 200 }
    );
  } catch (err) {
    console.error('❌ API error:', err);
    return NextResponse.json({ message: 'Server error. Please try again.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}