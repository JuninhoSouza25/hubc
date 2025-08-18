'use client';

import { scrollToElement } from '../utils/client';

const ModulesProducts = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  const modules = [
    {
      title: "Ronma 610w",
      series: "SKYMAX series",
      power: "610-650w",
      efficiency: "23.25% eficiência",
      image: "/ronma-module.png"
    },
    {
      title: "Ronma 580w", 
      series: "High efficiency",
      power: "580-650w",
      efficiency: "22.8% eficiência",
      image: "/ronma-module.png"
    },
    {
      title: "Ronma 550w",
      series: "Standard series", 
      power: "550-650w",
      efficiency: "21.5% eficiência",
      image: "/ronma-module.png"
    }
  ];

  return (
    <section id="modulos" className="modules-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold text-dark mb-4">
              Encontre o produto ideal para o seu projeto
            </h2>
          </div>
        </div>
        
        <div className="row g-4">
          {modules.map((module, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="module-card h-100">
                <div className="module-image">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="module-img"
                  />
                </div>
                
                <div className="module-content">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-series fw-semibold">{module.series}</p>
                  
                  <div className="module-specs">
                    <div className="spec-item">
                      <span className="spec-label">Potência:</span>
                      <span className="spec-value">{module.power}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Eficiência:</span>
                      <span className="spec-value">{module.efficiency}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-primary w-100 mt-3"
                    onClick={scrollToContact}
                  >
                    Entre em contato
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesProducts;
