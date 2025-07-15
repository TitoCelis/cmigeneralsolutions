import React from 'react';

const clientes = [
  'Organización Panamericana de la Salud',
  'Seguro Social de Salud (EsSalud)',
  'Zurece',
  'Gobiernos Regionales',
  'Productos Forma',
  'Banco Central de Reserva',
  'Tgestiona',
];

export default function Clientes() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Nuestros Clientes</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto">
        {clientes.map((c) => (
          <li key={c} className="flex items-center">
            <span className="mr-2 text-green-600">✔</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}