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
import { useLanguage } from "@/hooks/useLanguage";
export default function Home() {
  const [activeForm, setActiveForm] = useState(1);
  const searchParams = useSearchParams()

  const { cardPricingOne, setCardPricingOne, cardPricingTwo, setCardPricingTwo } = useAppContext()
  const searchCard = searchParams.get('card')
  const router = useRouter()


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

  const { language, t } = useLanguage();
  const [teachers, setTeachers] = useState([])

  async function getData() {
    const res = await fetch(`http://localhost:5000/api/teacher?locale=${language}`)
    const data = await res.json()
    console.log("teachers: ", data);

    setTeachers(data)
  }

  console.log("teachers: ", teachers)

  useEffect(() => {
    getData()
  }, [language])

  console.log("teachers: ", teachers);
  // const teachers = [
  //   {
  //     name: "Juan Pérez",
  //     subject: "Prof. Ruso",
  //     photo: "/perfil1.png",
  //     items: [
  //       "Especialista en Ruso",
  //       "Experto en gramatica",
  //       "10 años de experiencia"
  //     ]
  //   },
  //   {
  //     name: "María López",
  //     subject: "Prof. Ruso",
  //     photo: "/perfil2.png",
  //     items: [
  //       "Especialista en Ruso",
  //       "Experto en gramatica",
  //       "10 años de experiencia"
  //     ]
  //   },
  //   {
  //     name: "Carlos Sánchez",
  //     subject: "Prof. Español",
  //     photo: "perfil3.png",
  //     items: [
  //       "Especialista en Ruso",
  //       "Experto en gramatica",
  //       "10 años de experiencia"
  //     ]
  //   },
  // ];
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
      <SectionTemplate id={'about'} title={'Nuestro modo de trabajoooo'}>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4   gap-8">
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
      <SectionTemplate id={'teachers'} title={'Nuestros profesores'}>
        <Slider>
          {teachers.map((teacher, index) => <TeacherCards teacher={teacher} key={index}></TeacherCards>)}
        </Slider>
      </SectionTemplate>
      <SectionTemplate id={'services'} title={'Formas de estudio'}>
        <div className="text-black px-10">
          <br />
          ✔️В Skype или Google Meet на платформе школы NATIVO.ES и интерактивной доске Miro.
          <br />
          ✔️Презентация по теме урока и список слов с их озвучиванием.
          <br />
          ✔️Только аутентичные материалы (учебники, статьи, песни, видео, аудио).
          <br />
          ✔️Развитие всех аспектов языка. Особое внимание уделяется разговорной практике и аудированию.
        </div>
        <div className="w-full flex justify-center py-10">


          <ScrollAnimation
            animateIn='flipInY'
            animateOut='flipOutY'
            offset={0}
          >
            <div>
              <button className="bg-black text-[#ffb06f]  px-8 py-3 rounded-md text-lg font-semibold  transition-all hover:scale-105">
                Clase gratuita
              </button>
            </div>
          </ScrollAnimation>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 items-center">
          <div className="relative  w-full h-[60vh] object-cover  overflow-hidden" onClick={() => { router.push('/Checkout'); setCardPricingOne('individual'); setCardPricingTwo('60min') }}>
            <img src="/individual.png" className="bg-gray-300 p-5 hover:bg-gray-400 w-full h-[60vh] object-cover transition-all hover:scale-105" alt="" />
            <p className="absolute p-6 w-full text-white bottom-0 bg-gray-950/50">●	Индивидуальные занятия (Clases individuales)</p>
          </div>
          <div className="relative  w-full h-[80vh] object-cover overflow-hidden" onClick={() => { router.push('/Checkout'); setCardPricingOne('pareja'); setCardPricingTwo('60min') }}>
            <img src="/pareja.png" className="bg-gray-300 p-5   hover:bg-gray-400  w-full h-[80vh] object-cover transition-all hover:scale-105" alt="" />
            <p className="absolute p-6 w-full text-white bottom-0 bg-gray-950/50">●	Индивидуальные занятия (Clases individuales)</p>
          </div>
          <div className="relative  w-full h-[60vh] object-cover overflow-hidden" onClick={() => { router.push('/Checkout'); setCardPricingOne('grupo'); setCardPricingTwo('60min') }}>
            <img src="/grupo.png" className="bg-gray-300 p-5 hover:bg-gray-400  w-full h-[60vh] object-cover transition-all hover:scale-105" alt="" />
            <p className="absolute p-6 w-full text-white bottom-0 bg-gray-950/50">●	Индивидуальные занятия (Clases individuales)</p>
          </div>
        </div>
      </SectionTemplate>

      {/* Methods Section */}
      <SectionTemplate id={'methods'} title={'Nuestro metodo'}>
        <Services />
      </SectionTemplate>



      <SectionTemplate id={'reviews'} title={'Reseñas'}>
        <Slider>
          <FeedbackCard />
        </Slider>
      </SectionTemplate>

      <section id="pricing" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>
        <h2 className="text-3xl font-bold text-black mb-12 text-left">Precios</h2>

        <div className="w-[90vw] max-w-[1100px] mx-auto md:p-6 py-6 rounded-xl shadow-lg flex flex-col items-center justify-center">

          <div className=" w-full  border border-gray-200 rounded-[50px] flex flex-col md:grid md:grid-cols-4 mb-10">
            <div className="w-full flex md:flex-col justify-around rounded-[8px] mb-6  pr-10">
              <Button theme={cardPricingOne === 'individual' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('individual')}>
                Individual
              </Button>

              <Button theme={cardPricingOne === 'pareja' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('pareja')}>
                Pareja
              </Button>
              <Button theme={cardPricingOne === 'grupo' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('grupo')}>
                Grupo
              </Button>
            </div>
            <div className="col-span-3 rounded-[50px]  max-w-full ">
              {cardPricingOne === 'individual' && <CardPricing img='/individual.png'></CardPricing>}
              {cardPricingOne === 'pareja' && <CardPricing img='/pareja.png'></CardPricing>}
              {cardPricingOne === 'grupo' && <CardPricing img='/grupo.png'></CardPricing>}
            </div>
          </div>

          <div className=" w-full  border border-gray-200 rounded-[50px] flex flex-col md:grid grid-cols-4">
            <div className="w-full flex  md:hidden justify-around rounded-[8px] mb-6  pl-10">

              <Button theme={cardPricingTwo === '60min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('60min')}>
                60 min
              </Button>
              <Button theme={cardPricingTwo === '90min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('90min')}>
                90 min
              </Button>
              <Button theme={cardPricingTwo === 'ofertas' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('ofertas')}>
                Ofertas
              </Button>
            </div>
            <div className="col-span-3 rounded-[50px]  ">
              {cardPricingOne === 'individual' && <CardTimes img='/individual.png' card={'individual'} time={cardPricingTwo}></CardTimes>}
              {cardPricingOne === 'pareja' && <CardTimes img='/pareja.png' card={'pareja'} ></CardTimes>}
              {cardPricingOne === 'grupo' && <CardTimes img='/grupo.png' card={'grupo'} ></CardTimes>}
            </div>
            <div className="w-full hidden md:flex  flex-col justify-around rounded-[8px] mb-6  pl-10">

              <Button theme={cardPricingTwo === '60min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('60min')}>
                60 min
              </Button>
              <Button theme={cardPricingTwo === '90min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('90min')}>
                90 min
              </Button>
              <Button theme={cardPricingTwo === 'ofertas' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('ofertas')}>
                Ofertas
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="w-[300px]">
              <Button theme={'MiniPrimary'} click={() => ''}>
                Reserva tu clase
              </Button>
            </div>
          </div>


        </div>


      </section>
      {/* CTA Section */}
      <section className="bg-[#ffb06f]  py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto  flex justify-between items-center">

          <ScrollAnimation
            animateIn='bounceInLeft'
            animateOut='bounceOutLeft'
            initiallyVisible={false} offset={0}
          >
            <h2 className="text-3xl font-bold text-black mb-4 uppercase text-left">
              Comienza hoy! <br />
              APROVECHA NUESTRA <br />
              CLASE DE PRUEBA <br />
              GRATUITA
            </h2>
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

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
