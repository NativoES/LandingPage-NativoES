import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Languages, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center space-x-2">
              <Languages className="w-8 h-8 text-yellow-400" />
              <span className="text-2xl font-bold text-white">LinguaLearn</span>
            </div>
            <p className="text-gray-400">
              Premium language learning platform for ambitious learners worldwide.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:info@lingualear.com" className="flex items-center space-x-2 hover:text-[#ffb06f] transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@lingualear.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-[#ffb06f] transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>123 Language St, Education City</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              {['about', 'teachers', 'services', 'pricing', 'reviews', 'levelTest'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block hover:text-[#ffb06f] transition-colors"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#ffb06f] hover:text-gray-900 transition-all transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} LinguaLearn. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-[#ffb06f] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#ffb06f] transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-[#ffb06f] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}