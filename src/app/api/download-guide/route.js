// FILE: src/app/api/download-guide/route.js
// Serves guide.pdf with Content-Disposition: attachment
// so ANY click — email, WhatsApp, browser — forces a download immediately.

import { NextResponse } from 'next/server';
import path             from 'path';
import fs               from 'fs';

export async function GET() {
  const pdfPath = path.join(process.cwd(), 'public', 'guide.pdf');

  if (!fs.existsSync(pdfPath)) {
    return NextResponse.json({ message: 'File not found.' }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(pdfPath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type':        'application/pdf',
      'Content-Disposition': 'attachment; filename="guide.pdf"',
      'Content-Length':      String(fileBuffer.length),
      'Cache-Control':       'no-store',
    },
  });
}