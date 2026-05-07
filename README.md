Prept 🎯
An AI-powered mock interview platform that helps candidates practice technical and behavioral interviews with real-time video sessions and automated AI feedback.
Features

🎥 Real-time Interview Sessions — Live video and chat powered by Stream SDK with auto-recording
🤖 AI Feedback Generation — Post-interview analysis using Gemini AI on technical skills, communication and problem-solving
📝 Automatic Transcription — Interview sessions are transcribed automatically via Stream
💳 Credit-based Booking System — Users purchase credits to schedule mock interviews
🔐 Authentication — Secure login and profile management via Clerk
📧 Email Notifications — Automated emails using Resend

Tech Stack
Frontend

Next.js 14
React.js
Tailwind CSS

Backend

Next.js API Routes / Server Actions
Prisma ORM
PostgreSQL

Integrations

Stream Video & Chat SDK
Gemini AI
Clerk (Auth)
Resend (Emails)
Vercel (Deployment)
Getting Started
Prerequisites

Node.js 18+
PostgreSQL database
Accounts on: Clerk, Stream, Gemini AI, Resend

Installation
bash# Clone the repo
git clone https://github.com/yourusername/prept.git

# Install dependencies
cd prept
npm install

# Set up environment variables
cp .env.example .env.local
Environment Variables
env# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# Stream
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# Gemini AI
GEMINI_API_KEY=

# Resend
RESEND_API_KEY=
bash# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
Open http://localhost:3000 to see the app.
Project Structure
prept/
├── app/
│   ├── (auth)/         # Auth pages
│   ├── (root)/         # Main app pages
│   └── api/            # API routes
├── components/         # Reusable UI components
├── lib/                # Utility functions
└── prisma/
    └── schema.prisma   # Database schema
Deployment
Deployed on Vercel. Connect your GitHub repo and add environment variables in the Vercel dashboard.

Author
Rajdeep Singh

GitHub: (https://github.com/rajdeepietlko27)
LinkedIn: (https://www.linkedin.com/in/rajdeep-singh-615157282/)
