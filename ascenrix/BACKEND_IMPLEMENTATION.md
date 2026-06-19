# ASCENRIX Backend Implementation Guide

## Overview
This document outlines all the backend functionality and new pages added to the ASCENRIX website.

## New API Endpoints

### 1. **Consultations API** (`/api/consultations`)
- **POST**: Submit a consultation request
  - Fields: `fullName`, `email`, `company`, `phone`, `service`, `preferredDate`, `message`
  - Returns: Confirmation with consultation details
  - Creates a lead automatically

- **GET**: Fetch all consultation requests

**Endpoint**: `POST /api/consultations`
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "phone": "+1-555-0000",
  "service": "Salesforce Consulting",
  "preferredDate": "2026-07-01",
  "message": "We need help with Salesforce implementation"
}
```

### 2. **Inquiries API** (`/api/inquiries`)
- **POST**: Submit a general inquiry
  - Fields: `fullName`, `email`, `company`, `phone`, `projectDetails`
  - Returns: Confirmation with inquiry details
  - Creates a lead automatically

- **GET**: Fetch all inquiries

### 3. **Leads API** (`/api/leads`)
- **GET**: Fetch all leads with optional filtering
  - Query params: `status` (new, contacted, qualified, converted, lost), `service`
  - Example: `/api/leads?status=new&service=Salesforce Consulting`

- **POST**: Create a new lead manually
  - Fields: `fullName`, `email`, `company`, `phone`, `service`, `source`
  - Sources: `consultation`, `inquiry`, `direct`

- **PATCH**: Update lead status and notes
  - Fields: `id`, `status`, `notes`
  - Statuses: `new`, `contacted`, `qualified`, `converted`, `lost`

**Example Update**:
```json
{
  "id": "lead_1234567890_abc123",
  "status": "contacted",
  "notes": "Client interested in cloud solutions"
}
```

## New Pages

### 1. **Schedule Consultation** (`/schedule`)
- Dedicated page for scheduling consultations
- Form with fields:
  - Full Name (required)
  - Email (required)
  - Company (required)
  - Phone (optional)
  - Service Selection (dropdown with 6 services)
  - Preferred Date (optional)
  - Project Details (required)
- Submits to `/api/consultations`
- Creates a lead automatically
- Success/error notifications
- Link to Technologies page

### 2. **Leads Management** (`/leads`)
- Dashboard to view all captured leads
- Features:
  - Filter by status (new, contacted, qualified, converted, lost)
  - Quick stats showing:
    - Total leads
    - New leads count
    - Converted leads count
    - Conversion rate percentage
  - Edit lead status inline
  - View lead details (name, email, company, service, source, date)
  - Status color coding for quick identification
- Fetches from `/api/leads`
- Update leads via `/api/leads` PATCH endpoint

### 3. **Technologies Showcase** (`/technologies`)
- Comprehensive display of technology stack
- Organized by category:
  - Frontend (React/Next.js, TypeScript, Tailwind CSS, Framer Motion)
  - Backend (Node.js, Next.js API Routes, RESTful APIs)
  - Cloud (Salesforce, AWS, Google Cloud)
  - DevOps (Docker, Kubernetes)
  - Databases (PostgreSQL, MongoDB)
  - Security, AI & Machine Learning
- Features:
  - Icon representation for each technology
  - Description for each technology
  - Category badges
  - Gradient colors for visual appeal
  - Custom solutions section highlighting:
    - Performance optimization
    - Enterprise security
    - System integration

## Updated Components

### 1. **Navbar** (`/components/Navbar.tsx`)
- Added "Technologies" link
- Added "Leads" link (for admin/management)
- Updated "Schedule Consultation" button to navigate to `/schedule`
- Updated mobile navigation with all new links

### 2. **Home Page** (`/app/page.tsx`)
- Updated "Schedule Consultation" button to navigate to `/schedule`
- Updated "Explore Services" button to navigate to `/services`
- Changed from buttons to Links for proper navigation

### 3. **Contact Form** (`/app/contact/page.tsx`)
- Integrated with `/api/inquiries` endpoint
- Added form state management
- Added validation for required fields
- Success/error notifications
- Creates a lead automatically
- Added contact information display
- Link to consultation booking page

## Data Flow

### Consultation Flow
1. User visits `/schedule`
2. Fills consultation form
3. Form submits to `/api/consultations`
4. API also creates a lead via `/api/leads`
5. User sees success notification
6. Lead appears in `/leads` dashboard with status "new"

### Inquiry Flow
1. User visits `/contact`
2. Fills inquiry form
3. Form submits to `/api/inquiries`
4. API also creates a lead via `/api/leads`
5. User sees success notification
6. Lead appears in `/leads` dashboard with status "new"

### Lead Management Flow
1. Admin visits `/leads`
2. Sees dashboard with leads statistics
3. Can filter by status or view all
4. Can click "Edit" to change lead status
5. Can add notes to leads
6. Sees conversion rate and metrics

## Database Considerations

Currently, the implementation uses **in-memory storage** for demo purposes. To integrate with a real database:

### PostgreSQL Integration
```typescript
// Example with Prisma ORM
const lead = await prisma.lead.create({
  data: {
    fullName: formData.fullName,
    email: formData.email,
    company: formData.company,
    service: formData.service,
    status: "new",
    source: source
  }
});
```

### MongoDB Integration
```typescript
// Example with Mongoose
const lead = new Lead({
  fullName: formData.fullName,
  email: formData.email,
  company: formData.company,
  service: formData.service,
  status: "new",
  source: source
});
await lead.save();
```

## Environment Variables
Add these to `.env.local`:
```
# Email Configuration (for sending confirmations)
SMTP_HOST=your-email-provider
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# Database (if using persistent storage)
DATABASE_URL=postgresql://user:password@localhost:5432/ascenrix
# or
MONGODB_URI=mongodb://localhost/ascenrix

# API Keys
SALESFORCE_API_KEY=your-key
AWS_ACCESS_KEY=your-key
```

## TODO - Next Steps

### Email Integration
- [ ] Send confirmation emails on consultation/inquiry submission
- [ ] Send notification emails to sales team
- [ ] Create email templates

### Database Integration
- [ ] Set up PostgreSQL or MongoDB
- [ ] Implement Prisma ORM or Mongoose
- [ ] Migrate in-memory data structure to persistent storage
- [ ] Add database backups

### Authentication & Security
- [ ] Add authentication for leads dashboard
- [ ] Implement role-based access control
- [ ] Add rate limiting to API endpoints
- [ ] Implement CSRF protection

### Analytics
- [ ] Add tracking for form submissions
- [ ] Track lead conversion funnel
- [ ] Generate reports and dashboards
- [ ] Add Google Analytics integration

### Payment Integration
- [ ] Add consultation booking with payment
- [ ] Integrate Stripe or similar payment gateway
- [ ] Send payment confirmations

### Advanced Features
- [ ] Calendar integration for consultation scheduling
- [ ] SMS notifications for new leads
- [ ] CRM integration (Salesforce, HubSpot)
- [ ] Lead scoring system
- [ ] Automated follow-up emails

## Testing

### Manual Testing Checklist
- [ ] Schedule consultation form validation
- [ ] Contact inquiry form validation
- [ ] Lead status updates
- [ ] Lead filtering by status
- [ ] Lead statistics calculations
- [ ] Navigation between pages
- [ ] Mobile responsiveness
- [ ] Form submission error handling
- [ ] Form submission success notifications

### API Testing
```bash
# Test consultation submission
curl -X POST http://localhost:3000/api/consultations \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John","email":"john@test.com","company":"Test","service":"Salesforce Consulting","message":"Test"}'

# Get all leads
curl http://localhost:3000/api/leads

# Filter leads by status
curl http://localhost:3000/api/leads?status=new

# Update lead status
curl -X PATCH http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"id":"lead_xxx","status":"contacted"}'
```

## Deployment Notes

### Vercel Deployment
- Supports Next.js API routes out of the box
- Serverless functions handle API endpoints automatically
- Environment variables can be set in Vercel dashboard
- Monitor logs in Vercel analytics dashboard

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
# API endpoints available at http://localhost:3000/api/*
```

## Support Contact
For any issues or questions regarding the backend implementation, contact the development team.
