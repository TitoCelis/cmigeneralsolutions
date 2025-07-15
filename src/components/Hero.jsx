import React from 'react';
import logo from '../assets/LOGO_CMI_FINAL_PPF.png';
import '../style.css';

export default function Hero() {
  return (
    <section className="w-full h-screen bg-hero flex flex-col items-center justify-center text-white">
      <img src={logo} alt="CMI General Solutions" className="h-24 mb-4" />
      <h1 className="text-5xl font-bold">CMI General Solutions</h1>
      <p className="mt-2 text-xl">Soluciones integrales para el sector público y privado</p>
    </section>
  );
}