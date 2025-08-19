'use client';

import { scrollToElement } from '../utils/client';

const Hero = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="hero-content">
              <h1 className="hero-title display-3 fw-bold mb-4">
                Preço da China <br /> Estoque no Brasil
              </h1>
              <p className="hero-description lead mb-5 fs-6">
                A Hub-C é sua parceira no comércio atacado de módulos de energia solar. <br /> 
                Oferecemos produtos de alta qualidade com preços competitivos e entrega rápida.
              </p>
              <div className="hero-actions">
                <button 
                  className="btn btn-light btn-lg px-5 py-3 me-3 mb-3"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-geometric"></div>
    </section>
  );
};

export default Hero;
