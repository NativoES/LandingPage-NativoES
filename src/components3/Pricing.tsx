import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Check } from 'lucide-react';

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">{t('pricing.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['basic', 'standard', 'premium'].map((plan) => (
            <div key={plan} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{t(`pricing.${plan}.title`)}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${t(`pricing.${plan}.price`)}</span>
                  <span className="text-gray-600">/{t('pricing.perMonth')}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#ffb06f] mr-3" />
                      {t(`pricing.${plan}.features.${i}`)}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full bg-[#ffb06f] text-gray-900 font-semibold hover:bg-yellow-300 transition-colors">
                  {t('pricing.selectPlan')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}