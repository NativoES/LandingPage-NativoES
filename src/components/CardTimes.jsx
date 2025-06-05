'use client'
import React, { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { ReplaceAll } from "lucide-react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function CardPricing({ img, clases }) {
    const [selected, setSelected] = useState(null);
    const { cardPricingOne } = useAppContext()


    return (
        < div className="" >
            <ScrollAnimation
                animateIn='bounceInLeft'
                animateOut='bounceOutLeft'
                initiallyVisible={true} offset={0}
            >

                <div className="w-full flex flex-col-reverse md:grid grid-cols-3 gap-4 bg-white rounded-[50px] shadow-lg">

                    <div className="text-black col-span-2 bg-white p-10  rounded-l-[50px] ">
                        <h2 className="text-2xl mb-4 text-black">Tipo de clase: {cardPricingOne?.toUpperCase()}</h2>
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Escoge tus clases:</h2>
                        {clases && clases.caracteristicas.map((option, index) => (
                            <label
                                key={index}
                                className={`relative w-full  flex justify-between items-center space-x-3 p-3 rounded-md cursor-pointer ${selected === index ? "bg-white" : "bg-gray-100"
                                    } transition-colors duration-200 ease-in-out mb-5`}
                            >   <span className="flex">

                                    <input
                                        type="checkbox"
                                        checked={selected === index}
                                        onChange={() => setSelected(index)}
                                        className="form-checkbox h-5 w-5 text-green-500 mr-5"
                                    />
                                    <span className="text-gray-700 text-[14px]">{option?.caracteristica}</span>

                                </span>
                                <span className="inline-block text-right text-gray-700 text-[14px] w-[180px] bg-[#ffb06f] p-2 rounded-[10px]">
                                    <span className="relative inline-block text-gray-800 text-[14px]  mr-[5px]">
                                        <span className="line-through decoration-gray-800 decoration-[1.3px]">${option?.precioRegular}</span>
                                    </span>
                                    <span className="text-gray-800 text-[20px] font-bold ">${option?.precioConDescuento}</span>
                                </span>

                            </label>
                        ))}
                    </div>



                    <div className="relative bg-[#ffb06f] rounded-t-[30px] md:rounded-l-[0px] md:rounded-r-[50px] overflow-hidden  h-[50vh] md:h-full ">
                        <img src={img} className="absolute w-full p-5 top-0 bottom-0 my-auto  transition-all hover:scale-105" alt="" />
                    </div>


                </div>
            </ ScrollAnimation >
        </div  >
    );
}