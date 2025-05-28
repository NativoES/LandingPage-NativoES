"use client"
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";


export default function FeedbackCard({ data, key }) {




    return (
        <div
            key={key}
            className="text-center p-6"
        >
            <div>
                <div className="bg-[#000000] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {data.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black">{data.title}</h3>
                <p className="text-gray-600">{data.subtitle}</p>
            </div>
        </div>
    );
};

