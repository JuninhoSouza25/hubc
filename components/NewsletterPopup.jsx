'use client';

import { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasShown && window.scrollY > 300) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  useEffect(() => {
    if (isVisible) {
      // Inicializa o formulário RDStation após o popup aparecer
      const timer = setTimeout(() => {
        if (window.RDStationForms) {
          new window.RDStationForms('contato-site-hubc-3daea868ff41c4b7a198', 'null').createForm();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Scripts do RDStation */}
      <script
        type="text/javascript"
        src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
        async
      />
      
      {/* Backdrop */}
      <div 
        className="newsletter-popup-backdrop"
        onClick={handleBackdropClick}
      >
        {/* Popup Container */}
        <div className="newsletter-popup-container">
          {/* Botão de Fechar */}
          <button 
            className="newsletter-popup-close"
            onClick={handleClose}
            aria-label="Fechar popup"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.36 6.64a1 1 0 0 1 0 1.41L13.41 13l4.95 4.95a1 1 0 1 1-1.41 1.41L12 14.41l-4.95 4.95a1 1 0 0 1-1.41-1.41L10.59 13 5.64 8.05a1 1 0 0 1 1.41-1.41L12 11.59l4.95-4.95a1 1 0 0 1 1.41 0z"/>
            </svg>
          </button>

          {/* Conteúdo do Popup */}
          <div className="newsletter-popup-content">
            <div className="newsletter-popup-header">
              <h3 className="newsletter-popup-title">
                Fique por dentro das novidades!
              </h3>
              <p className="newsletter-popup-subtitle">
                Receba as melhores ofertas e condições diretamente no seu e-mail.
              </p>
            </div>

            {/* Formulário RDStation */}
            <div className="newsletter-popup-form">
              <div role="main" id="contato-site-hubc-3daea868ff41c4b7a198"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;
