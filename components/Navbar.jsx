'use client';

import { useState, useEffect } from 'react';
import { isClient, scrollToElement } from '../utils/client';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    scrollToElement(sectionId);
    closeMenu(); // Fecha o menu após clicar em um item
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
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
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
                onClick={() => scrollToSection('beneficios')}
              >
                Benefícios
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('modulos')}
              >
                Módulos
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
