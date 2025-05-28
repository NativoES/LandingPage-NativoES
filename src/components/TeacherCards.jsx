"use client"
import Link from 'next/link'
import Button from '@/components/Button'

export default function TeacherCards({ teacher, key }) {
  return (
    <div
      key={key}
      className="bg-[#ffb06f]  m-0 md:mx-5 shadow-md rounded-[50px] border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow p-10"
    >
      <div
        className="relative left-0 right-0 mx-auto mb-8 w-[150px] h-[150px] object-cover rounded-full overflow-hidden"
      >
        <img
          src={teacher.photo}
          alt={teacher.name}
          className="relative left-0 right-0 mx-auto mb-8 w-[150px] h-[150px] object-cover rounded-full transition-all hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold text-black text-center">{teacher.name}</h3>

      <div className="p-4 bg-white  border border-gray-200 rounded-[25px] my-8">
        <p className="text-black  mb-2">{teacher.subject}</p>
        <ul className="list-none space-y-2">
          {teacher.items.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-2 text-gray-700"
            >
              <span className="text-black">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex justify-center">
        <Link href='/Profesores' className='w-[150px]'>
          <Button theme={'Black'} click={() => ''}>
            Ver más
          </Button>
        </Link>
      </div>
    </div>
  );
};

