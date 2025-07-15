import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contáctanos</h2>
      <form
        action="mailto:tcelis@cmigeneralsolutions.com"
        method="post"
        encType="text/plain"
        className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto"
      >
        <input
          type="text"
          name="Nombre"
          placeholder="Nombre"
          className="flex-1 p-3 border rounded"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Correo electrónico"
          className="flex-1 p-3 border rounded"
          required
        />
        <textarea
          name="Mensaje"
          rows="3"
          placeholder="Mensaje"
          className="flex-1 p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 bg-var(--c3) text-white rounded-lg font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}