'use client';
import React, { useEffect, useState } from 'react'
import SectionTemplate from './SectionTemplate'
import { useLanguage } from '@/hooks/useLanguage';

export const ModoDeTrabajo = () => {

    const { language } = useLanguage();
    const [data, setData] = useState([]);

    console.log("language: ", language);

    const loadData = async (lang) => {
        try {
            const url = `http://localhost:5000/api/form-study?locale=${lang}`;
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (error) {
            console.error("Error al cargar los datos:", error);
        }
    };

    useEffect(() => {
        loadData(language);
    }, [language]);

    console.log("data: ", data[0]);



    return (
        <SectionTemplate id={'about'} title={'Nuestro modo de trabajo'}>
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4   gap-8">
                {data[0] && data[0][language] && (
                    <div className="shadow border px-5 col-span-2">
                        <h3 className="text-[20px] text-black font-medium">{data[0][language].titulo}</h3>
                        <div
                            className="text-gray-600 pb-5"
                            dangerouslySetInnerHTML={{ __html: data[0][language].descripcion }}
                        />
                        <div className="relative w-full pb-[56.25%]">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="YouTube video player"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {data[1] && data[1][language] && (
                    <div className="shadow border p-5 ">
                        <h3 className="text-[20px] text-black font-medium">{data[1][language].titulo}</h3>
                        <div
                            className="text-gray-600 pb-5"
                            dangerouslySetInnerHTML={{ __html: data[1][language].descripcion }}
                        />
                        <img src="/demo.jpg" className="w-full" alt="" />
                        <img src="/demo.jpg" className="w-full" alt="" />
                    </div>
                )}

                {data[2] && data[2][language] && (
                    <div className=" p-5 ">
                        <h3 className="text-[25px] text-black font-semibold">{data[2][language].titulo}</h3>
                        <div
                            className="text-gray-600 pb-5"
                            dangerouslySetInnerHTML={{ __html: data[2][language].descripcion }}
                        />
                        <button className="bg-[#ffb06f]  text-black px-4 py-2 rounded-md hover: transition-colors">
                            Descubrir más
                        </button>
                    </div>
                )}

                <div>

                </div>
            </div>
        </SectionTemplate>
    )
}
