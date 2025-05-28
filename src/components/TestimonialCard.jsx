"use client"

import React from 'react';
import { Quote } from 'lucide-react';


export default function TestimonialCard({
  name,
  role,
  image,
  testimonial,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-indigo-200" />
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{testimonial}</p>
    </div>
  );
}