import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function FloatingActions() {
  return (
    <div className="fixed-actions">
      <a
        href="https://wa.me/51990292579"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn"
        style={{ backgroundColor: 'var(--c4)', color: 'white' }}
      >
        <FaWhatsapp size={20} />
      </a>
      <a
        href="https://www.linkedin.com/company/cmi-general-solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn"
        style={{ backgroundColor: 'white', color: 'var(--c3)' }}
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}