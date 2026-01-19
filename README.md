# Taveve Portal

Modern project portal built with Next.js 16, TypeScript, and Tailwind CSS v4. Features glassmorphism design inspired by premiumisme.co with Taveve brand colors.

## 🚀 Features

- **Premium Glassmorphism Design**: Translucent cards with backdrop blur effects
- **Animated Background**: Floating blobs with smooth animations
- **Responsive**: Mobile-first design, works perfectly on all devices
- **Dynamic Content**: JSON-based data for easy content management
-**SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Remix Icons
- **Deployment**: Vercel

## 📦 Project Structure

```
taveve-portal/
├── app/
│   ├── layout.tsx           # Root layout with fonts and icons
│   ├── page.tsx             # Homepage with dynamic menu
│   ├── globals.css          # Global styles and theme
│   ├── faq/                 # FAQ page with accordion
│   ├── tools/               # Tools page with tabs
│   ├── warranty/            # Warranty page with product selector
│   ├── reseller/            # Reseller tiers page
│   └── order/               # Order instructions page
├── public/
│   └── data/                # JSON data files
│       ├── menu.json
│       ├── faq.json
│       ├── tools.json
│       ├── warranty.json
│       └── reseller.json
└── vercel.json              # Vercel deployment config
```

## 🎨 Customization

### Colors
The Taveve orange theme is defined in `app/globals.css`:
```css
--taveve-orange: #ff9f1c;
--taveve-orange-light: #ffa733;
--taveve-orange-dark: #e65f00;
```

### Content
Edit JSON files in `public/data/` to update content.

## 🏃‍♂️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🚀 Deployment to Vercel

### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Via GitHub
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

---

Made with ❤️ by Taveve Store
# portal-taveve
