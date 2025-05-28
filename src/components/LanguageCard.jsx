"use client"

import React from 'react';
import { Clock, Users, Star, Globe2 } from 'lucide-react';


export default function LanguageCard({
  language,
  level,
  image,
  duration,
  students,
  rating,
  price,
  flag,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={language}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 text-2xl">{flag}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Globe2 className="h-5 w-5 text-[#ffb06f]  mr-2" />
          <h3 className="text-xl font-semibold text-gray-800">{language}</h3>
        </div>
        <p className="text-[#ffb06f]  font-medium mb-4">{level}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{students}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 mr-1 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#ffb06f] ">{price}</span>
          <button className="bg-[#000000] text-[#ffb06f]  px-4 py-2 rounded-md hover: transition-colors">
            Adquirir
          </button>
        </div>
      </div>
    </div>
  );
}