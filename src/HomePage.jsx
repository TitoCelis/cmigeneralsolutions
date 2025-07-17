// src/HomePage.jsx
import React from "react";

// Importa todos los componentes, incluyendo el nuevo Nosotros
import FloatingActions from "./components/FloatingActions";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm";

// Importa las imágenes desde assets
import heroImg from "./assets/hero.jpg";
import logoIcon from "./assets/logo-icon.png";

import "./style.css";

export default function HomePage() {
  return (
    <div className="bg-[#eef5ed] text-[#3c3c3b] min-h-screen font-sans relative">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center h-[50vh] md:h-[45vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay azul semitransparente */}
        <div className="absolute inset-0 bg-[rgba(10,67,119,0.7)]"></div>

        <div className="relative z-10 flex items-center px-4">
          {/* Logo a la izquierda del texto */}
          <img
            src={logoIcon}
            alt="CMI Icon"
            className="h-24 md:h-32 mr-4"
          />
          <div className="text-white text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              CMI General Solutions
            </h1>
            <p className="text-xl max-w-xl">
              Soluciones integrales para el sector público y privado
            </p>
          </div>
        </div>
      </section>

      {/* Botones flotantes de WhatsApp y LinkedIn */}
      <FloatingActions />

      {/* ——— SECCIÓN “NOSOTROS” ——— */}
      <Nosotros />
      {/* ———————————————————————— */}

      {/* Resto de secciones */}
      <Servicios />
      <Clientes />
      <ContactForm />
    </div>
  );
}
