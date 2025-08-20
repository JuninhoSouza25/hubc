'use client';

import { scrollToElement } from '../utils/client';

const ModulesProducts = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  const downloadDatasheet = (datasheetUrl) => {
    try {
      window.open(datasheetUrl, '_blank');
    } catch (error) {
      console.error('Erro ao abrir datasheet:', error);
      alert('Não foi possível abrir o datasheet. Verifique se o arquivo existe.');
    }
  };

  const modules = [
    {
      title: "Ronma 585w", 
      series: "High efficiency",
      power: "580-650w",
      efficiency: "22.8% eficiência",
      image: "/ronma-module.png",
      datasheet: "https://drive.google.com/file/d/1gOoXFDdgYlYePQI7O9JTkqjUPDjLznmh/view?usp=sharing",
      description: "Módulo bifacial de alta eficiência."
    },
    {
      title: "Ronma 610w",
      series: "SKYMAX series",
      power: "610-650w",
      efficiency: "23.25% eficiência",
      image: "/ronma-module.png",
      datasheet: "https://drive.google.com/file/d/1GoLJzZQ5FZkW1XndJc7SxOqWRGxClmgY/view?usp=sharing",
      description: "Módulo bifacial de alta eficiência."
    },
    {
      title: "Ronma 700w",
      series: "Standard series", 
      power: "685-730w",
      efficiency: "23.52% eficiência",
      image: "/ronma-module.png",
      datasheet: "https://drive.google.com/file/d/1dh7mW4V5cKxAmcTvh0eOYwVFzEJnHijZ/view?usp=sharing",
      description: "Módulo bifacial de alta eficiência."
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
                  <p className="module-description text-muted mb-2">{module.description}</p>
                  
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
                  
                  <div className="module-actions mt-3">
                    <button 
                      className="btn btn-primary w-100 mb-2"
                      onClick={scrollToContact}
                    >
                      Entre em contato
                    </button>
                    <button 
                      className="btn btn-outline-secondary w-100"
                      onClick={() => downloadDatasheet(module.datasheet)}
                    >
                      Download Datasheet
                    </button>
                  </div>
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
