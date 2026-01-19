'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function FAQPage() {
  const [faqCategories, setFaqCategories] = useState<FAQCategory[]>([]);
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/faq.json')
      .then((res) => res.json())
      .then((data: FAQCategory[]) => {
        // Filter out empty categories and items
        const filtered = data
          .filter(cat => cat.category && cat.items.length > 0)
          .map(cat => ({
            ...cat,
            items: cat.items.filter(item => item.question && item.answer)
          }));
        setFaqCategories(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading FAQ:', err);
        setLoading(false);
      });
  }, []);

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

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
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-gray-400">
              Temukan jawaban untuk pertanyaan umum tentang Taveve Store
            </p>
          </div>

          {/* FAQ by Category */}
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-[15px] p-4 h-16 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  {/* Category Header */}
                  <h2 className="text-lg font-semibold mb-3 text-gray-200">
                    {category.category}
                  </h2>
                  
                  {/* FAQ Items */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => {
                      const isOpen = openIndex === `${catIndex}-${itemIndex}`;
                      return (
                        <div key={itemIndex} className="glass-card rounded-[15px] overflow-hidden">
                          <button
                            className="w-full text-left p-4 flex justify-between items-center hover:bg-white/5 transition-colors"
                            onClick={() => toggleItem(catIndex, itemIndex)}
                          >
                            <span className="font-medium pr-4">{item.question}</span>
                            <i
                              className={`ri-arrow-down-s-line text-taveve-orange text-xl transition-transform flex-shrink-0 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            ></i>
                          </button>
                          <div
                            className={`transition-all duration-300 ease-in-out ${
                              isOpen
                                ? 'max-h-96 opacity-100'
                                : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                          >
                            <div className="px-4 pb-4 text-gray-300 border-t border-white/10 pt-4">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
