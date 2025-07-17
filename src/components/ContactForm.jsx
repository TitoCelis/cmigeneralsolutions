// src/components/ContactForm.jsx
import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contáctanos</h2>
      <form
        action="mailto:tcelis@cmigeneralsolutions.com"
        method="post"
        encType="text/plain"
        className="flex flex-col md:flex-row flex-wrap items-stretch justify-center gap-4 max-w-3xl mx-auto"
      >
        <input
          type="text"
          name="Nombre"
          placeholder="Nombre"
          className="flex-1 min-w-[200px] p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Correo electrónico"
          className="flex-1 min-w-[200px] p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="Mensaje"
          rows="3"
          placeholder="Mensaje"
          className="flex-1 w-full md:w-auto min-w-[200px] p-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 bg-[var(--c3)] hover:bg-[var(--c3)]/90 text-white rounded-lg font-semibold transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
