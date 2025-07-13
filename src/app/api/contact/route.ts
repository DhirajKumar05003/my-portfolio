import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // For now, just log the message so you can see it in Vercel logs
    console.log('=== NEW CONTACT MESSAGE ===');
    console.log('From:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('==========================');

    // TODO: Add email service later
    // For now, you can check Vercel logs to see messages

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 