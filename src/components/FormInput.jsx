import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';


export default function FormInput({
  type: initialType,
  label,
  value,
  onChange,
  placeholder,
  icon,
  showPasswordToggle
}) {
  const [type, setType] = useState(initialType);
  const [isFocused, setIsFocused] = useState(false);

  const Icon = icon === 'mail' ? Mail : Lock;

  const togglePasswordVisibility = () => {
    setType(type === 'password' ? 'text' : 'password');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <Icon className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
          isFocused ? 'text-yellow-500' : 'text-gray-400'
        }`} />
        
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full text-black pl-12 pr-12 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ffb06f] focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white outline-none"
          placeholder={placeholder}
          required
        />

        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#ffb06f] transition-colors duration-200"
          >
            {type === 'password' ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}