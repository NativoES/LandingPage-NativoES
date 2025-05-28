'use client';
// import style from '@/app/(layout)/style.module.css'

export default function Button({ theme, styled, click, children, type, isLoading }) {



    const styles = `w-full border-[1px] focus:ring-4 focus:outline-none
    ${theme === 'Transparent' &&
        "bg-transparentborder-gray-50 text-white  hover:bg-transparent hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-[100%] sm:max-w-[380px] px-5 py-3 text-center"
        } ${theme === 'Primary' &&
        " bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f]  text-black font-semibold py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg"
        } ${theme === 'Secondary' &&
        " text-white bg-violet-700  focus:ring-blue-300 font-medium rounded-xl text-[14px]  sm:w-[250px] px-5 py-3 text-center"
        } ${theme === 'Success' &&
        " text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all"
        } ${theme === 'Disable' &&
        ` text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all`
        } ${theme === 'Danger' &&
        " text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all"
        } ${theme === 'MiniTransparent' &&
        " bg-gradient-to-r from-gray-100  to-gray-100  text-black py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg"
        } ${theme === 'MiniPrimary' &&
        " bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f]  text-black py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg hover:scale-105"
        }`




return <button
    onClick={click}
    type={type ? type : "submit"}
    className={styles}>
    <span className={`transform transition-all duration-300 ${isLoading ? 'translate-y-10 opacity-0' : ''}`}>
        {children}
    </span>
    {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
        </div>
    )}
</button >
}




// switch (theme) {
//     case 'Transparent':
//         return <button
//             type={type ? type : "submit"}
//             className=" bg-transparent border-[1px] border-gray-50 text-white  hover:bg-transparent hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-[100%] sm:max-w-[380px] px-5 py-3 text-center"

//             onClick={click}
//         >
//             {children}
//         </button>
//         break
//     case 'Primary':
//         return <button
//             type={type ? type : "submit"}
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f]  text-black font-semibold py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg"
//         >
//             <span className={`transform transition-all duration-300 ${isLoading ? 'translate-y-10 opacity-0' : ''}`}>
//                 {children}
//             </span>
//             {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//             )}
//         </button>
//         break
//     case 'Secondary':
//         return <button
//             type={type ? type : "submit"}
//             className="nhn text-white bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[14px] w-full sm:w-[250px] px-5 py-3 text-center"
//             // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] w-full sm:w-auto px-5 py-3.5 text-center
//             // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={click}
//         >
//             {children}
//         </button>
//     case 'Success':
//         return <button
//             type={type ? type : "submit"}

//             className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all"

//             // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] w-full sm:w-auto px-5 py-3.5 text-center
//             // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={click}
//         >
//             {children}
//         </button>

//     case 'Disable':
//         return <button
//             type={type ? type : "submit"}
//             className={`w-full text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all`}
//             // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[14px] w-full sm:w-auto px-5 py-3.5 text-center
//             // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={click}
//         >
//             {children}
//         </button>
//     case 'Danger':
//         return <button
//             type={type ? type : "submit"}
//             className="w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br foco-4 focus:outline-none foco-cyan-300 dark:foco-cyan-800 font-medium rounded-lg text-[10px] px-5 py-2 text-center me-2  transition-all"
//             onClick={click}
//         >
//             {children}
//         </button>
//    case 'MiniTransparent':
//     return <button
//         type={type ? type : "submit"}
//         disabled={isLoading}
//         className="w-full bg-gradient-to-r from-gray-100  to-gray-100  text-black py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg"
//     >
//         <span className={`transform transition-all duration-300 ${isLoading ? 'translate-y-10 opacity-0' : ''}`}>
//             {children}
//         </span>
//         {isLoading && (
//             <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//             </div>
//         )}
//     </button>
//     break
//     case 'MiniPrimary':
//         return <button
//             type={type ? type : "submit"}
//             disabled={isLoading}
//             className="w-full bg-gradient-to-r from-[#ffb06f]  to-[#ffb06f]  text-black py-3 px-4 rounded-lg hover:from-[#ffb06f] hover:to-[#ffb06f] focus:ring-4 focus:ring-[#ffb06f] transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-lg hover:scale-105"
//         >
//             <span className={`transform transition-all duration-300 ${isLoading ? 'translate-y-10 opacity-0' : ''}`}>
//                 {children}
//             </span>
//             {isLoading && (
//                 <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//             )}
//         </button>
//         break
//     default:

// }