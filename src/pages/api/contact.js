import nodemailer from 'nodemailer';
import formidable from 'formidable';

import dotenv from 'dotenv';

dotenv.config();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    try {
      const form = formidable({ multiples: true });
      
      form.parse(req, async (err, fields) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }

        const { Name, Email, Mobile, Message } = fields;


      const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user:process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,        
          },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'ishagupta1682001@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
        Name: ${Name}
            Email: ${Email}
            Mobile: ${Mobile}
            Message: ${Message}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({ message: 'Form submitted successfully' });
        }
      });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
