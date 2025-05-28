'use client'
import ScrollAnimation from 'react-animate-on-scroll';


export default function CardPricing({ img }) {



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
                    <div className="text-black col-span-2 bg-white p-10  rounded-r-[50px] ">
                        ✔️ Проходят в Skype или Google Meet <br />
                        ✔️ На интерактивной доске Miro + платформе Progressme, отдельно высылается список слов с пройденными словами по теме урока в Quizlet <br />
                        ✔️ Используются аутентичные материалы (учебники, статьи, видео, аудио, песни) <br />
                        ✔️ Развиваются все аспекты языка. Особое внимание уделяется говорению и аудированию <br />
                        ✔️ Программа составляется под цели и запросы каждого ученика <br />
                        ✔️ Количество занятий выбирает ученик, однако для достижения большего результата рекомендуем заниматься минимум 2 раза в неделю
                    </div>
                </div></ScrollAnimation></div>
    );
}