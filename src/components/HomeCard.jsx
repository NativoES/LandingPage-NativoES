"use client"
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";


export default function FeedbackCard({ data, key }) {




    return (
        <div
            key={key}
            className="relative overflow-hidden pt-20 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen"
        >
            <img src={data.img} className='absolute top-0  left-0 h-screen w-screen -z-20' alt="" />

            {/* <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div> */}

            {/* <div className="text-center p-10 md:py-5 md:px-5 rounded-[20px] absolute left-0 right-0 mx-auto bottom-[0px] md:bottom-[0px] md:left-auto md:right-auto  bg-[#ffb06f]  w-[85%] rounded-b-none md:w-[400px] h-auto">
                <h1 className="text-[20px] sm:text-[30px] font-bold text-gray-900 mb-6">
                    {data.titleCard}
                </h1>
                <p className="text-[16px] text-gray-600 mb-8 max-w-3xl mx-auto">
                    {data.paragraph}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-black text-[#ffffff] text-[16px] px-8 py-3 rounded-md text-lg font-semibold border-2 border-[#000000]  hover:text-[#ffb06f]   transition-colors">
                        {data.textButton}
                    </button>
                </div>
            </div> */}
        </div>
    );
};

