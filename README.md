# Dede Portal

> Portal pribadi untuk melihat karya, aktivitas, dan informasi saya dalam satu akses yang simpel.

![Dede Portal](public/logo.png)

## ✨ Fitur

- 🎨 **Tema Maroon** - Warna custom yang dikontrol dari config
- 📱 **Mobile Responsive** - Optimal di semua ukuran layar
- 🔗 **Link Categories** - Kategori terorganisir (About, Store, Social, dll)
- ✅ **Active/Inactive Links** - Status "Coming Soon" atau "On Going"
- 🌙 **Dark Mode** - Tampilan gelap yang nyaman
- ♿ **Accessible** - Kontras tinggi, keyboard navigation, reduced motion
- ⚡ **Fast** - Built with Next.js 16 + Turbopack

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Remix Icons](https://remixicon.com/) - Icons

## 📁 Struktur File

```
Portal/
├── app/
│   ├── config.ts      # Konfigurasi utama (nama, warna, dll)
│   ├── globals.css    # Styling global & color system
│   ├── layout.tsx     # Layout wrapper
│   └── page.tsx       # Halaman utama
├── public/
│   ├── data/
│   │   └── menu.json  # Data menu & link
│   ├── logo.png       # Logo
│   └── icon.png       # Favicon
└── README.md
```

## ⚙️ Konfigurasi

### Ganti Nama & Deskripsi
Edit `app/config.ts`:
```typescript
export const siteConfig = {
  name: "Dede Portal",
  description: "Deskripsi portal kamu",
  // ...
}
```

### Ganti Warna Tema
Edit `app/config.ts`:
```typescript
colors: {
  primary: "#800020",      // Warna Utama (Maroon)
  primaryLight: "#a00030", // Hover
  primaryDark: "#5c0018",  // Active
}
```

### Tambah/Edit Menu
Edit `public/data/menu.json`:
```json
{
  "category": "Social Media",
  "items": [
    {
      "label": "Instagram",
      "subtitle": "@username",
      "icon": "ri-instagram-line",
      "link": "https://instagram.com/xxx",
      "active": true
    },
    {
      "label": "TikTok",
      "subtitle": "Coming Soon",
      "icon": "ri-tiktok-line",
      "link": "#",
      "active": false,
      "status": "Coming Soon"
    }
  ]
}
```

### Icons
Gunakan icon dari [Remix Icons](https://remixicon.com/). Format: `ri-{nama}-line` atau `ri-{nama}-fill`

## 🚀 Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build Production
```bash
npm run build
```

### Start Production
```bash
npm start
```

## 📝 Checklist Customization

- [ ] Ganti nama di `config.ts`
- [ ] Ganti deskripsi di `config.ts`
- [ ] Ganti warna tema di `config.ts`
- [ ] Ganti logo di `public/logo.png`
- [ ] Edit menu & link di `public/data/menu.json`
- [ ] Update social links
- [ ] Update footer link

## 📄 License

MIT License - Feel free to use for personal projects.

---

Made with ❤️ by Dede
