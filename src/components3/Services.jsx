import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Video, Users, MessageCircle, BookOpen } from 'lucide-react';
import "@/app/globals.css";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: Video, title: 'services.online.title', description: 'services.online.description' },
    { icon: Users, title: 'services.group.title', description: 'services.group.description' },
    { icon: MessageCircle, title: 'services.conversation.title', description: 'services.conversation.description' },
    { icon: BookOpen, title: 'services.intensive.title', description: 'services.intensive.description' }
  ];

  return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children ">
          {services.map((Service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl shadow-lg hover-lift overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ffb06f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <Service.icon className="left-0 right-0 mx-auto w-12 h-12 text-[#ffb06f] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t(Service.title)}</h3>
              <p className="text-gray-600">{t(Service.description)}</p>
            </div>
          ))}
        </div>
  );
}