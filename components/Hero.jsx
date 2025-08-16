'use client';

import { scrollToElement } from '../utils/client';

const Hero = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-content">
              <h1 className="hero-title display-3 fw-bold text-white mb-4">
                Painéis Solares Direto da China
              </h1>
              <p className="hero-subtitle h3 text-white mb-4">
                Preço da China, Estoque no Brasil
              </p>
              <p className="hero-description lead text-white mb-5">
                A Hub-C é sua parceira no comércio atacado de módulos de energia solar. 
                Oferecemos produtos de alta qualidade com preços competitivos e entrega rápida.
              </p>
              <div className="hero-actions">
                <button 
                  className="btn btn-light btn-lg px-5 py-3 me-3 mb-3"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-5 py-3 mb-3"
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
