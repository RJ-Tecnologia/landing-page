// src/components/Logo.tsx
import React from 'react';
import Image from 'next/image';

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className=" relative w-50 h-40">
      <img src="/Icone.svg" 
      alt="logo-zenit" 
      className='w-full h-full object-contain'
      
      />
    </div>
  </div>
);

