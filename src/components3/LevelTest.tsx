import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRight } from 'lucide-react';

export function LevelTest() {
  const { t } = useLanguage();

  return (
    <section id="levelTest" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">{t('levelTest.title')}</h2>
              <p className="text-gray-600 mb-8">{t('levelTest.description')}</p>
              <button className="bg-[#ffb06f] text-gray-900 px-8 py-3 rounded-full font-semibold inline-flex items-center hover:bg-yellow-300 transition-all transform hover:translate-x-2">
                {t('levelTest.start')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Level Test"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}