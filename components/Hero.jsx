'use client';

import { scrollToElement } from '../utils/client';
import { ModulosIcon, InversoresIcon, EstruturasIcon, CabosIcon, EVChargersIcon } from './ProductIcons';

const Hero = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  const products = [
    {
      title: "Módulos",
      icon: ModulosIcon,
      link: "#modulos",
    },
    {
      title: "Inversores", 
      icon: InversoresIcon,
      link: "#contato",
    },
    {
      title: "Estruturas",
      icon: EstruturasIcon,
      link: "#contato",
    },
    {
      title: "Cabos",
      icon: CabosIcon,
      link: "#contato",
    },
    {
      title: "EV Chargers",
      icon: EVChargersIcon,
      link: "#contato",
    }
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">

          <div className="col-12 mx-auto text-center">
            <div className="hero-content">
              <h1 className="hero-title display-3 fw-bold text-white mb-4">
                Preço da China, <br /> Estoque no Brasil
              </h1>
              <p className="hero-description lead text-white mb-5">
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
                {/* <button 
                  className="btn btn-outline-light btn-lg px-5 py-3 mb-3"
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Saiba Mais
                </button> */}
              </div>
            </div>
          </div>

          <div className='col-12 mt-5' id='hero-products'>
            <div className="hero-products-container">
              <h3 className="text-white mb-4 fw-bold text-center">Produtos</h3>
              <div className="products-grid">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <a
                      key={index} 
                      href={product.link}
                      className="product-item"
                      onClick={(e) => {
                        if (product.link.startsWith('#')) {
                          e.preventDefault();
                          const targetId = product.link.substring(1);
                          const element = document.getElementById(targetId);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                    >
                      <div className="product-icon">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="product-title">{product.title}</span>
                    </a>
                  );
                })}
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
