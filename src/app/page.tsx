"use client"; // Obrigatório para usar states e funções

import { useState } from 'react';
import { LandingPage } from '@/src/components/LandingPage';

export default function Home() {
  const [dark, setDark] = useState(false);

  const handleLogin = () => console.log("Login");
  const handleTech = () => console.log("Tech Company");
  const toggleTheme = () => setDark(!dark); // Inverte o valor de true/false

  return (
    <main>
      <LandingPage 
        onNavigateToLogin={handleLogin}
        onNavigateToTechCompany={handleTech}
        isDarkMode={dark}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}