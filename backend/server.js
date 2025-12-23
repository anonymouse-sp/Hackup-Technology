import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { sendContactNotification, sendEnrollmentNotification } from './emailService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app (for production)
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hackup-technology';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.error('❌ MongoDB connection error:', error));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'closed'],
    default: 'new'
  }
});

// Contact Model
const Contact = mongoose.model('Contact', contactSchema);

// Enrollment Schema
const enrollmentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  courseId: {
    type: String,
    required: true,
    trim: true
  },
  qualification: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    required: true,
    trim: true
  },
  trainingMode: {
    type: String,
    enum: ['online', 'offline', 'hybrid'],
    required: true
  },
  message: {
    type: String,
    trim: true
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'enrolled', 'cancelled'],
    default: 'pending'
  }
});

// Enrollment Model
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Routes
// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (name, email, phone, subject, message)'
      });
    }

    // Create new contact entry
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await newContact.save();

    // Send email notification to admin
    const emailResult = await sendContactNotification({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      subject: newContact.subject,
      message: newContact.message,
      submittedAt: newContact.submittedAt,
      id: newContact._id
    });

    if (emailResult.success) {
      console.log('✅ Admin notified about new contact submission');
    } else {
      console.error('⚠️ Failed to notify admin:', emailResult.error);
    }

    res.status(201).json({
      success: true,
      message: 'Contact information saved successfully',
      data: {
        id: newContact._id,
        submittedAt: newContact.submittedAt
      }
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save contact information',
      error: error.message
    });
  }
});

// Get all contacts (for admin/internal use)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
      error: error.message
    });
  }
});

// Get contact by ID
app.get('/api/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contact',
      error: error.message
    });
  }
});

// Update contact status
app.patch('/api/contact/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['new', 'contacted', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: new, contacted, or closed'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact status',
      error: error.message
    });
  }
});

// ===== ENROLLMENT ROUTES =====

// Submit enrollment form
app.post('/api/enrollment', async (req, res) => {
  try {
    const { fullName, email, phone, courseName, courseId, qualification, experience, trainingMode, message } = req.body;

    // Validation
    if (!fullName || !email || !phone || !courseName || !courseId || !qualification || !experience || !trainingMode) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create new enrollment entry
    const newEnrollment = new Enrollment({
      fullName,
      email,
      phone,
      courseName,
      courseId,
      qualification,
      experience,
      trainingMode,
      message: message || ''
    });

    await newEnrollment.save();

    // Send email notification to admin
    const emailResult = await sendEnrollmentNotification({
      fullName: newEnrollment.fullName,
      email: newEnrollment.email,
      phone: newEnrollment.phone,
      courseName: newEnrollment.courseName,
      courseId: newEnrollment.courseId,
      qualification: newEnrollment.qualification,
      experience: newEnrollment.experience,
      trainingMode: newEnrollment.trainingMode,
      message: newEnrollment.message,
      enrolledAt: newEnrollment.enrolledAt,
      id: newEnrollment._id,
      status: newEnrollment.status
    });

    if (emailResult.success) {
      console.log('✅ Admin notified about new enrollment');
    } else {
      console.error('⚠️ Failed to notify admin:', emailResult.error);
    }

    res.status(201).json({
      success: true,
      message: 'Enrollment submitted successfully! We will contact you soon.',
      data: {
        id: newEnrollment._id,
        enrolledAt: newEnrollment.enrolledAt
      }
    });

  } catch (error) {
    console.error('Error saving enrollment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit enrollment',
      error: error.message
    });
  }
});

// Get all enrollments (for admin/internal use)
app.get('/api/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ enrolledAt: -1 });
    res.json({
      success: true,
      count: enrollments.length,
      data: enrollments
    });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollments',
      error: error.message
    });
  }
});

// Get enrollment by ID
app.get('/api/enrollment/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    
    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    res.json({
      success: true,
      data: enrollment
    });
  } catch (error) {
    console.error('Error fetching enrollment:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollment',
      error: error.message
    });
  }
});

// Update enrollment status
app.patch('/api/enrollment/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'contacted', 'enrolled', 'cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: pending, contacted, enrolled, or cancelled'
      });
    }

    const enrollment = await Enrollment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!enrollment) {
      return res.status(404).json({
        success: false,
        message: 'Enrollment not found'
      });
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: enrollment
    });
  } catch (error) {
    console.error('Error updating enrollment status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update enrollment status',
      error: error.message
    });
  }
});

// Handle React routing - return all requests to React app for client-side routing
// This MUST be after all API routes
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Please build the frontend first: npm run build');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});
