"use client"
import { MessageSquare, Users, Award, Globe2, Video, BookOpen, Headphones, Brain, PhoneIcon } from 'lucide-react';
import { PhoneArrowUpRightIcon, EnvelopeOpenIcon } from '@heroicons/react/24/solid';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Footer() {
    return <footer id="contacts" className="relative bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8 z-30">
        <div className="  mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">


            <div>
                <ScrollAnimation
                    animateIn='bounceInLeft'
                    animateOut='bounceOutLeft'
                    initiallyVisible={false}  offset={0}
                >

                    <div className="flex items-center mb-4">
                        <Globe2 className="h-8 w-8 text-[#ffb06f] " />
                        <span className="ml-2 text-xl font-bold text-white">NativoES</span>
                    </div>
                    <p className="text-sm">
                        Potencia la comunicación global a través de la educación de idiomas por parte de expertos.            </p>

                    <div className="max-w-7xl mx-auto mt-8 pt-8 text-center text-sm flex justify-around w-full">
                        <img src="/WhatsApp.png" className="h-[25px] md:h-[25px]" />
                        <img src="/Telegram.png" className="h-[25px] md:h-[25px]" />
                        <img src="/Youtube.png" className="h-[25px] md:h-[25px]" />
                        <img src="/Instagram.png" className="h-[25px] md:h-[25px]" />
                        <img src="/Tiktok.png" className="h-[25px] md:h-[25px]" />

                    </div>

                </ScrollAnimation>
            </div>

            <div className="bg-red-5000">
                <ScrollAnimation
                    animateIn='bounceInLeft'
                    animateOut='bounceOutLeft'
                    initiallyVisible={false}  offset={0}
                >
                    <h3 className="text-lg font-semibold mb-4"></h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Classes</a></li>
                        <li><a href="#" className="hover:text-white">Evemts</a></li>
                    </ul>
                </ScrollAnimation>
            </div>

            <div className="w-full col-span-2">
                <ScrollAnimation
                    animateIn='bounceInRight'
                    animateOut='bounceOutRight'
                    initiallyVisible={false}  offset={0}
                >
                    <h3 className="text-lg font-semibold mb-4 text-[#ffb06f]  text-cente">Nuestros horarios</h3>
                    <ul className="space-y-2 text-[14px]">
                        <li className=" border-blue-200 border-b pb-2 flex justify-between"><span>Monday - Friday</span> <span>8:00 AM - 20:00 AM</span></li>
                        <li className=" border-blue-200 border-b pb-2 flex justify-between"><span>Saturday</span> <span>8:00 AM - 16:00 AM</span></li>
                        <li className=" border-blue-200 border-b pb-2 flex justify-between"><span>Sunday</span> <span>Closed</span></li>

                    </ul>
                </ScrollAnimation>
            </div>
            <div className="bg-red-5000 col-span-2">
                <ScrollAnimation
                    animateIn='bounceInRight'
                    animateOut='bounceOutRight'
                    initiallyVisible={false}  offset={0} 
                >
                    <h3 className="text-lg font-semibold mb-4  text-[#ffb06f] ">Contactos</h3>
                    <p className="text-sm mb-4 flex "> <PhoneArrowUpRightIcon className="text-[#ffb06f]  h-[20px] mr-5" />+123 456 789 456</p>
                    <p className="text-sm mb-4 flex">  <EnvelopeOpenIcon className="text-[#ffb06f]  h-[20px] mr-5 " /> proyection.gym@gmail.com</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1"
                        />
                        <button className="bg-[#ffb06f]  text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </ScrollAnimation>

            </div>

        </div>
        <ScrollAnimation
            animateIn='flipInY'
            animateOut='flipOutY'
            offset={0}
            >
            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center text-sm">
                <p>&copy; 2024 NativoES. All rights reserved.</p>
            </div>
        </ScrollAnimation>
    </footer>
}