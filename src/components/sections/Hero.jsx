'use client';
import React, { useEffect, useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState()

  console.log("language", language);

  async function getData() {
    const res = await fetch(`http://localhost:5000/api/landing/hero?locale=${language}`)
    const data = await res.json()
    setFormData(data[0])
  }

  useEffect(() => {
    getData()
  }, [language])


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#ffffff] pt-[40px] md:pt-[70px] ">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 animate-gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-1000/10 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_10%,rgba(250,204,21,0.05)_50%,transparent_75%)] bg-[length:100vh_100vh] animate-gradient"></div>
      </div>
      <div className="container h-screen flex items-center m-auto px-6 pb-24 relative ">
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left space-y-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 text-[#ffb06f] mb-6 glass-effect animate-border-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Escuela de idiomas online.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {formData && formData[language]?.title}
              <span className="text-[#ffb06f] block mt-2 animate-text-shimmer">
                {formData && formData?.title2}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up leading-relaxed">
              {formData && formData[language]?.subtitle}
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 space-x-4">
              <button className="w-[300px] md:w-auto text-center group bg-[#ffb06f] text-gray-900 px-20 md:px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-lg shadow-yellow-400/20">
                {formData && formData[language]?.btcPrimary}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className=" w-[300px] md:w-auto text-center md:px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all glass-effect">
                {formData && formData[language]?.btcSecondary}
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffb06f] rounded-lg transform rotate-3 animate-pulse-slow"></div>
              <img
                src={formData && formData?.backgroundImageUrl}
                alt="Students learning"
                className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl animate-float glass-effect">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium text-white">{formData && formData[language]?.studentsOnline} students online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}