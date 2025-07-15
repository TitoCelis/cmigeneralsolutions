import React from "react";

export default function HomePage() {
  return (
    <div className="bg-[#eef5ed] text-[#3c3c3b] min-h-screen font-sans">
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('./hero-building.jpg')" }}
      >
        <div className="bg-[#3c3c3b]/60 absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4">
          <img
            src="./logo-cmi.png"
            alt="CMI General Solutions"
            className="mx-auto mb-6 max-w-[200px]"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Soluciones que se adaptan, proyectos que avanzan
          </h1>
          <p className="text-xl max-w-xl mx-auto">
            Soluciones integrales en licitaciones, productos médicos y logística.
          </p>
        </div>
      </section>
    </div>
  );
}