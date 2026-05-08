# 🎙️ Prept – AI-Powered Mock Interview Platform

Prept is a full-stack mock interview platform with AI-powered feedback generation, real-time video sessions, automatic transcription, and a credit-based booking system — built to help candidates ace their next interview.

---

## ✨ Features

- 🤖 **AI Feedback Generation** – Post-interview analysis powered by Gemini AI with structured feedback on technical skills, communication, and problem-solving
- 🎥 **Real-Time Video Interviews** – Live interview sessions using Stream Video SDK with auto-recording
- 💬 **Live Chat** – In-session chat powered by Stream Chat SDK
- 📝 **Auto Transcription** – Automatic transcription of interview sessions via Stream
- 🪙 **Credit-Based Booking** – Users book interviews using a credit system
- 📊 **Structured Feedback Reports** – AI generates detailed post-call analysis on key competencies
- 🔒 **Authentication** – Secure login and session management via Clerk
- 📧 **Email Notifications** – Transactional emails via Resend
- 📱 **Responsive Design** – Fully responsive across mobile and desktop

---

## 🛠 Tech Stack

### Frontend

| Tool | Purpose |
|------|---------|
| Next.js | Full-stack React framework (App Router + Server Actions) |
| React.js | UI components and client-side interactivity |
| Tailwind CSS | Utility-first styling |
| Clerk | Authentication and user session management |

### Backend

| Tool | Purpose |
|------|---------|
| PostgreSQL | Primary relational database |
| Prisma | ORM for database schema and queries |
| Next.js Server Actions | Serverless backend logic |

### Integrations

| Service | Purpose |
|---------|---------|
| Stream Video SDK | Real-time video interview sessions with auto-recording |
| Stream Chat SDK | Live in-session chat |
| Gemini AI | AI-powered feedback and post-call analysis |
| Resend | Transactional email notifications |
| Vercel | Deployment and hosting |

---

## 🚀 Run Locally

### Prerequisites

- Node.js 18+
- npm or yarn
- A PostgreSQL database (local or cloud e.g. Neon, Supabase)

### 1. Clone the Repository

```bash
git clone https://github.com/rajdeepietlko27/prept.git
cd prept
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database
DATABASE_URL=your_postgresql_connection_string

# Stream
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# Resend
RESEND_API_KEY=your_resend_api_key
```

### 4. Run Database Migrations

```bash
npx prisma migrate dev
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔄 How It Works

```
User signs up via Clerk
        ↓
Credits assigned to account
        ↓
Books a mock interview session (credits deducted)

── Interview Flow ──────────────────────────
Joins real-time video session via Stream Video SDK
        ↓
Live chat enabled via Stream Chat SDK
        ↓
Session auto-recorded and transcribed by Stream

── Post-Interview Flow ──────────────────────────
Transcription sent to Gemini AI for analysis
        ↓
AI generates structured feedback report
  (Technical Skills / Communication / Problem-Solving)
        ↓
Report saved to PostgreSQL via Prisma
        ↓
User notified via email (Resend)
        ↓
User reviews feedback on dashboard
```

---

## 📁 Project Structure

```
prept/
├── app/
│   ├── (auth)/        # Auth pages
│   ├── (root)/        # Main app pages
│   │   └── api/       # API routes
├── components/        # Reusable UI components
├── lib/               # Utility functions
└── prisma/
    └── schema.prisma  # Database schema
```

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Publishable key from [Clerk Dashboard](https://clerk.com) |
| `CLERK_SECRET_KEY` | Secret key from Clerk Dashboard |
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXT_PUBLIC_STREAM_API_KEY` | API key from [Stream Dashboard](https://getstream.io) |
| `STREAM_SECRET_KEY` | Secret key from Stream Dashboard |
| `GEMINI_API_KEY` | API key from [Google AI Studio](https://aistudio.google.com) |
| `RESEND_API_KEY` | API key from [Resend Dashboard](https://resend.com) |

---

## 🌐 Deployment

Deployed on **Vercel**. Connect your GitHub repo and add the environment variables in the Vercel dashboard.

---

## 👨‍💻 Author

**Rajdeep Singh**

- GitHub: [@rajdeepietlko27](https://github.com/rajdeepietlko27)