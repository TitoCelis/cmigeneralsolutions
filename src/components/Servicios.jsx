import React from 'react';

const servicios = [
  {
    title: 'Productos de Salud',
    desc: 'Reactivos, equipos médicos y de laboratorio, insumos',
    icon: '🧪',
  },
  {
    title: 'Plásticos y Acondicionamiento',
    desc: 'Baldes, cajas portavacunas, contenedores, paquetes fríos',
    icon: '📦',
  },
  {
    title: 'Logística y Transporte',
    desc: 'Servicios de transporte y gestión logística para entidades públicas',
    icon: '🚚',
  },
];

export default function Servicios() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {servicios.map((s) => (
          <div key={s.title} className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="mb-4">{s.desc}</p>
            <div className="text-4xl">{s.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}