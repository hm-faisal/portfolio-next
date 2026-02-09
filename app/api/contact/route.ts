import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.email('Invalid email address'),
	subject: z.string().min(5, 'Subject must be at least 5 characters'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
});

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		// Validate input
		const validatedData = contactSchema.parse(body);

		// Sanitize input
		const sanitizedData = {
			name: purify.sanitize(validatedData.name),
			email: purify.sanitize(validatedData.email),
			subject: purify.sanitize(validatedData.subject),
			message: purify.sanitize(validatedData.message),
		};

		// Configure Nodemailer
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
		});

		// Email options
		const mailOptions = {
			from: `"${sanitizedData.name}" <${process.env.GMAIL_USER}>`,
			to: process.env.GMAIL_USER, // Send to yourself
			replyTo: sanitizedData.email,
			subject: `Portfolio Contact: ${sanitizedData.subject}`,
			text: sanitizedData.message,
			html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #137fec;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f6f7f8; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
        </div>
      `,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: 'Email sent successfully!' },
			{ status: 200 },
		);
	} catch (error) {
		console.error('Contact Form Error:', error);
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ message: 'Validation failed', errors: error.issues },
				{ status: 400 },
			);
		}
		return NextResponse.json(
			{ message: 'Failed to send email. Please try again later.' },
			{ status: 500 },
		);
	}
}
