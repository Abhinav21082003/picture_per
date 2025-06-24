const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { from_name, user_email, message, selected_photo } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // STARTTLS
    auth: {
      user: 'vetrirajkumar753@gmail.com',
      pass: 'ridcbiowizbpsthi'
    },
    tls: {
      rejectUnauthorized: false
    },
    logger: true,
    debug: true
  });
  

  const mailOptions = {
    from: `"Photo Inquiry" <${user_email}>`,
    to: 'janapanaabhinavreddy@gmail.com', // where the inquiry gets sent
    subject: `Photo Request: ${selected_photo}`,
    text: `
      Name: ${from_name}
      Email: ${user_email}
      Requested Photo: ${selected_photo}

      Message:
      ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Mail sent successfully');
    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (err) {
    console.error('❌ Mail error:', err);
    res.status(500).json({ success: false, message: 'Email failed.' });
  }
});

app.listen(3000, () => {
  console.log('📨 Backend server listening on http://localhost:3000');
});
