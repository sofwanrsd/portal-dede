'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState(0);

  // Toast notification state
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Refund Calculator States
  const [productPrice, setProductPrice] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number>(30);
  const [usedDays, setUsedDays] = useState<number>(0);
  const [adminFee, setAdminFee] = useState<number>(0.9); // 90% = 0.9
  const [refundAmount, setRefundAmount] = useState<number | null>(null);

  // Email Generator States
  const [emailDomain, setEmailDomain] = useState<string>('');
  const [emailCount, setEmailCount] = useState<number>(10);
  const [nameType, setNameType] = useState<string>('random');
  const [charLength, setCharLength] = useState<number>(8);
  const [generatedEmails, setGeneratedEmails] = useState<string[]>([]);

  const tools = [
    { 
      name: 'Kalkulator Refund', 
      icon: 'ri-calculator-line',
      description: 'Hitung estimasi refund produk'
    },
    { 
      name: 'Email Generator', 
      icon: 'ri-mail-line',
      description: 'Generate email address random'
    }
  ];

  // Toast function
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const calculateRefund = () => {
    if (productPrice <= 0 || totalDays <= 0 || usedDays < 0) {
      showToast('Mohon isi semua field dengan benar!', 'error');
      return;
    }

    if (usedDays > totalDays) {
      showToast('Hari yang sudah digunakan tidak boleh lebih dari total hari!', 'error');
      return;
    }

    const remainingDays = totalDays - usedDays;
    const dailyPrice = productPrice / totalDays;
    const baseRefund = dailyPrice * remainingDays;
    const refundAfterFee = baseRefund * adminFee;

    setRefundAmount(Math.round(refundAfterFee));
    showToast('Refund berhasil dihitung!', 'success');
  };

  const resetCalculator = () => {
    setProductPrice(0);
    setTotalDays(30);
    setUsedDays(0);
    setRefundAmount(null);
  };

  const generateUsername = (length: number, type: string): string => {
    let chars = '';
    let result = '';
    
    switch(type) {
      case 'random':
        chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        break;
      case 'lowercase':
        chars = 'abcdefghijklmnopqrstuvwxyz';
        break;
      case 'alphanumeric':
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        break;
      case 'numbers':
        chars = '0123456789';
        break;
      case 'lowercase-number':
        // Format: letters + numbers at end
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const letterCount = Math.floor(length * 0.7);
        const numberCount = length - letterCount;
        
        for (let i = 0; i < letterCount; i++) {
          result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < numberCount; i++) {
          result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return result;
      default:
        chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    }
    
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateEmails = () => {
    if (!emailDomain) {
      showToast('Mohon masukkan domain email!', 'error');
      return;
    }

    if (emailCount <= 0 || emailCount > 100) {
      showToast('Jumlah email harus antara 1-100!', 'error');
      return;
    }

    const emails: string[] = [];
    for (let i = 0; i < emailCount; i++) {
      const username = generateUsername(charLength, nameType);
      emails.push(`${username}@${emailDomain}`);
    }
    setGeneratedEmails(emails);
    showToast(`${emailCount} email berhasil digenerate!`, 'success');
  };

  const copyAllEmails = () => {
    const allEmails = generatedEmails.join('\n');
    navigator.clipboard.writeText(allEmails);
    showToast('Semua email berhasil dicopy!', 'success');
  };

  const resetGenerator = () => {
    setEmailDomain('');
    setEmailCount(10);
    setCharLength(8);
    setGeneratedEmails([]);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          <i className={`${
            toast.type === 'success' ? 'ri-checkbox-circle-fill' : 
            toast.type === 'error' ? 'ri-error-warning-fill' : 
            'ri-information-fill'
          } text-xl`}></i>
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

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
            <h1 className="text-2xl font-bold text-taveve-orange mb-2 flex items-center gap-2">
              <i className="ri-tools-fill"></i>
              Tools Taveve
            </h1>
            <p className="text-gray-400">Berbagai tools untuk memudahkan aktivitas kamu</p>
          </div>

          {/* Tool Tabs */}
          <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {tools.map((tool, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-5 py-3 rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                    activeTab === index
                      ? 'bg-taveve-orange text-black'
                      : 'glass-card hover:bg-white/10'
                  }`}
                >
                  <i className={`${tool.icon} text-lg`}></i>
                  <div className="text-left">
                    <div className="text-sm font-semibold">{tool.name}</div>
                    <div className="text-xs opacity-70">{tool.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Tool Content */}
          {activeTab === 0 && (
            <div className="glass-card rounded-[15px] p-6 space-y-5">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <i className="ri-calculator-line text-taveve-orange"></i>
                Kalkulator Refund
              </h2>

              {/* Input Fields */}
              <div>
                <label className="block text-sm text-white/90 mb-2 font-medium">
                  <i className="ri-money-dollar-circle-line text-taveve-orange mr-1"></i>
                  Harga Produk (Rp)
                </label>
                <input
                  type="number"
                  value={productPrice || ''}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  placeholder="Contoh: 50000"
                  className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/90 mb-2 font-medium">
                    <i className="ri-calendar-line text-taveve-orange mr-1"></i>
                    Total Hari
                  </label>
                  <input
                    type="number"
                    value={totalDays || ''}
                    onChange={(e) => setTotalDays(Number(e.target.value))}
                    placeholder="30"
                    className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/90 mb-2 font-medium">
                    <i className="ri-time-line text-taveve-orange mr-1"></i>
                    Hari Terpakai
                  </label>
                  <input
                    type="number"
                    value={usedDays || ''}
                    onChange={(e) => setUsedDays(Number(e.target.value))}
                    placeholder="0"
                    className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/90 mb-2 font-medium">
                  <i className="ri-percent-line text-taveve-orange mr-1"></i>
                  Admin Fee (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={adminFee * 100}
                  onChange={(e) => setAdminFee(Number(e.target.value) / 100)}
                  placeholder="90"
                  className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                />
                <p className="text-xs text-gray-400 mt-1">Fee yang diterima dari refund (default: 90%)</p>
              </div>

              {/* Quick Presets */}
              <div>
                <p className="text-xs text-gray-400 mb-2">Preset Cepat:</p>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setTotalDays(30)}
                    className="px-3 py-1.5 text-xs rounded-lg glass-card hover:bg-taveve-orange/20 transition-colors"
                  >
                    30 Hari
                  </button>
                  <button
                    onClick={() => setTotalDays(90)}
                    className="px-3 py-1.5 text-xs rounded-lg glass-card hover:bg-taveve-orange/20 transition-colors"
                  >
                    90 Hari
                  </button>
                  <button
                    onClick={() => setTotalDays(365)}
                    className="px-3 py-1.5 text-xs rounded-lg glass-card hover:bg-taveve-orange/20 transition-colors"
                  >
                    1 Tahun
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={calculateRefund}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <i className="ri-calculator-fill"></i>
                  Hitung Refund
                </button>
                <button
                  onClick={resetCalculator}
                  className="px-5 btn-secondary"
                >
                  <i className="ri-refresh-line"></i>
                </button>
              </div>

              {/* Result Display */}
              {refundAmount !== null && (
                <div className="mt-6 p-5 bg-gradient-to-r from-taveve-orange/10 to-taveve-orange/5 border border-taveve-orange/30 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300">Sisa Hari Aktif:</span>
                    <span className="font-bold text-lg">{totalDays - usedDays} hari</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300">Harga Per Hari:</span>
                    <span className="font-semibold">Rp {Math.round(productPrice / totalDays).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300">Refund Sebelum Fee:</span>
                    <span className="font-semibold">Rp {Math.round((productPrice / totalDays) * (totalDays - usedDays)).toLocaleString('id-ID')}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-300">Admin Fee ({(adminFee * 100).toFixed(0)}%):</span>
                    <span className="font-semibold text-red-400">
                      - Rp {Math.round((productPrice / totalDays) * (totalDays - usedDays) * (1 - adminFee)).toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="h-px bg-taveve-orange/30 my-3"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-taveve-orange font-semibold flex items-center gap-2">
                      <i className="ri-money-dollar-circle-fill text-xl"></i>
                      Refund Diterima:
                    </span>
                    <span className="text-2xl font-bold text-taveve-orange">
                      Rp {refundAmount.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    *Estimasi refund dapat berbeda dengan kebijakan aktual
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 1 && (
            <div className="glass-card rounded-[15px] p-6 space-y-5">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <i className="ri-mail-line text-taveve-orange"></i>
                Email Generator
              </h2>

              {/* Pengaturan Generator */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/90 mb-2 font-medium">
                    <i className="ri-global-line text-taveve-orange mr-1"></i>
                    Domain Email
                  </label>
                  <input
                    type="text"
                    value={emailDomain}
                    onChange={(e) => setEmailDomain(e.target.value)}
                    placeholder="example.com"
                    className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/90 mb-2 font-medium">
                      <i className="ri-list-check text-taveve-orange mr-1"></i>
                      Jumlah Email
                    </label>
                    <input
                      type="number"
                      value={emailCount}
                      onChange={(e) => setEmailCount(Number(e.target.value))}
                      placeholder="10"
                      min="1"
                      max="100"
                      className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/90 mb-2 font-medium">
                      <i className="ri-text text-taveve-orange mr-1"></i>
                      Panjang Karakter
                    </label>
                    <input
                      type="number"
                      value={charLength}
                      onChange={(e) => setCharLength(Number(e.target.value))}
                      placeholder="8"
                      min="4"
                      max="20"
                      className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/90 mb-2 font-medium">
                    <i className="ri-file-list-3-line text-taveve-orange mr-1"></i>
                    Tipe Nama
                  </label>
                  <select
                    value={nameType}
                    onChange={(e) => setNameType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none text-white cursor-pointer"
                  >
                    <option value="random" className="bg-[#1a1d29]">Karakter Acak (huruf + angka)</option>
                    <option value="lowercase" className="bg-[#1a1d29]">Huruf Kecil Saja</option>
                    <option value="lowercase-number" className="bg-[#1a1d29]">Huruf Kecil + Angka (terpisah)</option>
                    <option value="alphanumeric" className="bg-[#1a1d29]">Campuran Huruf Besar & Kecil</option>
                    <option value="numbers" className="bg-[#1a1d29]">Angka Saja</option>
                  </select>
                  <p className="text-xs text-gray-400 mt-1">Pilih format username yang diinginkan</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={generateEmails}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <i className="ri-sparkling-fill"></i>
                  Generate Email
                </button>
                <button
                  onClick={resetGenerator}
                  className="px-5 btn-secondary"
                >
                  <i className="ri-refresh-line"></i>
                </button>
              </div>

              {/* Generated Emails */}
              {generatedEmails.length > 0 && (
                <div className="mt-6 p-5 bg-gradient-to-r from-taveve-orange/10 to-taveve-orange/5 border border-taveve-orange/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold flex items-center gap-2">
                      <i className="ri-check-line text-taveve-orange"></i>
                      {generatedEmails.length} Email Berhasil Digenerate
                    </h3>
                    <button
                      onClick={copyAllEmails}
                      className="px-4 py-2 bg-taveve-orange/20 hover:bg-taveve-orange/30 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <i className="ri-file-copy-line"></i>
                      Copy Semua
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                    {generatedEmails.map((email, index) => (
                      <div key={index} className="glass-card rounded-lg p-3 flex items-center justify-between group">
                        <span className="text-sm font-mono text-gray-200">{email}</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(email);
                            showToast('Email dicopy!', 'success');
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-taveve-orange hover:text-taveve-orange-light"
                        >
                          <i className="ri-file-copy-line"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
