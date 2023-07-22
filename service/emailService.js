const nodemailer = require('nodemailer');
const getConfig = require('next/config');
const { publicRuntimeConfig } = getConfig();

const sendEmail = async (name, email, subject, message) => {
    console.log('publicRuntimeConfig.REACT_APP_SYSTEM_EMAIL ', publicRuntimeConfig.REACT_APP_SYSTEM_EMAIL)
    console.log('publicRuntimeConfig.REACT_APP_SYSTEM_PASSWORD ', publicRuntimeConfig.REACT_APP_SYSTEM_PASSWORD)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: publicRuntimeConfig.REACT_APP_SYSTEM_EMAIL,
            pass: publicRuntimeConfig.REACT_APP_SYSTEM_PASSWORD,
        },
        from: email
    });

    const mailOptions = {
        from: email,
        to: "ilhamutomo24@gmail.com",
        subject: subject,
        text: `This is message from your portfolio from ${name} <${email}>`,
        html: `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Document</title>
                  <style>
                    h1 {
                      color: brown;
                    }
                  </style>
                </head>
                <body>
                  <h2>Message from portfolio :</h2>
                  <ul style="list-style-type:none;">
                    <li>Name : ${name}</li>
                    <li>Subject: ${subject}</li>
                    <li>Message : <b>${message}</b></li>
                  </ul>  
                </body>
              </html>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info.response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

module.exports = sendEmail;