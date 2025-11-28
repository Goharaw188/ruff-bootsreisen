# Deployment Guide - Ruff Bootsreisen

## Step 1: Prepare for GitHub

### Initialize Git Repository

```bash
cd ruff-bootsreisen
git init
git add .
git commit -m "Initial commit: Ruff Bootsreisen website POC"
```

### Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `ruff-bootsreisen` (or your preferred name)
3. **Don't** initialize with README (we already have one)
4. Copy the repository URL

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/ruff-bootsreisen.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository (`ruff-bootsreisen`)
4. Vercel will auto-detect Next.js settings
5. **Add Environment Variables:**
   - `N8N_WEBHOOK_URL` = (leave empty for now, add after n8n setup)
   - `NEXT_PUBLIC_SITE_URL` = (will be auto-filled with Vercel URL)
6. Click **"Deploy"**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd ruff-bootsreisen
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? ruff-bootsreisen
# - Directory? ./
# - Override settings? No
```

---

## Step 3: Configure Environment Variables in Vercel

After deployment:

1. Go to your project in Vercel dashboard
2. Click **Settings** → **Environment Variables**
3. Add:
   - **Name:** `N8N_WEBHOOK_URL`
   - **Value:** (your n8n webhook URL - add after Step 4)
   - **Environment:** Production, Preview, Development (select all)
4. Click **Save**
5. **Redeploy** the project for changes to take effect

---

## Step 4: Connect n8n Workflow

### In n8n:

1. Open your workflow (or create a copy)
2. Find the **"When chat message received"** node
3. Copy the **Webhook URL**
4. It should look like: `https://ruff-bootsreisen.app.n8n.cloud/webhook/xxxxx`

### In Vercel:

1. Go to **Settings** → **Environment Variables**
2. Update `N8N_WEBHOOK_URL` with your webhook URL
3. Click **Save**
4. Go to **Deployments** tab
5. Click **"..."** on latest deployment → **Redeploy**

---

## Step 5: Test the Deployment

1. Visit your Vercel URL (e.g., `https://ruff-bootsreisen.vercel.app`)
2. Click the chat widget
3. Test with a query like:
   ```
   Anreise Datum: 23 / 05 / 2026
   Abreise Datum: 30 / 05 / 2026
   gewünschtes Reiseziel: Burgund
   Anzahl der Erwachsenen an Bord: 2
   Anzahl der Kinder an Bord: 2
   ```

---

## Troubleshooting

### Chat not working after deployment?

1. ✅ Check `N8N_WEBHOOK_URL` is set in Vercel
2. ✅ Verify webhook URL is correct
3. ✅ Check n8n workflow is active
4. ✅ Check browser console for errors
5. ✅ Verify CORS settings in n8n (if needed)

### Build fails on Vercel?

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Check for TypeScript errors locally: `npm run build`

### Images not loading?

- External images should work (configured in `next.config.js`)
- If issues, check image domains in Vercel settings

---

## Quick Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] First deployment successful
- [ ] n8n workflow copied/created
- [ ] Webhook URL added to Vercel
- [ ] Redeployed with webhook
- [ ] Chat tested and working

---

**Ready to start? Let's begin with GitHub setup!**

