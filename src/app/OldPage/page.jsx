"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageCard from '@/components/LanguageCard';
import TeacherCards from '@/components/TeacherCards';
import FeedbackCard from '@/components/FeedbackCard';
import { useState, useCallback, useEffect } from "react";
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
import { useSearchParams, usePathname } from 'next/navigation'
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  const [activeForm, setActiveForm] = useState(1);
  const searchParams = useSearchParams()
  const [cardState, setCardState] = useState('individual');
  const searchCard = searchParams.get('card')

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
  const pathname = usePathname()

  const teachers = [
    {
      name: "Juan Pérez",
      subject: "Prof. Ruso",
      photo: "/perfil1.png",
      items: [
        "Especialista en Ruso",
        "Experto en gramatica",
        "10 años de experiencia"
      ]
    },
    {
      name: "María López",
      subject: "Prof. Ruso",
      photo: "/perfil2.png",
      items: [
        "Especialista en Ruso",
        "Experto en gramatica",
        "10 años de experiencia"
      ]
    },
    {
      name: "Carlos Sánchez",
      subject: "Prof. Español",
      photo: "perfil3.png",
      items: [
        "Especialista en Ruso",
        "Experto en gramatica",
        "10 años de experiencia"
      ]
    },
  ];
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Ana Torres",
      photo: "/perfil2.png",
      comment: "Buena experiencia, aunque hay aspectos que mejorar.",
      rating: 5,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
    {
      name: "Luis Gómez",
      photo: "/perfil1.png",
      comment: "Buena experiencia, aunque hay aspectos que mejorar.",
      rating: 4,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
    {
      name: "Carla Fernández",
      photo: "/perfil3.png",
      comment: "Buena experiencia, aunque hay aspectos que mejorar.",
      rating: 5,
      adminResponse: "Gracias por tu comentario, trabajaremos en las mejoras.",
    },
  ]);
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

  const miniCard = [
    {
      icon: <Video className="h-8 w-8 text-[#ffb06f] " />,
      title: 'Clases en vivo',
      subtitle: 'Sesiones interactivas con hablantes nativos.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#ffb06f] " />,
      title: 'Materiales de estudio',
      subtitle: 'Recursos y ejercicios completos.'
    },
    {
      icon: <Headphones className="h-8 w-8 text-[#ffb06f] " />,
      title: 'Aprendizaje por audio',
      subtitle: 'Práctica de escucha inmersiva.'
    },
    {
      icon: <Brain className="h-8 w-8 text-[#ffb06f] " />,
      title: 'Práctica inteligente ',
      subtitle: 'Rutas de aprendizaje impulsadas por IA.'
    }
  ]


  const [selected, setSelected] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];



  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )




  return (
    <div className="">
      {/* <Navbar /> */}
      <Navbar3 />

      <Hero></Hero>
      {/* <section id="home" className="relative">
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
            initiallyVisible={false}  offset={0}
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
      </section> */}
      <SectionTemplate id={'fdsf'} title={'Nuestro modo de trabajo'}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-8">
          <div className="shadow border px-5 col-span-2">
            <h3 className="text-[20px] text-black font-medium">Plataformas interactivas</h3>
            <p className="text-gray-600 pb-5">Todas las sesiones de nuestros cursos en linea se llevan a cabo en nuestra plataformas interactiva</p>

            <div className="relative w-full pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
          <div className="shadow border p-5 ">
            <h3 className="text-[20px] text-black font-medium">Ejercicios divertidos</h3>
            <p className="text-gray-600 pb-5">Sin tareas aburridas, libros de texto, solo ejercicios y juegos divertidos.</p>

            <img src="/demo.jpg" className="w-full" alt="" />
            <img src="/demo.jpg" className="w-full" alt="" />


          </div>
          <div className=" p-5 ">
            <h3 className="text-[25px] text-black font-semibold">Mostrar como se trabajan</h3>
            <p className="text-gray-600 pb-5">Enseñar todas la herramientas en forma de capsulas con titulo pequeño, texto y una foto o video.</p>

            <button className="bg-[#ffb06f]  text-black px-4 py-2 rounded-md hover: transition-colors">
              Descubrir más
            </button>
          </div>
          <div>

          </div>
        </div>
      </SectionTemplate>




      {/* Languages Section */}
      {/* <section id="servicios" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">Cursos populares de idiomas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <LanguageCard key={index} {...language} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Languages Section */}
      <SectionTemplate id={'teachers'} title={'Nuestros profesores'}>
        <Slider>
          {teachers.map((teacher, index) => <TeacherCards teacher={teacher} key={index}></TeacherCards>)}
        </Slider>
      </SectionTemplate>

      {/* Methods Section */}
      <SectionTemplate id={'methods'} title={'Nuestro metodo'}>
        <Services />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {miniCard.map((data, index) => <ScrollAnimation animateIn='fadeIn'>
            <MiniCard data={data} key={index} />
          </ScrollAnimation>)}
        </div> */}
      </SectionTemplate>



      <SectionTemplate id={'Reseñas'} title={'Reseñas'}>
        <Slider>
          {feedbacks.map((feedback, index) => <FeedbackCard feedback={feedback} key={index}></FeedbackCard>)}
        </Slider>
      </SectionTemplate>
      <section id="pricing" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>
        <h2 className="text-3xl font-bold text-black mb-12 text-left">Precios</h2>

        <div className="w-[90vw] max-w-[1100px] mx-auto p-6  rounded-xl shadow-lg flex flex-col items-center justify-center">
          {/* <div className="w-full flex justify-between rounded-[8px] mb-6  bg-white">
            <button
              className={`px-4 py-2 rounded-[8px] w-full  ${activeForm === 1 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(1)}
            >
              Individual
            </button>
            <button
              className={`px-4 py-2 rounded-[8px]  w-full ${activeForm === 2 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(2)}
            >
              Pareja
            </button>
            <button
              className={`px-4 py-2 rounded-[8px] w-full ${activeForm === 3 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(3)}
            >
              Grupo
            </button>
          </div> */}
          <div className=" w-full  border border-gray-200 rounded-[50px] grid grid-cols-4">
            <div className="w-full flex flex-col justify-around rounded-[8px] mb-6  pr-10">
              <Button theme={cardState === 'individual' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('individual')}>
                Individual
              </Button>

              <Button theme={cardState === 'pareja' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('pareja')}>
                Pareja
              </Button>
              <Button theme={cardState === 'grupo' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('grupo')}>
                Grupo
              </Button>
            </div>
            <div className="col-span-3 rounded-[50px]  bg-white ">
              {cardState === 'individual' && <CardPricing img='/individual.png'></CardPricing>}
              {cardState === 'pareja' && <CardPricing img='/pareja.png'></CardPricing>}
              {cardState === 'grupo' && <CardPricing img='/grupo.png'></CardPricing>}
            </div>
          </div>
          {/* <div className="w-full  flex justify-between rounded-[8px] my-6 bg-white">
            <button
              className={`px-4 py-2 rounded-[8px] w-full  ${activeForm === 1 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(1)}
            >
              60 min
            </button>
            <button
              className={`px-4 py-2 rounded-[8px]  w-full ${activeForm === 2 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(2)}
            >
              90 min
            </button>
            <button
              className={`px-4 py-2 rounded-[8px] w-full ${activeForm === 3 ? 'bg-[#ffb06f]  text-black' : 'bg-gray-100 text-black'}`}
              onClick={() => setActiveForm(3)}
            >
              Ofertas
            </button>
          </div> */}
          <div className="rounded-[20px] border w-full mt-10 ">
            {activeForm === 1 && (
              <div className="form1 grid grid-cols-4">
                <div className="col-span-3 rounded-[50px] grid grid-cols-3 bg-white ">
                  <div className="col-span-2   rounded-l-[50px] p-10">
                    <h2 className="text-2xl mb-4 text-black">Individual</h2>
                    {/* <form className="space-y-4 grid grid-cols-2">
                      <div>
                        <div className=" mx-auto bg-white p-6 rounded-lg shadow-md">
                          <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                              <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                              <span className="text-lg font-medium text-black">Grupo</span>
                            </li>
                            <li className="flex items-center space-x-4">
                              <CalendarIcon className="h-6 w-6 text-green-500" />
                              <span className="text-lg font-medium  text-black">Calendario</span>
                            </li>
                            <li className="flex items-center space-x-4">
                              <ListBulletIcon className="h-6 w-6 text-yellow-500" />
                              <span className="text-lg font-medium  text-black">Pizarra</span>
                            </li>
                            <li className="flex items-center space-x-4">
                              <ClockIcon className="h-6 w-6 text-red-500" />
                              <span className="text-lg font-medium text-black">Reloj</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mx-5 space-y-3">
                        <input
                          type="text"
                          placeholder="Nombre"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="email"
                          placeholder="Correo Electrónico"
                          className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button type="submit" className="w-full bg-[#ffb06f]  text-white py-2 rounded">
                          Enviar
                        </button>

                      </div>

                    </form> */}

                    <div className="flex flex-col space-y-4 bg-gray-100 p-6 rounded-lg shadow-md w-64">
                      <h2 className="text-lg font-semibold text-gray-700 mb-2">Choose one:</h2>
                      {options.map((option, index) => (
                        <label
                          key={index}
                          className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer ${selected === index ? "bg-blue-100" : "bg-white"
                            } transition-colors duration-200 ease-in-out`}
                        >
                          <input
                            type="checkbox"
                            checked={selected === index}
                            onChange={() => setSelected(index)}
                            className="form-checkbox h-5 w-5 text-blue-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="bg-[#ffb06f]   rounded-r-[50px]   h-full ">
                    {/* <img src="" alt="" /> */}
                  </div>
                </div>
                <div className="w-full  flex flex-col justify-around rounded-[50px] my-6 pl-10">
                  <div className="w-full flex flex-col justify-around rounded-[8px] mb-6  pr-10">
                    <Button theme={cardState === 'individual' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('individual')}>
                      60 min
                    </Button>
                    <Button theme={cardState === 'pareja' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('pareja')}>
                      90 min
                    </Button>
                    <Button theme={cardState === 'grupo' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardState('grupo')}>
                      Ofertas
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* {activeForm === 2 && (
              <div className="form2">
                <h2 className="text-2xl mb-4 text-black">Pareja</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button type="submit" className="w-full bg-[#ffb06f]  text-white py-2 rounded">
                    Enviar
                  </button>
                </form>
              </div>
            )}

            {activeForm === 3 && (
              <div className="form3">
                <h2 className="text-2xl mb-4 text-black">Grupo</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Dirección"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Edad"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <button type="submit" className="w-full bg-[#ffb06f]  text-white py-2 rounded">
                    Enviar
                  </button>
                </form>
              </div>
            )} */}
          </div>

          <button
            className={`px-4 py-2 rounded-[8px] mt-10 w-full max-w-[200px] bg-[#ffb06f]  text-black`}
            onClick={() => setActiveForm(2)}
          >
            Reserva tu clase
          </button>
        </div>


      </section>
      {/* CTA Section */}
      <section className="bg-[#ffb06f]  py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto  flex justify-between items-center">
          <h2 className="text-3xl font-bold text-black mb-4 uppercase text-left">
            Comienza hoy! <br />
            APROVECHA NUESTRA <br />
            CLASE DE PRUEBA <br />
            GRATUITA
          </h2>
          <div>
            <button className="bg-black text-[#ffb06f]  px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition-colors">
              Realizar test
            </button>
          </div>
        </div>

      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
