'use client';

import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SingleFeedbackCard({ feedback }) {
    return (
        <div className="bg-[#ffb06f] md:mx-5 border border-gray-200 shadow-md rounded-[55px] p-6 hover:shadow-lg transition-shadow min-w-[300px] max-w-[400px]">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <div className="flex items-center max-w-md mx-auto p-4 space-y-4">
                    <img
                        src={feedback.avatarUrl}
                        alt={feedback.nombre}
                        className="w-16 h-16 rounded-full object-cover mr-4 hover:scale-110 transition-all"
                    />
                    <div className="relative p-4 pb-2 rounded-r-[8px] text-black bg-gray-100 self-end ml-auto mr-2 rounded-bl-[8px] hover:scale-110 transition-all">
                        <span className="absolute left-[-20px] top-0 w-0 h-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-gray-100" />
                        <p className="text-gray-800 font-semibold">{feedback.nombre}</p>
                        <p className="text-gray-600 mt-2">{feedback.contenido}</p>
                        <div className="flex mt-1">
                            {Array.from({ length: feedback.calificacion }).map((_, i) => (
                                <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
                            ))}
                        </div>
                        <span className="block text-[12px] text-right text-gray-500 mt-1">
                            {new Date(feedback.fecha).toLocaleString('es-ES')}
                        </span>
                    </div>
                </div>

                {feedback.respuesta && (
                    <div className="flex items-center mt-4">
                        <div className="max-w-md mx-auto p-4 space-y-4">
                            <div className="relative p-4 pb-2 rounded-l-[8px] text-black bg-gray-100 self-end ml-auto mr-2 rounded-br-[8px] hover:scale-110 transition-all">
                                <span className="absolute right-[-20px] top-0 w-0 h-0 border-r-[20px] border-t-[20px] border-r-transparent border-t-gray-100" />
                                <p className="text-gray-600">{feedback.respuesta.contenido}</p>
                                <p className="flex items-center justify-between mt-3 text-[12px] text-gray-500">
                                    <span className="flex items-center font-bold text-black">
                                        <img
                                            src="/logo.svg"
                                            alt="NATIVOES"
                                            className="w-6 h-6 rounded-full object-cover mr-2"
                                        />
                                        {feedback.respuesta.autor || 'NATIVOES'}
                                    </span>
                                    <span>{new Date(feedback.respuesta.fecha).toLocaleString('es-ES')}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-center mt-4">
                    <div className="w-[150px]">
                        <Link href="/Resenas">
                            <Button theme="Black">Ver más</Button>
                        </Link>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
