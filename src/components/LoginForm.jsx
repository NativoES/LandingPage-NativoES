'use client'

import React, { useState } from 'react';
import { Globe2 } from 'lucide-react';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';

// import Logo from './Logo';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ffb06f] to-gray-800 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200" />

      <form
        onSubmit={handleSubmit}
        className="relative bg-white p-8 rounded-lg shadow-xl w-96 space-y-6 transform transition-all duration-300"
      >
        <div className="flex items-center justify-center mb-8 select-none">
          <div className="relative">
            <Globe2 className="w-12 h-12 text-[#ffb06f] animate-spin-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffb06f] to-gray-800 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-800 ml-3">
            NATIVOES
          </h2>
        </div>
        <div className="space-y-4">
          <FormInput
            type="email"
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="your@email.com"
            icon="mail"
          />
          <FormInput
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
            icon="lock"
            showPasswordToggle
          />
        </div>
       <Button theme="Primary" >Iniciar Sesión</Button>
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-gray-600 hover:text-[#ffb06f] transition-colors duration-300">
            Forgot password?
          </a>
          <a href="#" className="text-gray-600 hover:text-[#ffb06f] transition-colors duration-300">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}