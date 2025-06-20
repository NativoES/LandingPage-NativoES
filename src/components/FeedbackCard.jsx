"use client"
import React from "react";
import Button from "@/components/ui/Button";
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';
import { useLanguage } from "@/hooks/useLanguage";

export default function FeedbackCard({ feedback }) {
  const { language } = useLanguage();

  const localized = feedback?.[language];
  const resennia = localized?.resennia;
  const respuesta = localized?.respuestas;

  if (!resennia) return null;

  return (
    <div
      className="bg-[#ffb06f] md:mx-5 border border-gray-200 shadow-md rounded-[55px] p-6 hover:shadow-lg transition-shadow"
    >
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <div className="flex items-center max-w-md mx-auto p-4 space-y-4">
          <img
            src={ resennia?.avatarUrl || "/placeholder.jpg"}
            alt={resennia?.nombre}
            className="w-16 h-16 rounded-full object-cover mr-4 hover:scale-110 transition-all"
          />
          <div className="relative p-4 pb-2 rounded-r-[8px] text-black bg-gray-100 self-end ml-auto mr-2 rounded-bl-[8px] hover:scale-110 transition-all">
            <span className="absolute left-[-20px] top-0 w-0 h-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-gray-100"></span>
            <p className="text-gray-600">{resennia.contenido}</p>
            <span className="block text-[12px] text-right text-gray-500">
              {new Date(resennia.fecha).toLocaleTimeString()} <span className="tracking-tighter" style={{ letterSpacing: '-4px' }}>✓✓</span>
            </span>
          </div>
        </div>

        {respuesta && (
          <div className="flex items-center">
            <div className="max-w-md mx-auto p-4 space-y-4">
              <div className="relative p-4 pb-2 rounded-l-[8px] text-black bg-gray-100 self-end ml-auto mr-2 rounded-br-[8px] hover:scale-110 transition-all">
                <span className="absolute right-[-20px] top-0 w-0 h-0 border-r-[20px] border-t-[20px] border-r-transparent border-t-gray-100"></span>
                <p className="text-gray-600">{respuesta.contenido}</p>
                <p className="flex items-center justify-between mt-3">
                  <span className="flex items-center text-[12px] text-right text-black font-extrabold">
                    <img
                      src="/logo.svg"
                      alt="logo"
                      className="w-6 h-6 inline-block rounded-full object-cover mr-2 hover:scale-110 transition-all"
                    />
                    {respuesta.autor || 'NATIVOES'}
                  </span>
                  <span className="block text-[12px] text-right text-gray-500">
                    {new Date(respuesta.fecha).toLocaleTimeString()} <span className="tracking-tighter" style={{ letterSpacing: '-4px' }}>✓✓</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <div className="w-[150px]">
            <Link href="/Resenas">
              <Button theme={'Black'} click={() => ''}>
                Ver más
              </Button>
            </Link>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
