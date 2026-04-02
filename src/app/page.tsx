"use client";

import { useState } from 'react';
import { LandingPage } from '@/components/LandingPage';
import { env } from '@/env';

export default function Home() {
  const [dark, setDark] = useState(false);

  const handleTech = () => console.log("Tech Company");
  const toggleTheme = () => setDark(!dark);

  return (
    <main>
      <LandingPage 
        loginLink={env.NEXT_PUBLIC_APP_URL}
        onNavigateToTechCompany={handleTech}
        isDarkMode={dark}
        toggleTheme={toggleTheme}
      />
    </main>
  );
}