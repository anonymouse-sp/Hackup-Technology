# Backend Server Setup

This backend server handles contact form submissions and stores them in MongoDB.

## Setup Instructions

1. **Install MongoDB** (if not already installed):
   - Download from https://www.mongodb.com/try/download/community
   - Or use Docker: `docker run -d -p 27017:27017 --name mongodb mongo`

2. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Start MongoDB**:
   - Make sure MongoDB is running on `localhost:27017`
   - Check with: `mongosh` or `mongo` command

4. **Start the Backend Server**:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Start the Frontend**:
   ```bash
   cd ..
   npm run dev
   ```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contact/:id` - Get specific contact
- `PATCH /api/contact/:id/status` - Update contact status

## Database

- **Database Name**: hackup-technology
- **Collection**: contacts
- **Connection**: mongodb://localhost:27017/hackup-technology

## Environment Variables

Edit `backend/.env` to configure:
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string

## Contact Schema

```javascript
{
  name: String (required),
  email: String (required),
  phone: String (required),
  company: String (optional),
  message: String (required),
  submittedAt: Date (auto),
  status: String (new/contacted/closed)
}
```

## Testing

Submit a form from the frontend, then check MongoDB:
```bash
mongosh
use hackup-technology
db.contacts.find()
```
