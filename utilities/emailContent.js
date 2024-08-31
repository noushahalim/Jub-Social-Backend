// signup otp email template
const emailTemplate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jub Social! Verify Your Account</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
            }
            .header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .otp {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                background-color: #f1f1f1;
                padding: 10px;
                border-radius: 4px;
                display: inline-block;
                margin: 20px 0;
            }
            .footer {
                background-color: #f4f4f4;
                color: #666;
                padding: 20px;
                text-align: center;
                font-size: 12px;
            }
            .footer a {
                color: #4CAF50;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Jub Social!</h1>
            </div>
            <div class="content">
                <p>Dear User,</p>
                <p>Thank you for signing up with Jub Social. To complete your registration, please use the One-Time Password (OTP) below:</p>
                <div class="otp">{{OTP}}</div>
                <p> Please do not share it with anyone.</p>
                <p>If you did not initiate this request, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>Need help? <a href="https://t.me/JubSocialOfficial">Contact our support team</a></p>
                <p>Follow us on:</p>
                <p>
                    <a href="https://www.facebook.com/JubSocialOfficial">Facebook</a> |
                    <a href="https://www.twitter.com/JubSocialOfficial">Twitter</a> |
                    <a href="https://www.instagram.com/JubSocialOfficial">Instagram</a>
                </p>
                <p>&copy; 2024 Jub Social. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>`

// signup otp email function
exports.generateEmailContent = (otp) => {
    return emailTemplate.replace('{{OTP}}', otp)
}