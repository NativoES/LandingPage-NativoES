"use client"

import TeacherCards from '@/components/templates/TeacherCards';
import FeedbackCard from '@/components/FeedbackCard';
import { useState, useCallback, useEffect } from "react";
import { Video, BookOpen, Headphones, Brain } from 'lucide-react';
import SectionTemplate from "@/components/SectionTemplate";
import Slider from "@/components/Slider";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import Footer from "@/components/Footer";
import Services from "@/components/sections/Services";
import Navbar3 from "@/components/sections/Navbar";
import { Hero } from '@/components/sections/Hero';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useAppContext } from "@/context/AppContext";
import { useLanguage } from "@/hooks/useLanguage";
import PlansSection from "@/components/Plan";
import { ModoDeTrabajo } from "@/components/sections/ModoDeTrabajo";

export default function Home() {
  const searchParams = useSearchParams()
  const { setCardPricingOne, setCardPricingTwo } = useAppContext()
  const searchCard = searchParams.get('card')
  const router = useRouter()
  const pathname = usePathname()
  const { language, t } = useLanguage();
  const [teachers, setTeachers] = useState([])
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getData();
    getDataReview();
  }, [language]);

  async function getData() {
    try {
      if (!language) return;
      const res = await fetch(`http://localhost:5000/api/landing/teacher?locale=${language}`);
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

      const data = await res.json();
      console.log("teachers:", data);
      setTeachers(data);
    } catch (error) {
      console.error("Error en getData:", error);
    }
  }

  async function getDataReview() {
    try {
      if (!language) return;
      const res = await fetch(`http://localhost:5000/api/landing/review?locale=${language}`);
      if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

      const data = await res.json();
      console.log("reviews:", data);
      setFeedbacks(data);
    } catch (error) {
      console.error("Error en getDataReview:", error);
    }
  }

  console.log("teachers LOG", teachers)
  return (
    <div className="">
      {/* <Navbar /> */}
      <Navbar3 />

      <Hero></Hero>

      <SectionTemplate id={'about'} title={'Nuestro modo de trabajo'}>
        <ModoDeTrabajo />
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
          {feedbacks.map((feedback, index) => <FeedbackCard feedback={feedback} key={index}></FeedbackCard>)}
        </Slider>
      </SectionTemplate>
      <SectionTemplate id={'reviews'} title={'Reseñas'}>

        <PlansSection />
      </SectionTemplate>

      {/* CTA Section */}
      <SectionTemplate id={'reviews'} title={'Reseñas'}>

        <div className="bg-[#ffb06f]  py-16 px-4 sm:px-6 lg:px-8 ">
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

        </div>
      </SectionTemplate>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
