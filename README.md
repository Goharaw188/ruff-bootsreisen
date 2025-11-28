# Ruff Bootsreisen Website

A modern boat rental website with integrated chatbot for boat search functionality.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env.local file (see below)

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- n8n workflow webhook URL

## ⚙️ Environment Variables

Create `.env.local` in the root directory:

```env
N8N_WEBHOOK_URL=https://ruff-bootsreisen.app.n8n.cloud/webhook/your-webhook-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Get your webhook URL:**
1. Go to n8n workflow: `LCashblIppoBvb0k`
2. Find "When chat message received" node
3. Copy the webhook URL
4. Paste it in `.env.local`

## 🏗️ Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📁 Project Structure

```
ruff-bootsreisen/
├── src/
│   ├── app/                    # Next.js pages
│   │   ├── api/chat/           # Chat API endpoint
│   │   ├── about/               # About page
│   │   ├── destinations/       # Destinations page
│   │   ├── boats/              # Boats page
│   │   └── contact/             # Contact page
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── sections/           # Homepage sections
│   │   └── chat/               # Chat widget
│   ├── lib/                    # Types, mock data, utils
│   └── styles/                 # Global CSS
└── public/                     # Static assets
```

## ✨ Features

- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Chat Widget** - Integrated boat search chatbot
- ✅ **n8n Integration** - Connects to your workflow
- ✅ **Mock Content** - Promotions, destinations, boats
- ✅ **Modern UI** - Clean, professional design
- ✅ **Accessible** - WCAG compliant

## 🎯 Key Components

### Chat Widget
- Floating bottom-right widget
- Connects to n8n workflow
- Displays boat results as cards
- Message history (localStorage)
- Fully functional boat search

### Homepage Sections
- Hero section with CTA
- Quick search bar (triggers chat)
- Promotional banners (4 cards)
- Featured destinations
- Benefits section
- Testimonials

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy!

See `SETUP.md` for detailed instructions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Troubleshooting

See `SETUP.md` for troubleshooting guide.

## 📄 License

Private project for Ruff Bootsreisen

