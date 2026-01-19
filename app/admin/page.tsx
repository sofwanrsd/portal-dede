import Link from 'next/link';
import { siteConfig } from '../config';

const adminContacts = [
  {
    name: siteConfig.contacts.admin1.name,
    role: siteConfig.contacts.admin1.role,
    phone: siteConfig.contacts.admin1.number,
    icon: 'ri-user-3-line',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: siteConfig.contacts.admin2.name,
    role: siteConfig.contacts.admin2.role,
    phone: siteConfig.contacts.admin2.number,
    icon: 'ri-user-settings-line',
    color: 'from-green-500 to-green-600'
  },
  {
    name: siteConfig.contacts.owner.name,
    role: siteConfig.contacts.owner.role,
    phone: siteConfig.contacts.owner.number,
    icon: 'ri-vip-crown-line',
    color: 'from-taveve-orange to-yellow-500'
  }
];

export default function AdminPage() {
  return (
    <>
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        <main className="glass-card rounded-[20px] p-6 w-full max-w-[640px]">
          {/* Header */}
          <div className="mb-6">
            <Link href="/" className="btn-back mb-4">
              <i className="ri-arrow-left-line"></i>
              Kembali
            </Link>
            <h1 className="text-2xl font-bold text-taveve-orange mb-2 flex items-center gap-2">
              <i className="ri-customer-service-fill"></i>
              Kontak Admin
            </h1>
            <p className="text-gray-400">Pilih admin yang ingin dihubungi</p>
          </div>

          {/* Admin Cards */}
          <div className="space-y-4">
            {adminContacts.map((admin, index) => (
              <a
                key={index}
                href={`https://wa.me/${admin.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-[15px] p-5 flex items-center gap-4 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${admin.color} flex items-center justify-center flex-shrink-0`}>
                  <i className={`${admin.icon} text-3xl text-white`}></i>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1">{admin.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{admin.role}</p>
                  <div className="flex items-center gap-2 text-taveve-orange text-sm">
                    <i className="ri-whatsapp-line"></i>
                    <span>Chat via WhatsApp</span>
                  </div>
                </div>
                <i className="ri-arrow-right-s-line text-taveve-orange text-2xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-6 glass-card rounded-xl p-4">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-taveve-orange/15 flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-taveve-orange"></i>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">Jam Operasional</h3>
                <p className="text-xs text-gray-400">
                  Senin - Minggu: 09:00 - 22:00 WIB
                </p>
                <p className="text-xs text-taveve-orange mt-1">
                  Bot 24/7 tetap aktif di luar jam kerja
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
