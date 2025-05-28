import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, recipient } = data;
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // Log the email data to the console (this would be sent to an email in production)
    console.log('Form submission received:');
    console.log('------------------------');
    console.log(`From: ${name} (${email})`);
    console.log(`Phone: ${phone || 'Not provided'}`);
    console.log(`To: ${recipient || 'khalid.fathy@microbim.com'}`);
    console.log('Message:');
    console.log(message);
    console.log('------------------------');
    
    // In a real production environment, you would send an actual email here
    // using a service like SendGrid, Mailgun, or a configured SMTP server
    
    // For demo purposes, we'll just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received successfully! In a production environment, this would be emailed to khalid.fathy@microbim.com' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
