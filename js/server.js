const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { fname, lname, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.freesmtpservers.com",  // The SMTP server you are using
    port: 25,                          // Port 25 (non-secure, usually for sending email)
    secure: false,                     // false means it's not using SSL/TLS
    auth: null,                         // No authentication (if your SMTP doesn't require it)
    logger: true,                       // Enable logging to see what's happening behind the scenes
    debug: true,                        // Enable detailed debugging for connection and errors
  });
  

  const mailOptions = {
    from: email,
    to: "yeviwi1723@linxues.com",
    subject: `Contact Form Submission from ${fname} ${lname}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
