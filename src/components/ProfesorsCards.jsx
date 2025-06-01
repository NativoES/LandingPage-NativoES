"use client"

import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";


export default function ProfesorsCards() {
    const { language, t } = useLanguage();
    const [teachers, setTeachers] = useState([])

    async function getData() {
        const res = await fetch(`http://localhost:5000/api/teacher?locale=${language}`)
        const data = await res.json()
        setTeachers(data)
    }

    console.log("formData: ", teachers)

    useEffect(() => {
        getData()
    }, [language])

    console.log("teachers: ", teachers);

    // const teachers = [
    //     {
    //         name: "Juan Pérez",
    //         subject: "Prof. Ruso",
    //         photo: "/perfil1.png",
    //         items: [
    //             "Especialista en Ruso",
    //             "Experto en gramatica",
    //             "10 años de experiencia"
    //         ]
    //     },
    //     {
    //         name: "María López",
    //         subject: "Prof. Ruso",
    //         photo: "/perfil2.png",
    //         items: [
    //             "Especialista en Ruso",
    //             "Experto en gramatica",
    //             "10 años de experiencia"
    //         ]
    //     },
    //     {
    //         name: "Carlos Sánchez",
    //         subject: "Prof. Español",
    //         photo: "perfil3.png",
    //         items: [
    //             "Especialista en Ruso",
    //             "Experto en gramatica",
    //             "10 años de experiencia"
    //         ]
    //     },
    // ];

    return (
        <section id="profesores" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 py-10">
            <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-left my-4 text-black">Nuestros Profesores</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#ffffff] shadow-md rounded-[55px] border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow p-10"
                        >
                            <img
                                src={teacher[language].fotografia || "/bg2.jpg"}
                                alt={teacher[language].name || "profesor"}
                                className="relative left-0 right-0 mx-auto mb-8 w-48 h-48 object-cover rounded-full "
                            />
                            <h3 className="text-xl font-bold text-black text-center">{teacher[language]?.nombre}</h3>

                            <div className="p-4 bg-[#ffb06f]   border border-gray-600 rounded-[25px] my-8">
                                <p className="text-black  mb-2 font-bold text-center">{teacher[language]?.cargo}</p>
                                {
                                    teacher[language]?.resumenSecundario && teacher[language]?.resumenSecundario.length > 0 ? (
                                        <ul className="list-none space-y-2 text-black text-center">
                                            {teacher[language].resumenSecundario.map((item, index) => (
                                                <li key={index} className="flex items-center justify-center space-x-2">
                                                    <span className="text-black">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-black text-center">No hay información disponible</p>
                                    )
                                }
                            </div>
                            <div>
                                {teacher[language]?.presentacion?.map((parrafo, idx) => (
                                    <p key={idx} className="text-black pb-4">
                                        {parrafo}
                                    </p>
                                ))}

                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

