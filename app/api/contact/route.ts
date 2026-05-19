import nodemailer from "nodemailer";

function escapeHtml(value: unknown) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function emailLayout(content: string) {
  return `
    <div style="margin:0;padding:0;background:#f5f5f4;font-family:Arial,Helvetica,sans-serif;color:#1c1917;">
      <div style="max-width:680px;margin:0 auto;padding:40px 20px;">
        <div style="background:#ffffff;border:1px solid #e7e5e4;border-radius:28px;overflow:hidden;box-shadow:0 20px 50px rgba(28,25,23,0.08);">
          
          <div style="background:#0c0a09;padding:34px 38px;color:#ffffff;">
            <div style="font-size:12px;letter-spacing:4px;text-transform:uppercase;color:#d6d3d1;">
              Monumentalis
            </div>
            <div style="margin-top:10px;font-size:26px;font-weight:600;line-height:1.25;">
              Architectural Art & Monumental Sculpture
            </div>
          </div>

          <div style="padding:38px;">
            ${content}
          </div>

          <div style="border-top:1px solid #e7e5e4;padding:24px 38px;background:#fafaf9;color:#78716c;font-size:13px;line-height:1.6;">
            <strong style="color:#292524;">Monumentalis</strong><br/>
            Custom Sculpture, Monuments, Memorials & Architectural Art<br/>
            <a href="mailto:project@monumentalis.com" style="color:#292524;text-decoration:none;">project@monumentalis.com</a>
          </div>

        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const name = escapeHtml(data.name);
    const email = escapeHtml(data.email);
    const company = escapeHtml(data.company);
    const location = escapeHtml(data.location);
    const projectType = escapeHtml(data.projectType);
    const message = escapeHtml(data.message).replaceAll("\n", "<br />");
    const consent = data.consent === true;

    if (!name || !email || !message || !consent) {
      return Response.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Monumentalis Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Monumentalis Project Inquiry from ${name}`,
      html: emailLayout(`
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.25;color:#0c0a09;">
          New Project Inquiry
        </h1>

        <div style="display:grid;gap:12px;font-size:15px;line-height:1.7;color:#44403c;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company / Institution / Studio:</strong> ${company || "Not provided"}</p>
          <p><strong>Project Location:</strong> ${location || "Not provided"}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
          <p><strong>Consent Accepted:</strong> Yes</p>
        </div>

        <hr style="border:none;border-top:1px solid #e7e5e4;margin:28px 0;" />

        <h2 style="margin:0 0 12px;font-size:18px;color:#0c0a09;">
          Project Message
        </h2>

        <div style="background:#f5f5f4;border:1px solid #e7e5e4;border-radius:18px;padding:20px;font-size:15px;line-height:1.8;color:#44403c;">
          ${message}
        </div>
      `),
    });

    await transporter.sendMail({
      from: `"Monumentalis" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Monumentalis — Your Project Inquiry Has Been Received",
      html: emailLayout(`
        <h1 style="margin:0 0 24px;font-size:28px;line-height:1.25;color:#0c0a09;">
          Your Project Inquiry Has Been Received
        </h1>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          Dear ${name},
        </p>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          Thank you for reaching out to Monumentalis.
        </p>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          We have received your project inquiry and appreciate the opportunity to review your vision. Each request is carefully evaluated to ensure alignment with our standards of execution, artistic direction, and project scope.
        </p>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          Our team will review the details you provided and, where relevant, we will follow up to discuss next steps, potential approaches, and project feasibility.
        </p>

        <div style="margin:28px 0;padding:22px;border-radius:20px;background:#0c0a09;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#d6d3d1;">
            Professional Review
          </div>
          <p style="margin:12px 0 0;font-size:16px;line-height:1.7;">
            Due to the bespoke and project-driven nature of our work, we engage selectively with projects that match our scope, complexity, and level of execution.
          </p>
        </div>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          If your project aligns, you can expect a structured and professional collaboration process from concept to final delivery.
        </p>

        <p style="font-size:16px;line-height:1.8;color:#44403c;">
          In the meantime, if you would like to share additional references, drawings, or details, you are welcome to reply directly to this email.
        </p>

        <p style="margin-top:28px;font-size:16px;line-height:1.8;color:#44403c;">
          Kind regards,<br/>
          <strong style="color:#0c0a09;">Monumentalis</strong>
        </p>
      `),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, message: "Email could not be sent." },
      { status: 500 }
    );
  }
}