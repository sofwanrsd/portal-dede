import Link from 'next/link';
import { siteConfig } from '../config';

export default function OrderPage() {
  const { orderMethods: methods } = siteConfig.features;

  return (
    <>
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <main className="glass-card rounded-[20px] p-6 w-full max-w-[700px]">
          {/* Header */}
          <div className="mb-6">
            <Link href="/" className="btn-back mb-4">
              <i className="ri-arrow-left-line"></i>
              Kembali
            </Link>
            <h1 className="text-2xl font-bold text-taveve-orange mb-2">
              Cara Order
            </h1>
            <p className="text-gray-400">Pilih metode order yang tersedia</p>
          </div>

          {/* Order Methods */}
          <div className="space-y-4">
            {/* Telegram Bot */}
            <div className={`glass-card rounded-[15px] p-6 ${methods.telegram.active ? 'border-2 border-taveve-orange/30' : 'opacity-75'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <i className="ri-telegram-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Bot Telegram</h2>
                    <div className="flex items-center gap-2 mt-1">
                      {methods.telegram.active ? (
                        <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs rounded-full font-semibold">
                          ✓ AKTIF 24/7
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs rounded-full font-semibold">
                          🚧 SEGERA HADIR
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 text-white list-decimal list-inside mb-4">
                <li>Buka Telegram dan cari bot kami</li>
                <li>Ketik <code className="bg-white/10 px-2 py-0.5 rounded">/start</code> untuk mulai</li>
                <li>Ketik <code className="bg-white/10 px-2 py-0.5 rounded">/list</code> untuk melihat produk</li>
                <li>Pilih produk yang diinginkan</li>
                <li>Ikuti instruksi pembayaran dari bot</li>
                <li>Produk akan dikirim otomatis setelah pembayaran terkonfirmasi</li>
              </ol>
              <a
                href={methods.telegram.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary inline-flex items-center gap-2 px-6 py-3 w-full justify-center ${!methods.telegram.active && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
              >
                <i className="ri-telegram-line text-xl"></i>
                {methods.telegram.label}
              </a>
            </div>

            {/* WhatsApp Bot */}
            <div className={`glass-card rounded-[15px] p-6 ${methods.whatsapp.active ? 'border-2 border-green-500/30' : 'opacity-75'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <i className="ri-whatsapp-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Bot WhatsApp</h2>
                    <div className="flex items-center gap-2 mt-1">
                      {methods.whatsapp.active ? (
                        <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs rounded-full font-semibold">
                          ✓ AKTIF 24/7
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs rounded-full font-semibold">
                          🚧 SEGERA HADIR
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 text-gray-400 list-decimal list-inside mb-4">
                <li>Buka WhatsApp dan hubungi bot kami</li>
                <li>Ketik <code className="bg-white/10 px-2 py-0.5 rounded">/menu</code> untuk melihat produk</li>
                <li>Pilih produk yang diinginkan</li>
                <li>Ikuti instruksi pembayaran dari bot</li>
                <li>Produk akan dikirim otomatis</li>
              </ol>
              <a
                 href={methods.whatsapp.link}
                 target={methods.whatsapp.active ? "_blank" : undefined}
                 className={`btn-secondary inline-flex items-center gap-2 px-6 py-3 w-full justify-center ${!methods.whatsapp.active && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
              >
                <i className="ri-whatsapp-line text-xl"></i>
                {methods.whatsapp.active ? methods.whatsapp.label : 'Dalam Pengembangan'}
              </a>
              {!methods.whatsapp.active && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Untuk sementara, gunakan admin manual via WhatsApp
                </p>
              )}
            </div>

            {/* Webstore */}
            <div className={`glass-card rounded-[15px] p-6 ${methods.webstore.active ? 'border-2 border-taveve-orange/30' : 'opacity-75'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-taveve-orange to-orange-600 flex items-center justify-center">
                    <i className="ri-store-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Webstore</h2>
                    <div className="flex items-center gap-2 mt-1">
                      {methods.webstore.active ? (
                        <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 text-green-400 text-xs rounded-full font-semibold">
                          ✓ AKTIF 24/7
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs rounded-full font-semibold">
                          🚧 SEGERA HADIR
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <ol className="space-y-2 text-gray-400 list-decimal list-inside mb-4">
                <li>Kunjungi webstore kami</li>
                <li>Browse dan pilih produk</li>
                <li>Tambahkan ke keranjang dan checkout</li>
                <li>Selesaikan pembayaran</li>
                <li>Produk akan dikirim ke email Anda</li>
              </ol>
              <a 
                 href={methods.webstore.link}
                 target={methods.webstore.active ? "_blank" : undefined}
                 className={`btn-secondary inline-flex items-center gap-2 px-6 py-3 w-full justify-center ${!methods.webstore.active && 'opacity-50 cursor-not-allowed pointer-events-none'}`}
              >
                <i className="ri-store-line text-xl"></i>
                {methods.webstore.active ? methods.webstore.label : 'Dalam Pengembangan'}
              </a>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-6 glass-card rounded-xl p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-taveve-orange/15 flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-line text-taveve-orange"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">Butuh Bantuan?</h3>
                <p className="text-xs text-gray-400 mb-2">
                  Hubungi admin kami untuk order manual atau pertanyaan
                </p>
                <Link href="/admin" className="text-xs text-taveve-orange hover:text-taveve-orange-light inline-flex items-center gap-1">
                  Lihat Kontak Admin
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
