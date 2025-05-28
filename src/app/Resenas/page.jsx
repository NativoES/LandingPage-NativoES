'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import LanguageCard from '@/components/LanguageCard';
import ResenasCards from '@/components/ResenasCards';
import Feedback from '@/components/FeedbackCard';

import { MessageSquare, Users, Award, Globe2, Video, BookOpen, Headphones, Brain } from 'lucide-react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

// import 'react-awesome-slider/dist/styles.css';
import Footer from "@/components/Footer";

export default function Home() {

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
      <img src="/bg2.jpg" className='fixed top-0 h-screen w-screen -z-20' alt="" />

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>

        <div className="text-center p-10 md:py-5 md:px-5 rounded-[20px] absolute left-0 right-0 mx-auto bottom-[0px] md:bottom-[0px] md:left-auto md:right-auto  bg-[#ffb06f]  w-[85%] rounded-b-none md:w-[400px] h-auto">
          <h1 className="text-[20px] sm:text-[30px] font-bold text-gray-900 mb-6">
            NativoES
          </h1>
          <p className="text-[16px] text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-black text-[#ffffff] text-[16px] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#000000]  hover:text-[#ffb06f]   transition-colors">
              Realizar Test
            </button>
          </div>
        </div>


        {/* <div className="max-w-7xl mx-auto">
          <div className="text-center pt-16 pb-12 bg-[#ffb06f] ">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              NativoES
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Aprenda de hablantes nativos y alcance la fluidez más rápido con nuestra metodología comprobada. Únase a miles de estudiantes de idiomas exitosos en todo el mundo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#ffb06f]  text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-white text-[#ffb06f]  px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#ffb06f]  hover:bg-blue-50 transition-colors">
                View Courses
              </button>
            </div>
          </div>




          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe2 className="h-6 w-6 text-[#ffb06f] " />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12+</h3>
              <p className="text-gray-600">Languages</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#ffb06f] " />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
              <p className="text-gray-600">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="h-6 w-6 text-[#ffb06f] " />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600">Native Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-[#000000] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-[#ffb06f] " />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div> */}
      </section>

 
   

      <ResenasCards/>

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
}
