// This file should be placed in the /api directory or equivalent based on your hosting platform

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fullName, company, email, phone, interest, message, recipient } =
      req.body;

    // Basic validation
    if (!fullName || !email || !interest || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Format the email content
    const emailContent = `
        <h2>New Demo Request from Intel.PV Website</h2>
        
        <h3>Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
          <li><strong>Company:</strong> ${company || "Not provided"}</li>
        </ul>
        
        <h3>Request Details:</h3>
        <p><strong>Interest:</strong> ${interest}</p>
        
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        
        <p>This request was submitted from the Intel.PV website on ${new Date().toLocaleString()}.</p>
      `;

    // Here you would typically use a service like SendGrid, Mailgun, or your server's SMTP
    // For this example, we'll simulate a successful email send

    // In a real implementation, you would use code like this:
    /*
      const sgMail = require('@sendgrid/mail');
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      
      const msg = {
        to: recipient,
        from: 'noreply@intelligentpv.ma',
        subject: 'New Demo Request from Intel.PV Website',
        html: emailContent,
        replyTo: email
      };
      
      await sgMail.send(msg);
      */

    // For now, we'll just log the email content and return success
    console.log("Email would be sent to:", recipient);
    console.log("Email content:", emailContent);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
