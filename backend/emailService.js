import nodemailer from 'nodemailer';

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD // App-specific password for Gmail
    }
  });
};

// Send contact notification to admin
export const sendContactNotification = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🔔 New Contact Form Submission - ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              📧 New Contact Form Submission
            </h2>
            
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">Someone has reached out through your website!</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">👤 Name:</strong>
              <p style="margin: 5px 0; color: #6b7280;">${contactData.name}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📧 Email:</strong>
              <p style="margin: 5px 0; color: #6b7280;">
                <a href="mailto:${contactData.email}" style="color: #2563eb; text-decoration: none;">${contactData.email}</a>
              </p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📱 Phone:</strong>
              <p style="margin: 5px 0; color: #6b7280;">
                <a href="tel:${contactData.phone}" style="color: #2563eb; text-decoration: none;">${contactData.phone}</a>
              </p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📋 Subject:</strong>
              <p style="margin: 5px 0; color: #6b7280;">${contactData.subject}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">💬 Message:</strong>
              <div style="margin: 5px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #2563eb; color: #374151; line-height: 1.6;">
                ${contactData.message}
              </div>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p style="margin: 5px 0;">⏰ Submitted at: ${new Date(contactData.submittedAt).toLocaleString()}</p>
              <p style="margin: 5px 0;">🆔 Reference ID: ${contactData.id}</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This is an automated notification from HackUp Technology website.</p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Contact notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending contact notification email:', error);
    return { success: false, error: error.message };
  }
};

// Send enrollment notification to admin
export const sendEnrollmentNotification = async (enrollmentData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `🎓 New Course Enrollment - ${enrollmentData.courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #059669; margin-bottom: 20px; border-bottom: 2px solid #059669; padding-bottom: 10px;">
              🎓 New Course Enrollment
            </h2>
            
            <div style="background-color: #d1fae5; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 0; color: #065f46; font-weight: bold;">A student has enrolled in a course!</p>
            </div>

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
              <strong style="color: #92400e;">📚 Course:</strong>
              <p style="margin: 5px 0; font-size: 18px; color: #78350f; font-weight: bold;">${enrollmentData.courseName}</p>
              <p style="margin: 5px 0; color: #78350f; font-size: 12px;">Course ID: ${enrollmentData.courseId}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">👤 Full Name:</strong>
              <p style="margin: 5px 0; color: #6b7280;">${enrollmentData.fullName}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📧 Email:</strong>
              <p style="margin: 5px 0; color: #6b7280;">
                <a href="mailto:${enrollmentData.email}" style="color: #2563eb; text-decoration: none;">${enrollmentData.email}</a>
              </p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📱 Phone:</strong>
              <p style="margin: 5px 0; color: #6b7280;">
                <a href="tel:${enrollmentData.phone}" style="color: #2563eb; text-decoration: none;">${enrollmentData.phone}</a>
              </p>
            </div>

            <div style="display: flex; gap: 20px; margin-bottom: 15px;">
              <div style="flex: 1;">
                <strong style="color: #374151;">🎓 Qualification:</strong>
                <p style="margin: 5px 0; color: #6b7280;">${enrollmentData.qualification}</p>
              </div>
              <div style="flex: 1;">
                <strong style="color: #374151;">💼 Experience:</strong>
                <p style="margin: 5px 0; color: #6b7280;">${enrollmentData.experience}</p>
              </div>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📍 Training Mode:</strong>
              <span style="display: inline-block; margin: 5px 0; padding: 5px 15px; background-color: ${
                enrollmentData.trainingMode === 'online' ? '#dbeafe' : 
                enrollmentData.trainingMode === 'offline' ? '#fce7f3' : '#fef3c7'
              }; color: ${
                enrollmentData.trainingMode === 'online' ? '#1e40af' : 
                enrollmentData.trainingMode === 'offline' ? '#831843' : '#78350f'
              }; border-radius: 5px; font-weight: bold; text-transform: uppercase;">
                ${enrollmentData.trainingMode}
              </span>
            </div>

            ${enrollmentData.message ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">💬 Additional Message:</strong>
              <div style="margin: 5px 0; padding: 15px; background-color: #f9fafb; border-left: 4px solid #059669; color: #374151; line-height: 1.6;">
                ${enrollmentData.message}
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p style="margin: 5px 0;">⏰ Enrolled at: ${new Date(enrollmentData.enrolledAt).toLocaleString()}</p>
              <p style="margin: 5px 0;">🆔 Enrollment ID: ${enrollmentData.id}</p>
              <p style="margin: 5px 0;">📊 Status: ${enrollmentData.status}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 5px;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                ⚡ <strong>Action Required:</strong> Please contact the student within 24 hours to confirm enrollment details.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This is an automated notification from HackUp Technology website.</p>
          </div>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Enrollment notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending enrollment notification email:', error);
    return { success: false, error: error.message };
  }
};
