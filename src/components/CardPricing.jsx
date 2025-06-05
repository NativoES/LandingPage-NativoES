'use client'
import ScrollAnimation from 'react-animate-on-scroll';


export default function CardPricing({ img, description }) {

    console.log("descripcion: ", description);


    return (
        < div className="" >
            <ScrollAnimation
                animateIn='bounceInLeft'
                animateOut='bounceOutLeft'
                initiallyVisible={true} offset={0}
            >

                <div className="w-full flex flex-col md:grid grid-cols-3 gap-4 bg-white rounded-[50px] shadow-lg">
                    <div className="relative bg-[#ffb06f] rounded-t-[30px] md:rounded-r-[0px] md:rounded-l-[50px]   h-[50vh]  md:h-full ">
                        <img src={img} className="absolute w-full p-5 top-0 bottom-0 my-auto transition-all hover:scale-105" alt="" />
                    </div>
                    <div
                        className="text-black col-span-2 bg-white p-10 rounded-r-[50px] prose prose-sm md:prose-base max-w-none"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />

                </div></ScrollAnimation></div>
    );
}