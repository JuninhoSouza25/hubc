'use client';

import { useState, useEffect } from 'react';
import { isClient, scrollToElement } from '../utils/client';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    scrollToElement(sectionId);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          <img src="/LOGO-1.png" alt="Hub-C" height="40" className="d-inline-block align-text-top" />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('home')}
              >
                Início
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('sobre')}
              >
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('beneficios')}
              >
                Benefícios
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('depoimentos')}
              >
                Depoimentos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('contato')}
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
