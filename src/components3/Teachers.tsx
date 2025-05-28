import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Star, Award } from 'lucide-react';

export function Teachers() {
  const { t } = useLanguage();
  
  const teachers = [
    {
      name: 'Sarah Johnson',
      language: 'English',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      specialization: 'Business English'
    },
    {
      name: 'Carlos Rodríguez',
      language: 'Spanish',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      specialization: 'Conversational Spanish'
    },
    {
      name: 'Anna Petrova',
      language: 'Russian',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      specialization: 'Russian Literature'
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 animate-fade-in">
          {t('teachers.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="group bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{teacher.name}</h3>
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">{teacher.language}</p>
                <p className="text-sm text-gray-500 mb-4">{teacher.specialization}</p>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-900 font-semibold">{teacher.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}