// src/components/Hero.jsx
import React from 'react';
import icon from '../assets/logo-icon.png';     // tu icono nuevo
import heroImg from '../assets/hero.jpg';       // << importa la imagen
import '../style.css';

export default function Hero() {
  return (
    <section className="relative w-full h-[50vh] md:h-[45vh] overflow-hidden">
      {/* Fondo con filtro y overlay azul */}
      <div className="absolute inset-0">
        <img
          src={heroImg}                       // << usa la variable importada
          alt="Fondo edificio"
          className="w-full h-full object-cover filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Contenido en esquina superior izquierda */}
      <div className="relative z-10 flex items-center h-full p-6">
        <img
          src={icon}
          alt="Icono CMI"
          className="h-28 md:h-32 mr-4"
        />

        <div>
          <h1 className="text-white text-5xl font-bold leading-tight">
            CMI General Solutions
          </h1>
          <p className="text-white text-xl mt-1">
            Soluciones integrales para el sector público y privado
          </p>
        </div>
      </div>
    </section>
  );
}
