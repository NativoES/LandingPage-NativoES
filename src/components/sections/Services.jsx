'use client';

import React, { useEffect, useState } from 'react';
import { Video, Users, MessageCircle, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import "@/app/globals.css";

// 1. Mapeo de iconos
const iconMap = {
  people: Users,
  video: Video,
  chat: MessageCircle,
  book: BookOpen,
  graduation: GraduationCap,
  global: Globe,
};

export default function Services() {
  const { language } = useLanguage();
  const [services, setServices] = useState([]);

  // 2. Cargar datos desde la API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/landing/method-course?locale=${language}`);
        const data = await res.json();
        const parsed = data.map((item) => {
          const content = item[language];
          return {
            _id: item._id,
            title: content.titulo,
            description: content.descripcion,
            typeIcon: content.typeIcon,
          };
        });
        setServices(parsed);
      } catch (err) {
        console.error('Error cargando métodos de estudio:', err);
      }
    };

    fetchServices();
  }, [language]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
      {services.map((service) => {
        const Icon = iconMap[service.typeIcon] || BookOpen; // Ícono por defecto si no se reconoce
        return (
          <div
            key={service._id}
            className="group bg-white p-8 rounded-xl shadow-lg hover-lift overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#ffb06f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <Icon className="left-0 right-0 mx-auto w-12 h-12 text-[#ffb06f] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        );
      })}
    </div>
  );
}
