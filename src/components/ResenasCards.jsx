"use client"
import Button from "@/components/Button";



export default function ResenasCards() {


    const teachers = [
        {
            name: "Juan Pérez",
            subject: "Prof. Ruso",
            photo: "/perfil1.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
        {
            name: "María López",
            subject: "Prof. Ruso",
            photo: "/perfil2.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
        {
            name: "Carlos Sánchez",
            subject: "Prof. Español",
            photo: "perfil3.png",
            items: [
                "Especialista en Ruso",
                "Experto en gramatica",
                "10 años de experiencia"
            ]
        },
    ];

    return (
        <section id="profesores" className="relative py-16 px-4 sm:px-6 lg:px-8  bg-gray-100">
            <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-left my-4 text-black">Resultados de los alumnos </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                        <div
                            key={index}
                            className="bg-[#ffb06f]  shadow-md rounded-[55px] overflow-hidden hover:shadow-lg transition-shadow p-10"
                        >
                            <img
                                src={teacher.photo}
                                alt={teacher.name}
                                className="relative left-0 right-0 mx-auto mb-8 w-48 h-48 object-cover rounded-full "
                            />
                            <h3 className="text-xl font-bold text-black text-center mb-5">{teacher.name}</h3>
                            <div className=" flex justify-center">

                                <Button theme="Black">
                                    Ver más
                                </Button>

                            </div>
                            <div className="p-2 bg-[#ffffff]   rounded-[10px] my-8">
                                <p className="text-black  font-bold  text-center">ESTUDIOS</p>

                            </div>
                            <div>
                                <p className="text-black pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptates a cupiditate possimus atque veritatis porro assumenda tempore aliquam accusamus maxime fuga alias cum! Soluta, ratione! Cumque maiores ut iure.</p>
                            </div>
                            <div className="p-2 bg-[#ffffff]   rounded-[10px] my-8">
                                <p className="text-black  font-bold  text-center">ANTES</p>

                            </div>
                            <div>
                                <p className="text-black pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptates a cupiditate possimus atque veritatis porro assumenda tempore aliquam accusamus maxime fuga alias cum! Soluta, ratione! Cumque maiores ut iure.</p>
                            </div>
                            <div className="p-2 bg-[#ffffff]   rounded-[10px] my-8">
                                <p className="text-black  font-bold  text-center">DESPUES</p>

                            </div>
                            <div>
                                <p className="text-black pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, voluptates a cupiditate possimus atque veritatis porro assumenda tempore aliquam accusamus maxime fuga alias cum! Soluta, ratione! Cumque maiores ut iure.</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
