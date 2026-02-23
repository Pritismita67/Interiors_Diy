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

// ── Send Email ───────────────────────────────────────────────────────
async function sendKitEmail(toEmail, toName) {
  const firstName = toName.split(' ')[0];

  const pdfPath   = path.join(process.cwd(), 'public', 'guide.pdf');
  const pdfExists = fs.existsSync(pdfPath);

  if (!pdfExists) console.warn('⚠️ PDF not found at:', pdfPath);

  await resend.emails.send({
    from:    'DIY Interiors <info@dointeriorsyourself.com>',
    to:      toEmail,
    subject: 'Your Start-Right Interior Decision Kit — guide.pdf attached',
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

        <tr>
          <td style="background:#c0442a;padding:36px 44px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;letter-spacing:.14em;
                      text-transform:uppercase;color:rgba(255,255,255,.72);font-weight:600;">
              START-RIGHT INTERIOR KIT
            </p>
            <h1 style="margin:0;font-size:27px;font-weight:700;color:#fff;
                       font-family:Georgia,serif;line-height:1.22;">
              Your Interior Decision Kit
            </h1>
          </td>
        </tr>

        <tr>
          <td style="padding:38px 44px 34px;">
            <p style="margin:0 0 20px;font-size:16px;color:#1c1916;line-height:1.6;">
              Hi ${firstName},
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#4a4a4a;line-height:1.78;">
              Thank you for requesting the Start-Right Interior Decision Kit.
            </p>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
              style="margin-bottom:28px;">
              <tr>
                <td style="background:#f0faf0;border:2px solid #3a9e3a;border-radius:12px;
                            padding:22px 24px;text-align:center;">
                  <p style="margin:0 0 8px;font-size:36px;line-height:1;">📎</p>
                  <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#1c1916;">
                    guide.pdf is attached to this email
                  </p>
                  <p style="margin:0;font-size:14px;color:#4a4a4a;line-height:1.65;">
                    Scroll to the bottom of this email and tap <strong>guide.pdf</strong><br/>
                    to open and save your kit.
                  </p>
                </td>
              </tr>
            </table>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
              style="margin-bottom:20px;">
              <tr>
                <td style="background:#fdf5f3;border-left:3px solid #c0442a;
                            border-radius:0 8px 8px 0;padding:14px 18px;">
                  <p style="margin:0 0 6px;font-size:13px;font-weight:600;
                             color:#c0442a;text-transform:uppercase;letter-spacing:.06em;">
                    Before you open it, remember this:
                  </p>
                  <p style="margin:0;font-size:15px;color:#1c1916;line-height:1.7;font-weight:500;">
                    Most interior regret doesn't happen during execution.<br/>
                    It happens when decisions are taken in the <em>wrong order.</em>
                  </p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 14px;font-size:15px;color:#4a4a4a;line-height:1.78;">
              Inside this kit, you'll find:
            </p>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
              style="margin-bottom:28px;">
              <tr><td style="padding:0 0 10px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><span style="color:#c0442a;font-size:16px;">•</span></td>
                  <td style="font-size:15px;color:#4a4a4a;line-height:1.65;">The correct decision sequence</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:0 0 10px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><span style="color:#c0442a;font-size:16px;">•</span></td>
                  <td style="font-size:15px;color:#4a4a4a;line-height:1.65;">A structured shopping comparison sheet</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:0 0 10px 0;">
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><span style="color:#c0442a;font-size:16px;">•</span></td>
                  <td style="font-size:15px;color:#4a4a4a;line-height:1.65;">5 expensive mistakes to avoid</td>
                </tr></table>
              </td></tr>
              <tr><td>
                <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><span style="color:#c0442a;font-size:16px;">•</span></td>
                  <td style="font-size:15px;color:#4a4a4a;line-height:1.65;">A practical framework to visualise your home properly</td>
                </tr></table>
              </td></tr>
            </table>

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
              style="margin-bottom:28px;">
              <tr>
                <td style="background:#f9ede9;border-radius:10px;padding:18px 20px;">
                  <p style="margin:0 0 8px;font-size:14px;color:#4a4a4a;line-height:1.72;">
                    If you have already taken possession or are starting within the next
                    3 months and would like structured guidance before spending, reply
                    to this email with:
                  </p>
                  <p style="margin:0;font-size:22px;font-weight:700;color:#c0442a;
                             letter-spacing:.04em;text-align:center;">
                    START
                  </p>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #e6ddd8;margin:0 0 20px;"/>

            <p style="margin:0 0 4px;font-size:14px;color:#1c1916;font-weight:600;">— DIY Team</p>
            <p style="margin:0 0 20px;font-size:13px;color:#7a6f6a;">Structured Interior Guidance</p>

            <p style="margin:0 0 6px;font-size:12.5px;color:#a89e99;text-align:center;">
              📬 Can't find this email? Check your <strong>Spam</strong> or <strong>Promotions</strong> folder.
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
          filename: 'guide.pdf',
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
    const cleanMobile     = mobile.replace(/[\s\-()]/g, '');
    const existing        = await Lead.findOne({ email: normalizedEmail });

    let emailSent = false;

    if (!existing) {
      const newLead = await Lead.create({
        fullName: fullName.trim(),
        email:    normalizedEmail,
        mobile:   cleanMobile,
        possessionStatus,
        city:     city?.trim() || '',
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
      console.log(`ℹ️ Duplicate: ${normalizedEmail} — resending`);
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