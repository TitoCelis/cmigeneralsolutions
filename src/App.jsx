import React from 'react';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Clientes from './components/Clientes';
import ContactForm from './components/ContactForm';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Hero />
      <Servicios />
      <Clientes />
      <ContactForm />
      <FloatingActions />
    </>
  );
}