import nodemailer from "nodemailer";

export async function sendEmail(firstName: string, lastName: string, email: string, message: string) {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: process.env.INQUIRY_EMAIL,
        subject: "New Inquiry",
        text: message,
    });
}