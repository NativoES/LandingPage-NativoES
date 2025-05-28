"use client"




import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageCard from '@/components/LanguageCard';
import TeacherCards from '@/components/TeacherCards';
import FeedbackCard from '@/components/FeedbackCard';
import { useState, useCallback, useEffect, use } from "react";
import { MessageSquare, Users, Award, Globe2, Video, BookOpen, Headphones, Brain, PhoneIcon } from 'lucide-react';

import { AcademicCapIcon, CalendarIcon, ListBulletIcon, ClockIcon, } from '@heroicons/react/24/outline';
import { PhoneArrowUpRightIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import SectionTemplate from "@/components/SectionTemplate";
import Slider from "@/components/Slider";
import HomeCard from "@/components/HomeCard";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
// import 'react-awesome-slider/dist/styles.css';
import MiniCard from "@/components/MiniCard";
import Footer from "@/components/Footer";
import Services from "@/components3/Services";
import Navbar3 from "@/components3/Navbar";
import { Hero } from '@/components3/Hero';
import CardPricing from '@/components/CardPricing';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import Button from "@/components/Button";
import CardTimes from "@/components/CardTimes";
import { useAppContext } from "@/context/AppContext";

import CardClases from '@/components/CardClases';
const ServicesSection = ({ services }) => {

  const [homes, setHomes] = useState([
    {
      textButton: "CLASE GRATUITA",
      img: "/bg2.jpg",
      paragraph: 'Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.',
      titleCard: "NativoES",
    },
    {
      textButton: "CLASE GRATUITA",
      img: "/bg2.jpg",
      paragraph: 'Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.',
      titleCard: "NativoES",
    },
    {
      textButton: "CLASE GRATUITA",
      img: "/bg2.jpg",
      paragraph: 'Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.',
      titleCard: "NativoES",
    },

  ]);
  const languages = [
    {
      language: "Español intermedio",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80",
      duration: "12 weeks",
      students: 2534,
      rating: 4.9,
      price: "$299",
      flag: "🇬🇧"
    },
    {
      language: "Español Avanzado",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80",
      duration: "10 weeks",
      students: 1856,
      rating: 4.8,
      price: "$279",
      flag: "🇪🇸"
    },
    {
      language: "Ruso avanzado",
      level: "Beginner to Intermediate",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
      duration: "16 weeks",
      students: 1243,
      rating: 4.9,
      price: "$349",
      flag: "🇯🇵"
    }
  ];
  return (
    <div className="min-h-screen ">
    <Navbar />
    {/* <img src="/bg2.jpg" className='fixed top-0 h-screen w-screen -z-20' alt="" /> */}

    <section id="home" className="relative">
      <Slider cantidad={1}>
        {homes.map((data, index) => <HomeCard data={data} key={index}></HomeCard>)}
      </Slider>
      <div className="text-center lg:left-8 p-10 md:py-5 md:px-5 rounded-[20px] absolute left-0 right-0 mx-auto bottom-[0px] md:bottom-[0px] md:left-auto md:right-auto  bg-[#ffb06f]  w-[85%] rounded-b-none md:w-[400px] h-auto">

        <ScrollAnimation animateIn='flipInY'
          animateOut='flipOutY'>
          <h1 className="text-[20px] sm:text-[30px] font-bold text-gray-900 mb-6">
            NativoES
          </h1>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn='bounceInLeft'
          animateOut='bounceOutLeft'
          initiallyVisible={false} offset={0}
        >
          <p className="text-[16px] text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
          </p>
        </ScrollAnimation>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-[#ffffff] text-[16px] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#000000]  hover:text-[#ffb06f]   transition-colors">
            CLASE GRATUITA
          </button>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-12 px-3 pt-[150px]" id="services">







      <CardClases></CardClases>




      {/* Encabezado */}
      {/* <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4 text-black">ФОРМАТЫ ОБУЧЕНИЯ (Formas de Estudio)</h2>
        <p className="text-gray-600">
          Descubre cómo nuestras lecciones están diseñadas para adaptarse a tus necesidades.
        </p>
      </div> */}

      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-black">{service.title}</h3>
            <ul className="text-gray-600 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <button
                onClick={() => window.location.href = service.link}
                className="text-blue-500 hover:underline"
              >
                подробнее (Ver más)
              </button>
            </div>
          </div>
        ))}
      </div> */}

      {/* <div className="text-center mt-12">
        <a
          href="/services"
          className="bg-[#ff8f44] text-black font-bold px-6 py-3 rounded-lg shadow-md nhover:bg-blue-600 transition"
        >
          оставить заявку (Enviar solicitud)
        </a>
      </div> */}
    </section>


      {/* CTA Section */}
          <section className="bg-[#ffb06f]  py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <ScrollAnimation
                animateIn='flipInY'
                animateOut='flipOutY'
                offset={0}
              >
    
                <h2 className="text-3xl font-bold text-black mb-4">
                  Comienza hoy...
                </h2>
                <p className="text-xl text-[#363636] mb-8">
                  Prueba nuestro test gratuito y descubre tu nivel.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn='flipInY'
                animateOut='flipOutY'
                offset={0}
              >
                <div>
                  <button className="bg-black text-[#ffb06f]  px-8 py-3 rounded-md text-lg font-semibold  transition-all hover:scale-105">
                    Realizar test
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
    
          <Footer></Footer>
        </div>
  );
};

const App = () => {



  const servicesData = [
    {
      title: "Пробный урок (Lección de prueba)",
      features: [
        "30 minutos - gratis",
        "Conoce al maestro y determina el propósito del estudio.",
        "Demostración de un fragmento de lección y familiarización con la plataforma.",
        "Haz varios ejercicios.",
        "Evaluación del nivel de conversación en español, excepto para principiantes.",
        "Selección de un programa que se adapte a los objetivos del estudiante.",
      ],
      link: "/services/trial",
    },
    {
      title: "Индивидуальные занятия (Lecciones individuales)",
      features: [
        "Realizarse a través de Skype o Google Meet.",
        "En la pizarra interactiva Miro + plataforma Progressme.",
        "Se utilizan materiales auténticos (libros de texto, artículos, videos, audio, canciones).",
        "Todos los aspectos del idioma se están desarrollando.",
        "El programa se adapta a los objetivos y necesidades de cada estudiante.",
      ],
      link: "/services/individual",
    },
    {
      title: "Занятия в паре (Clases en pareja)",
      features: [
        "Realizarse a través de Skype o Google Meet.",
        "Materiales auténticos y lista de palabras personalizadas.",
        "Clases 2 veces por semana según horario acordado (60-70 min).",
        "Adecuado para parejas o amigos con intereses y niveles similares.",
      ],
      link: "/services/pair",
    },
    {
      title: "Занятия в группе (Clases grupales)",
      features: [
        "Realizarse a través de Skype o Google Meet.",
        "Duración de 90 minutos en grupos de 3-4 personas.",
        "Materiales auténticos y actividades interactivas.",
        "Ideal para eliminar la barrera del idioma y aprender en comunidad.",
      ],
      link: "/services/group",
    },
  ];



  return (
    <div>
      <Navbar></Navbar>

      {/* Otros componentes */}
      <ServicesSection services={servicesData} />
    </div>
  );
};

export default App;





