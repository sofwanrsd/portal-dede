export const siteConfig = {
  // Brand Identity
  name: "Dede Portal",
  description: "Dede Portal adalah satu tempat untuk melihat karya, aktivitas, dan informasi saya dalam satu akses yang simpel.",
  author: "Dede",
  
  // SEO & Metadata Settings
  seo: {
    title: "Taveve Store",
    titleTemplate: "%s | Taveve Store",
    description: "Pusat produk digital otomatis 24/7. Reseller welcome tanpa biaya pendaftaran.",
    siteUrl: "https://taveve.web.id", // Ganti dengan domain asli
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: "https://taveve.web.id",
      siteName: "Taveve Store",
      images: [
        {
          url: "/og-image.jpg", // Pastikan buat file ini di public/og-image.jpg (1200x630px)
          width: 1200,
          height: 630,
          alt: "Taveve Store Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tavevestore", // Optional
      creator: "@tavevestore", // Optional
    },
  },


  keywords: ["Produk Digital", "Premium Account", "Netflix Murah", "Spotify Premium", "Taveve Store", "Reseller Produk Digital", "Layanan Otomatis"],
  themeColor: "#800020",

  // Assets (in public folder)
  logo: "/logo.png",
  favicon: "/icon.png",
  
  // Theme Colors - Maroon Theme (Ubah disini untuk ganti warna!)
  colors: {
    primary: "#800020",      // Warna Utama
    primaryLight: "#a00030", // Warna Lebih Terang (hover, dll)
    primaryDark: "#5c0018",  // Warna Lebih Gelap
    secondary: "#1a1d29",    // Warna Background Gelap
    accent: "#ffffff"        // Warna Aksen
  },

  // Contact Information (WhatsApp)
  contacts: {
    admin1: {
      name: "Admin 1",
      number: "6285759700949",
      role: "Fast Response"
    },
    admin2: {
      name: "Admin 2",
      number: "6282120612663",
      role: "Support"
    },
    owner: {
      name: "Owner",
      number: "6289650363236",
      role: "Complaint Only"
    }
  },

  // Feature Status (Atur "true" jika aktif, "false" jika Comming Soon)
  features: {
    orderMethods: {
      telegram: {
        active: true,
        label: "Order via Telegram Bot",
        link: "https://t.me/TaveveStoreBot" // Ganti link bot disini
      },
      whatsapp: {
        active: false, // Set true jika sudah ready
        label: "Order via WhatsApp Bot",
        link: "#"
      },
      webstore: {
        active: false, // Set true jika sudah ready
        label: "Order via Webstore",
        link: "#"
      }
    }
  },

  // Reseller Page Settings
  reseller: {
    tagline: "Tanpa perlu daftar, langsung mulai!",
    benefits: [
      "Akses Bot 24/7",
      "Harga Termurah",
      "Support Prioritas",
      "Grup Diskusi"
    ],
    links: {
      whatsapp: "https://wa.me/6289630291313",
      telegram: "https://t.me/tavevestore"
    }
  },

  // Footer
  footer: {
    text: "© by Dede",
    link: "https://bydede.my.id"
  }
};
