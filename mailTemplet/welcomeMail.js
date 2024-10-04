const generateWelcomeEmailHtml = (name) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #4CAF50;
            }
            p {
              font-size: 16px;
              line-height: 1.5;
            }
            .cta-button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #4CAF50;
              color: #ffffff;
              text-decoration: none;
              font-weight: bold;
              border-radius: 4px;
              margin-top: 20px;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
              a{
              color:white
              }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Welcome, ${name}!</h1>
            <p>We are thrilled to have you join our platform. Thank you for registering!</p>
            <p>We’ve built an amazing community and would love for you to get the most out of it. If you’re ready to explore, just click the button below to get started:</p>
            <a href="http://localhost:3000/" class="cta-button">Get Started</a>
            <p>If you have any questions, feel free to reply to this email. We’re here to help!</p>
            <div class="footer">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
              <p>123 Your Street, Your City, Your Country</p>
            </div>
          </div>
        </body>
      </html>
    `;
};

module.exports = { generateWelcomeEmailHtml };
