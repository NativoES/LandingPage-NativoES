import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          {t('about.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-700 p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-200 leading-relaxed">
              {t('about.description1')}
            </p>
          </div>
          <div className="bg-gray-700 p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300">
            <p className="text-gray-200 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}