import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star } from 'lucide-react';

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('reviews.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${review === 1 ? '1535713875002-d1d0cf377fde' : review === 2 ? '1573496359142-b89c5d362ab6' : '1573497019940-1c28c88b4f3e'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80`}
                  alt={t(`reviews.${review}.name`)}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{t(`reviews.${review}.name`)}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{t(`reviews.${review}.text`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}