"use client"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
export default function SectionTemplate({ children, id, title }) {

    return (
        <section id={id} className="relative w-full  py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
            <div className="relative block container w-full h-full  ">
                <div className='flex absolute top-[-30px] left-[0px]'>
                    <ScrollAnimation
                        animateIn='flipInY'
                        animateOut='flipOutY'>
                        <div className=" h-[8px] w-[100px] bg-[#ffb06f] "> </div>
                    </ScrollAnimation>
                </div>
                <div className='flex'>
                    <ScrollAnimation
                        animateIn='flipInY'
                        animateOut='flipOutY'>
                        <h2 className="text-[20px] sm:text-[40px] font-bold text-gray-900 mb-6">{title}</h2>
                    </ScrollAnimation>
                </div>
                <div className="relative h-full  py-10">
                    {children}
                </div>
            </div>
        </section>
    );
};

