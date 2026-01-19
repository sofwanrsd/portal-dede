'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Product {
  product: string;
  syarat: string[];
  garansi: string[];
}

export default function WarrantyPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/warranty.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading warranty:', err);
        setLoading(false);
      });
  }, []);

  const currentProduct = products.find((p) => p.product === selectedProduct);

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
            <h1 className="text-2xl font-bold text-taveve-orange mb-2">
              Ketentuan Garansi
            </h1>
            <p className="text-gray-400">
              Pilih produk untuk melihat syarat dan garansi
            </p>
          </div>

          {/* Product Selector */}
          <div className="mb-6">
            <label className="block text-sm text-white/90 mb-2 font-medium">
              Pilih Produk
            </label>
            {loading ? (
              <div className="w-full h-12 rounded-lg glass-card animate-pulse"></div>
            ) : (
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-3 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-taveve-orange border-none appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  -- Pilih Produk --
                </option>
                {products.map((product, index) => (
                  <option key={index} value={product.product} className="bg-[#1a1d29]">
                    {product.product}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Warranty Details */}
          {currentProduct && (
            <div className="space-y-4">
              {/* Syarat */}
              <div className="glass-card rounded-[15px] p-6">
                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <i className="ri-file-list-3-line text-taveve-orange"></i>
                  Syarat Pembelian
                </h2>
                <ul className="space-y-2">
                  {currentProduct.syarat.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <i className="ri-checkbox-circle-line text-taveve-orange mt-0.5"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Garansi */}
              <div className="glass-card rounded-[15px] p-6">
                <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <i className="ri-shield-check-line text-taveve-orange"></i>
                  Ketentuan Garansi
                </h2>
                <ul className="space-y-2">
                  {currentProduct.garansi.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <i className="ri-check-line text-taveve-orange mt-0.5"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {!selectedProduct && (
            <div className="glass-card rounded-[15px] p-8 text-center text-gray-400">
              <i className="ri-information-line text-5xl mb-3 text-taveve-orange/50"></i>
              <p>Silakan pilih produk untuk melihat ketentuan garansi</p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
