# Setup Guide - Ruff Bootsreisen Website

## Quick Start

### 1. Install Dependencies

```bash
cd ruff-bootsreisen
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
N8N_WEBHOOK_URL=https://ruff-bootsreisen.app.n8n.cloud/webhook/your-webhook-id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Important:** Replace `your-webhook-id` with your actual n8n webhook URL from the workflow.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ruff-bootsreisen/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── api/chat/          # Chat API endpoint
│   │   ├── about/             # About page
│   │   ├── destinations/      # Destinations page
│   │   ├── boats/             # Boats page
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Homepage sections
│   │   └── chat/              # Chat widget components
│   ├── lib/                   # Utilities and mock data
│   └── styles/                # Global styles
└── public/                    # Static assets
```

## Chat Integration

### n8n Webhook Setup

1. Go to your n8n workflow (LCashblIppoBvb0k)
2. Find the "When chat message received" node
3. Copy the webhook URL
4. Add it to `.env.local` as `N8N_WEBHOOK_URL`

### Testing Chat

1. Start the development server
2. Click the chat widget button (bottom-right)
3. Try a search query like:
   ```
   Anreise Datum: 23 / 05 / 2026
   Abreise Datum: 30 / 05 / 2026
   gewünschtes Reiseziel: Burgund
   Anzahl der Erwachsenen an Bord: 2
   Anzahl der Kinder an Bord: 2
   ```

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. Push code to GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `N8N_WEBHOOK_URL`
   - `NEXT_PUBLIC_SITE_URL`
5. Deploy!

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts and add environment variables when asked.

## Troubleshooting

### Chat not working?

1. Check that `N8N_WEBHOOK_URL` is set in `.env.local`
2. Verify the webhook URL is correct
3. Check browser console for errors
4. Ensure n8n workflow is active

### Images not loading?

- Check that image URLs are accessible
- Verify `next.config.js` has correct image domains
- Some external images may require CORS configuration

### Build errors?

- Run `npm install` again
- Clear `.next` folder: `rm -rf .next`
- Check TypeScript errors: `npm run build`

## Next Steps

1. ✅ Connect n8n webhook
2. ✅ Test chat functionality
3. ✅ Customize content (images, text, colors)
4. ✅ Add your domain
5. ✅ Set up analytics (optional)

