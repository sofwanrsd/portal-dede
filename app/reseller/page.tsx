import Link from 'next/link';
import { siteConfig } from '../config';

export default async function ResellerPage() {
  const { reseller } = siteConfig;

  return (
    <>
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="w-full max-w-[900px] mx-auto">
          {/* Back Button */}
          <Link href="/" className="btn-back mb-6">
            <i className="ri-arrow-left-line"></i>
            Kembali
          </Link>

          {/* Hero Section */}
          <div className="glass-card rounded-[20px] p-8 text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-taveve-orange to-taveve-orange-dark flex items-center justify-center">
              <i className="ri-hand-heart-fill text-4xl text-white"></i>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Mulai perjalananmu bersama Taveve
            </h1>
            <p className="text-xl text-taveve-orange font-semibold mb-2">
              Siap Jadi Reseller?
            </p>
            <p className="text-gray-300 text-lg">
              {reseller.tagline}
            </p>
          </div>

          {/* How It Works */}
          <div className="glass-card rounded-[20px] p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Cara Kerja Simpel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-taveve-orange flex items-center justify-center font-bold text-black">
                  1
                </div>
                <div className="glass-card rounded-xl p-5 pl-8">
                  <div className="w-12 h-12 mb-3 rounded-lg bg-taveve-orange/15 flex items-center justify-center">
                    <i className="ri-robot-line text-taveve-orange text-2xl"></i>
                  </div>
                  <h3 className="font-bold mb-2">Gunakan BOT Otomatis</h3>
                  <p className="text-sm text-gray-400">
                    Akses & pesan produk via BOT canggih.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-taveve-orange flex items-center justify-center font-bold text-black">
                  2
                </div>
                <div className="glass-card rounded-xl p-5 pl-8">
                  <div className="w-12 h-12 mb-3 rounded-lg bg-taveve-orange/15 flex items-center justify-center">
                    <i className="ri-shopping-cart-line text-taveve-orange text-2xl"></i>
                  </div>
                  <h3 className="font-bold mb-2">Order Produk Mudah</h3>
                  <p className="text-sm text-gray-400">
                    Pilih & pesan produk digital 24/7.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-taveve-orange flex items-center justify-center font-bold text-black">
                  3
                </div>
                <div className="glass-card rounded-xl p-5 pl-8">
                  <div className="w-12 h-12 mb-3 rounded-lg bg-taveve-orange/15 flex items-center justify-center">
                    <i className="ri-price-tag-3-line text-taveve-orange text-2xl"></i>
                  </div>
                  <h3 className="font-bold mb-2">Jual & Atur Harga</h3>
                  <p className="text-sm text-gray-400">
                    Kamu tentukan sendiri margin profit.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 -top-3 w-10 h-10 rounded-full bg-taveve-orange flex items-center justify-center font-bold text-black">
                  4
                </div>
                <div className="glass-card rounded-xl p-5 pl-8">
                  <div className="w-12 h-12 mb-3 rounded-lg bg-taveve-orange/15 flex items-center justify-center">
                    <i className="ri-money-dollar-circle-line text-taveve-orange text-2xl"></i>
                  </div>
                  <h3 className="font-bold mb-2">Nikmati Profitnya!</h3>
                  <p className="text-sm text-gray-400">
                    Keuntungan instan masuk ke kamu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Profit */}
          <div className="glass-card rounded-[20px] p-8 mb-6 border-2 border-taveve-orange/30">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                <i className="ri-lightbulb-line text-taveve-orange"></i>
                Contoh Simpel
              </h2>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-shopping-bag-line text-blue-400"></i>
                </div>
                <p className="text-gray-300">
                  Kamu order produk A di BOT seharga <span className="text-white font-bold">Rp10.000</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <i className="ri-hand-coin-line text-green-400"></i>
                </div>
                <p className="text-gray-300">
                  Jual ke customer seharga <span className="text-white font-bold">Rp20.000</span>
                </p>
              </div>
              <div className="h-px bg-taveve-orange/30 my-4"></div>
              <div className="bg-gradient-to-r from-taveve-orange/20 to-taveve-orange/10 rounded-xl p-4 text-center border border-taveve-orange/40">
                <p className="text-sm text-gray-300 mb-1">Untung:</p>
                <p className="text-3xl font-bold text-taveve-orange">Rp10.000 langsung!</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-[20px] p-8 mb-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Keunggulan Taveve:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: 'ri-box-3-line', text: '100% tanpa stok barang' },
                { icon: 'ri-flashlight-line', text: 'Order tanpa nunggu admin' },
                { icon: 'ri-settings-3-line', text: 'Semua proses serba otomatis' },
                { icon: 'ri-megaphone-line', text: 'Fokus hanya promosi & jualan' },
                { icon: 'ri-time-line', text: 'Fleksibel, jualan kapan & di mana saja' },
                { icon: 'ri-rocket-line', text: 'Mulai jualan instan, tanpa registrasi' }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 glass-card rounded-lg p-4 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-taveve-orange/15 flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-taveve-orange text-xl`}></i>
                  </div>
                  <p className="text-gray-200">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-[20px] p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Mulai Sekarang!</h3>
            <p className="text-gray-300 mb-6">
              Langsung chat BOT kami dan mulai order produk dengan harga reseller
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={reseller.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4"
              >
                <i className="ri-whatsapp-line text-2xl"></i>
                <span>
                  <div className="font-bold">Chat BOT WhatsApp</div>
                  <div className="text-xs opacity-80">Mulai order sekarang</div>
                </span>
              </a>
              <a
                href={reseller.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4"
              >
                <i className="ri-telegram-line text-2xl"></i>
                <span>
                  <div className="font-bold">Chat Owner</div>
                  <div className="text-xs opacity-80">Via Telegram</div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
