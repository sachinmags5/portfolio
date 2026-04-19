# Sachin Magdum — Portfolio (MERN Stack)

Dark, edgy full-stack developer portfolio with animated particle background,
custom lerp cursor, Framer Motion animations, and a working contact form
backed by Node.js + MongoDB.

---

## Quick Start

### 1. Create all folders

```bash
mkdir -p portfolio/server/models
mkdir -p portfolio/server/routes
mkdir -p portfolio/server/middleware
mkdir -p portfolio/client/src/components
mkdir -p portfolio/client/src/sections
mkdir -p portfolio/client/src/styles
mkdir -p portfolio/client/src/hooks
mkdir -p portfolio/client/src/data
mkdir -p portfolio/client/public
```

### 2. Copy all files into their paths (see File Map below)

### 3. Backend setup

```bash
cd portfolio/server
cp .env.example .env        # edit MONGO_URI
npm install
npm run dev                 # → http://localhost:5000
```

### 4. Frontend setup (new terminal)

```bash
cd portfolio/client
npm install
npm run dev                 # → http://localhost:5173
```

Vite proxies `/api/*` → `http://localhost:5000` automatically.

---

## File Map

```
portfolio/
├── .gitignore
├── README.md
│
├── server/
│   ├── server.js
│   ├── package.json          "type": "module"
│   ├── .env.example
│   ├── models/
│   │   └── Contact.js
│   └── routes/
│       └── contact.js
│
└── client/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── data/
        │   └── index.js           ← skills[], projects[], stats[], contactLinks[]
        ├── hooks/
        │   ├── useMousePosition.js
        │   └── useScrollReveal.js
        ├── styles/
        │   └── globals.css        ← CSS tokens, cursor, scrollbar, btn utilities
        ├── components/
        │   ├── Cursor.jsx
        │   ├── ParticleBackground.jsx
        │   ├── Navbar.jsx
        │   ├── Navbar.module.css
        │   ├── Footer.jsx
        │   └── Footer.module.css
        └── sections/
            ├── Hero.jsx + Hero.module.css
            ├── Skills.jsx + Skills.module.css
            ├── Projects.jsx + Projects.module.css
            └── Contact.jsx + Contact.module.css
```

---

## Environment Variables

Create `server/.env` from `.env.example`:

| Variable     | Description                             |
|--------------|-----------------------------------------|
| `PORT`       | Server port (default 5000)              |
| `MONGO_URI`  | MongoDB connection string               |
| `CLIENT_URL` | Frontend origin for CORS                |
| `EMAIL_USER` | Gmail address for contact notifications |
| `EMAIL_PASS` | Gmail App Password                      |

> Gmail App Password: Google Account → Security → 2-Step Verification → App Passwords

---

## Deployment

### Frontend → Vercel

```bash
cd client && npm run build
# Push to GitHub, connect repo on vercel.com
# Set VITE_API_URL env var if using separate API domain
```

### Backend → Render

1. New Web Service on render.com
2. Root directory: `server/`
3. Build: `npm install`
4. Start: `npm start`
5. Add env variables in Render dashboard

---

## Customising Your Data

All content lives in one file — `client/src/data/index.js`:

- `skills[]` — your tech stack cards
- `projects[]` — project cards with optional `link`
- `stats[]` — the 4 hero numbers
- `contactLinks[]` — email, LinkedIn, GitHub

To change the accent colour, edit `--accent` in `client/src/styles/globals.css`.

---

## Tech Stack

| Layer    | Tech                                              |
|----------|---------------------------------------------------|
| Frontend | React 18, Vite, Framer Motion, CSS Modules        |
| Backend  | Node.js (ESM), Express.js, Mongoose, Nodemailer   |
| Database | MongoDB Atlas                                     |
| Deploy   | Vercel (client) + Render (server)                 |