import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Log the message for debugging
    console.log('=== NEW CONTACT MESSAGE ===');
    console.log('From:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('==========================');

    // Try to forward to Formspree as backup
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      
      const res = await fetch('https://formspree.io/f/mnnzajep', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        console.log('Message forwarded to Formspree successfully');
      } else {
        console.log('Formspree forwarding failed, but message logged');
      }
    } catch (error) {
      console.log('Formspree forwarding error:', error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 