'use client'
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@/components/Button';
import CardTimes from '@/components/CardTimes';

import { useAppContext } from "@/context/AppContext";






export default function Card({ img }) {
    const { cardPricingOne, setCardPricingOne, cardPricingTwo, setCardPricingTwo } = useAppContext()



    return (



        <section id="pricing" className="relative py-16   bg-gray-200">
            <div className="absolute top-0 left-[30px] h-[8px] w-[100px] bg-[#ffb06f] "> </div>
            <div className='flex ml-12'>
                <ScrollAnimation
                    animateIn='flipInY'
                    animateOut='flipOutY'>
                    <h2 className="text-[20px] sm:text-[40px] font-bold text-gray-900 mb-6">Formas de estudio</h2>
                </ScrollAnimation>
            </div>
            <div className="w-[90vw] max-w-[1100px] mx-auto rounded-xl flex flex-col items-center justify-center">


                <div className=" w-full  border border-gray-200 rounded-[50px] grid grid-cols-4 mb-10">

                    <div className="w-full flex flex-col justify-around rounded-[8px] mb-6  pr-10">
                        <Button theme={cardPricingOne === 'individual' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('individual')}>
                            Individual
                        </Button>

                        <Button theme={cardPricingOne === 'pareja' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('pareja')}>
                            Pareja
                        </Button>
                        <Button theme={cardPricingOne === 'grupo' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingOne('grupo')}>
                            Grupo
                        </Button>
                    </div>
                    {cardPricingOne === 'individual' && <div className='text-black col-span-3 bg-gray-50 shadow-2xl p-10 mb-12 rounded-[40px] '>
                        <h3 className='font-bold text-[30px] text-gray-800'>Clase individuales</h3>
                        <br />✔️Занятия в Skype или Google Meet
                        <br />✔️На платформе школы NATIVO.ES + интерактивной доске Miro
                        <br />✔️Презентация по теме урока и список слов с их озвучиванием
                        <br />✔️Использование аутентичных материалов (учебников, статей, песен, видео, аудио)
                        <br />✔️Развитие всех аспектов языка. Особое внимание уделяется разговорной практике и аудированию
                        <br />✔️Программа составляется под цели и запросы каждого ученика
                        <br />✔️Количество занятий выбирает ученик, однако для достижения большего результата рекомендуем заниматься минимум 2 раза в неделю
                    </div>}
                    {cardPricingOne === 'pareja' && <div className='text-black col-span-3 bg-gray-50 shadow-2xl p-10 mb-12 rounded-[40px] '>
                        <h3 className='font-bold text-[30px] text-gray-800'>Clases en pareja</h3>
                        <br /> ✔️Занятия в Skype 1-2 раза в неделю по согласованному расписанию

                        <br /> ✔️На платформе школы NATIVO.ES + интерактивной доске Miro

                        <br /> ✔️Презентация по теме урока и список слов с их озвучиванием

                        <br /> ✔️Использование аутентичных материалов (учебников, статей, песен, видео, аудио)

                        <br /> ✔️Развитие всех аспектов языка. Особое внимание уделяется разговорной практике и аудированию

                        <br /> ✔️Длительность — 60 мин или 90 мин
                    </div>}
                    {cardPricingOne === 'grupo' && <div className='text-black col-span-3 bg-gray-50 shadow-2xl p-10 mb-12 rounded-[40px] '>
                        <h3 className='font-bold text-[30px] text-gray-800'>Clase grupales (3 a 4 estudiantes)</h3>
                        <br /> ✔️Занятия в Skype 2 раза в неделю по согласованному расписанию

                        <br /> ✔️На платформе школы NATIVO.ES + интерактивной доске Miro

                        <br /> ✔️Презентация по теме урока и список слов с их озвучиванием

                        <br /> ✔️Использование аутентичных материалов (учебников, статей, песен, видео, аудио)

                        <br /> ✔️Развитие всех аспектов языка. Особое внимание уделяется разговорной практике и аудированию
                    </div>}
                </div>
                <div className=" w-full  border border-gray-200 rounded-[50px] grid grid-cols-4 mb-10">
                    <div className="w-full flex flex-col justify-around rounded-[8px] mb-6  pr-10">
                        <Button theme={cardPricingTwo === '60min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('60min')}>
                            60 min
                        </Button>
                        <Button theme={cardPricingTwo === '90min' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('90min')}>
                            90 min
                        </Button>
                        <Button theme={cardPricingTwo === 'ofertas' ? 'MiniPrimary' : 'MiniTransparent'} click={() => setCardPricingTwo('ofertas')}>
                            Ofertas
                        </Button>
                    </div>
                    <div className="col-span-3 rounded-[50px]  ">
                        {cardPricingOne === 'individual' && <CardTimes img='/individual.png' card={'individual'} time={cardPricingTwo}></CardTimes>}
                        {cardPricingOne === 'pareja' && <CardTimes img='/pareja.png' card={'pareja'} ></CardTimes>}
                        {cardPricingOne === 'grupo' && <CardTimes img='/grupo.png' card={'grupo'} ></CardTimes>}
                    </div>
                </div>
                <br />



                <div className="flex justify-center mt-10">
                    <div className="w-[300px]">
                        <Button theme={'MiniPrimary'} click={() => ''}>
                            Reserva tu clase
                        </Button>
                    </div>
                </div>


            </div>


        </section>


    );
}