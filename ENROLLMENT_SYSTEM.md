# Course Enrollment System

## Overview
The enrollment system allows students to register for cybersecurity certification courses. All enrollment data is stored in MongoDB.

## Features
- ✅ Pre-filled course selection when coming from course detail pages
- ✅ Required fields validation
- ✅ Training mode selection (Online/Offline/Hybrid)
- ✅ Database storage with MongoDB
- ✅ Status tracking (pending, contacted, enrolled, cancelled)
- ✅ Success/Error feedback
- ✅ Auto-redirect after successful enrollment

## Database Schema

### Enrollment Collection
```javascript
{
  fullName: String (required)
  email: String (required)
  phone: String (required)
  courseName: String (required)
  courseId: String (required)
  qualification: String (required)
  experience: String (required)
  trainingMode: String (required) - enum: ['online', 'offline', 'hybrid']
  message: String (optional)
  enrolledAt: Date (auto-generated)
  status: String (default: 'pending') - enum: ['pending', 'contacted', 'enrolled', 'cancelled']
}
```

## API Endpoints

### Create Enrollment
- **POST** `/api/enrollment`
- **Body**: All enrollment fields
- **Response**: Success message with enrollment ID

### Get All Enrollments (Admin)
- **GET** `/api/enrollments`
- **Response**: Array of all enrollments

### Get Single Enrollment
- **GET** `/api/enrollment/:id`
- **Response**: Single enrollment details

### Update Enrollment Status
- **PATCH** `/api/enrollment/:id/status`
- **Body**: `{ status: 'pending' | 'contacted' | 'enrolled' | 'cancelled' }`
- **Response**: Updated enrollment

## Usage

### Starting the Backend
```bash
cd backend
npm start
```
The server runs on `http://localhost:5000`

### Enrollment Flow
1. User clicks "Enroll Now" on any course page
2. Redirected to `/enrollment` with course pre-selected
3. Fills out the enrollment form
4. Data is saved to MongoDB
5. Success message displayed
6. Auto-redirected to courses page after 3 seconds

## Testing
You can test the enrollment system by:
1. Navigating to any course detail page
2. Clicking "Enroll Now"
3. Filling out the form
4. Submitting

View enrollments in MongoDB:
```bash
mongosh
use hackup-technology
db.enrollments.find().pretty()
```

## Admin Access
To view all enrollments:
- **GET** `http://localhost:5000/api/enrollments`

Use this endpoint to build an admin dashboard if needed.
