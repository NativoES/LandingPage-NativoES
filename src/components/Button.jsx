'use client';
// import style from '@/app/(layout)/style.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Button({ theme, styled, click, children, type, isLoading }) {

    return <ScrollAnimation
        animateIn='flipInY'
        animateOut='flipOutY'
        offset={0}
    >

        <button
            onClick={click}
            type={type ? type : "submit"}
            className={`w-full border-[1px] focus:outline-none transition-all py-3 px-4 text-center me-2 duration-300 text-[16px]  shadow-lg rounded-lg hover:scale-105 
            ${theme === 'Transparent' &&
                "bg-transparent border-gray-50 text-white  hover:bg-transparent hover:text-white   focus:ring-blue-300  text-[14px] w-[100%] sm:max-w-[380px] px-5 py-3  "
                } 
            ${theme === 'Primary' &&
                " bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f]  text-black font-semibold   hover:from-[#ffb06f] hover:to-[#ffb06f]  focus:ring-[#ffb06f]     "
                } 
            ${theme === 'Secondary' &&
                " text-white bg-violet-700  focus:ring-blue-300   text-[14px]  sm:w-[250px] "
                } 
            ${theme === 'Success' &&
                " text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br       "
                } 
            ${theme === 'Disable' &&
                ` text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br      `
                } 
            ${theme === 'Danger' &&
                " text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br"
                } 
            ${theme === 'Black' &&
                " text-white bg-gradient-to-r from-[#000000]  to-[#474747] hover:from-[#474747] hover:to-[#0c0c0c] "
                }
            ${theme === 'MiniTransparent' &&
                "  text-black bg-gradient-to-r from-gray-100  to-gray-100   hover:from-[#ffb06f] hover:to-[#ffb06f]"
                } 
            ${theme === 'MiniPrimary' &&
                " text-black bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f] hover:from-[#ffb06f] hover:to-[#ffb06f]"
                }
            
            `}>

            <span className={`transform   ${isLoading ? 'translate-y-10 opacity-0' : ''}`}>
                {children}
            </span>
            {isLoading && (
                <div className="absolute inset-0 ">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </button >
    </ScrollAnimation>
}


