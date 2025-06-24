"use client";
import { Globe2 } from 'lucide-react';
import { PhoneArrowUpRightIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import ScrollAnimation from 'react-animate-on-scroll';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const { language } = useLanguage();
    const [information, setInformation] = useState([]);

    // Convertir lenguaje a minúsculas para evitar problemas de key
    const lang = language?.toLowerCase();

    useEffect(() => {
        if (!lang) return; // no cargar si no hay lenguaje
        const loadData = async () => {
            try {
                const url = `http://localhost:5000/api/landing/information?locale=${lang}`;
                const res = await fetch(url);
                const data = await res.json();
                setInformation(data);
            } catch (error) {
                console.error("Error al cargar los datos:", error);
            }
        };
        loadData();
    }, [lang]);

    // Evitar render si no hay datos listos
    if (!information.length || !lang || !information[0]?.[lang]) {
        return (
            <footer className="relative bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 z-30">
                <div className="max-w-7xl mx-auto text-center text-white">Cargando...</div>
            </footer>
        );
    }

    // Extraer datos para no repetir tantas veces
    const info = information[0][lang];

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    function agruparHorarios(horarios) {
        if (!horarios || !Array.isArray(horarios)) return [];

        const resultado = [];
        let grupoActual = null;

        for (let i = 0; i < horarios.length; i++) {
            const diaActual = horarios[i];
            const estaAbierto = diaActual.abierto;
            const horario = estaAbierto ? `${diaActual.horaApertura} - ${diaActual.horaCierre}` : "Cerrado";

            if (!grupoActual || grupoActual.horario !== horario) {
                grupoActual = {
                    dias: [diaActual.dia],
                    horario
                };
                resultado.push(grupoActual);
            } else {
                grupoActual.dias.push(diaActual.dia);
            }
        }

        return resultado.map(grupo => {
            const { dias, horario } = grupo;
            const diaTexto = dias.length === 1
                ? dias[0]
                : `${dias[0]} a ${dias[dias.length - 1]}`;
            return { diaTexto, horario };
        });
    }



    const horarios = information[0]?.[language]?.horarios || [];
    const horariosFormateados = agruparHorarios(horarios);


    return (
        <footer id="contacts" className="relative bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 z-30">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
                <div>
                    <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft" initiallyVisible={false} offset={0}>
                        <div className="flex items-center mb-4">
                            <Globe2 className="h-8 w-8 text-[#ffb06f]" />
                            <span className="ml-2 text-xl font-bold text-white">NativoES</span>
                        </div>
                        <p className="text-sm">
                            Potencia la comunicación global a través de la educación de idiomas por parte de expertos.
                        </p>

                        {/* Redes Sociales */}
                        <div className="max-w-7xl mx-auto mt-8 pt-8 text-center text-sm flex justify-around w-full">
                            {info.redesSociales?.map((rd, index) => {
                                // Mapear nombre a icono imagen, asumiendo que tienes imágenes en /public/icons/
                                const iconName = capitalizeFirstLetter(rd.nombre) || "default";

                                return (
                                    <Link href={rd.url} key={index} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={`/${iconName}.png`}
                                            alt={iconName}
                                            className="h-[25px] md:h-[25px]"
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </ScrollAnimation>
                </div>

                <div>
                    <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft" initiallyVisible={false} offset={0}>
                        <h3 className="text-lg font-semibold mb-4"></h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Classes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Events
                                </a>
                            </li>
                        </ul>
                    </ScrollAnimation>
                </div>

                {horariosFormateados.length > 0 && (
                    <div className="w-full col-span-2">
                        <ScrollAnimation
                            animateIn="bounceInRight"
                            animateOut="bounceOutRight"
                            initiallyVisible={false}
                            offset={0}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-[#ffb06f] text-center">Nuestros horarios</h3>
                            <ul className="space-y-2 text-[14px]">
                                {horariosFormateados.map(({ diaTexto, horario }, idx) => (
                                    <li key={idx} className="border-blue-200 border-b pb-2 flex justify-between">
                                        <span>{diaTexto}</span>
                                        <span>{horario}</span>
                                    </li>
                                ))}
                            </ul>

                        </ScrollAnimation>
                    </div>
                )}

                <div className="col-span-2">
                    <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight" initiallyVisible={false} offset={0}>
                        <h3 className="text-lg font-semibold mb-4 text-[#ffb06f]">Contactos</h3>
                        <p className="text-sm mb-4 flex">
                            <PhoneArrowUpRightIcon className="text-[#ffb06f] h-[20px] mr-5" />
                            {info.telefono}
                        </p>
                        <p className="text-sm mb-4 flex">
                            <EnvelopeOpenIcon className="text-[#ffb06f] h-[20px] mr-5" />
                            {info.email}
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
                            />
                            <button className="bg-[#ffb06f] text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                                Subscribe
                            </button>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY" offset={0}>
                <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center text-sm">
                    <p>&copy; 2024 NativoES. All rights reserved.</p>
                </div>
            </ScrollAnimation>
        </footer>
    );
}
