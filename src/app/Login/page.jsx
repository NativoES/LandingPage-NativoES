import React from 'react';
import LoginForm from '@/components/LoginForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <div className='fixed top-0 left-0 bg-[#ffb06f]  w-full h-[50%] '></div>
      {/* Background patterns */}
      {/* <div className="absolute inset-0 z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[#ffb06f] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div> */}

      <LoginForm />
    </div>
  );
}

export default App;