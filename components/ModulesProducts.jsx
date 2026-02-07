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
      title: "585w bifacial", 
      // series: "High efficiency",
      power: "580-650w",
      efficiency: "22.8% eficiência",
      image: "/ronma-module-img.png",
      datasheet: "https://drive.google.com/file/d/1gOoXFDdgYlYePQI7O9JTkqjUPDjLznmh/view?usp=sharing"
    },
    {
      title: "610w bifacial",
      // series: "SKYMAX series",
      power: "610-650w",
      efficiency: "23.25% eficiência",
      image: "/ronma-module-img.png",
      datasheet: "https://drive.google.com/file/d/1GoLJzZQ5FZkW1XndJc7SxOqWRGxClmgY/view?usp=sharing"
    },
    {
      title: "module-img.png",
      datasheet: "https://drive.google.com/file/d/1dh7mW4V5cKxAmcTvh0eOYwVFzEJnHijZ/view?usp=sharing"
    }
  ];

  const inverters = [
    {
      title: "S6-EH3P(60-75)K10-LV-YD-H",
      series: "SOLARATOR", 
      power: "trifásico",
      image: "/inversor-1.png",
    },
    {
      title: "S6-EH3P(30-50)K-H",
      series: "SOLARATOR", 
      power: "trifásico",
      image: "/inversor-2.png",
      datasheet: ""
    },
    {
      title: "S6-GR1P(2-3)K-M",
      series: "SOLARATOR", 
      power: "trifásico",
      image: "/inversor-3.png",
      datasheet: ""
    }
  ]

  const batteries = [
    {
      title: "GP LiFe48-100TS",
      series: "Série Getpower", 
      power: "trifásico",
      image: "/bateria-1.png",
    },
    {
      title: "WALL GP Wall 5kWh",
      series: "Série Getpower", 
      power: "trifásico",
      image: "/bateria-2.png",
    },
    {
      title: "GP RACK-LV",
      series: "Série Getpower", 
      power: "trifásico",
      image: "/bateria-3.png",
    }
  ]

  const ecoflow = [
    {
      title: "EcoFlow Delta 2 Max",
      series: "Estação de Energia Portátil 3400W / 2048Wh",
      power: "trifásico",
      image: "/ecoflow-1.png",
    },
    {
      title: "EcoFlow River 3 PLUS",
      series: "Estação De Energia Portátil 600W",
      power: "trifásico",
      image: "/ecoflow-2.png",
    },
    {
      title: "EcoFlow 220W Painel Solar Portátil",
      series: "Série EcoFlow",
      power: "trifásico",
      image: "/ecoflow-3.png",
    }
  ]

  const structures = [
    {
      title: "Estrutura flutuante",
      series: "",
      image: "/estrutura.png",
    }
  ]


  return (
    <section className="modules-section py-5">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold text-dark mb-4">
              Encontre o produto ideal para o seu projeto
            </h2>
          </div>
        </div>
        
        <div className='container'>
          <div className="row g-4 mx-0 mx-md-5" id="modulos">
            <h3 className="mb-4 text-center">Módulos Solares</h3>
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
      </div>

      <div className="container-fluid bg-body py-5" id="inversores">  
          <div className='container'>
            <div className="row g-4 mx-0 mx-md-5">
            <h3 className="mb-4 text-center">Inversores</h3>
            {inverters.map((inverter, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="module-card h-100">
                  <div className="module-image">
                    <img 
                      src={inverter.image} 
                      alt={inverter.title}
                      className="module-img"
                    />
                  </div>
                  
                  <div className="module-content">
                    <h3 className="module-title">{inverter.title}</h3>
                    <p className="module-series fw-semibold">{inverter.series}</p>
                    
                    <div className="module-actions mt-3">
                      <button 
                        className="btn btn-primary w-100 mb-2"
                        onClick={scrollToContact}
                      >
                        Entre em contato
                      </button>
                      {/* <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => downloadDatasheet(inverter.datasheet)}
                      >
                        Download Datasheet
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5" id="baterias">  
          <div className='container'>
            <div className="row g-4 mx-0 mx-md-5" >
            <h3 className="mb-4 text-center">Baterias</h3>
            {batteries.map((battery, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="module-card h-100">
                  <div className="module-image">
                    <img 
                      src={battery.image} 
                      alt={battery.title}
                      className="module-img"
                    />
                  </div>
                  
                  <div className="module-content">
                    <h3 className="module-title">{battery.title}</h3>
                    <p className="module-series fw-semibold">{battery.series}</p>

                    <div className="module-actions mt-3">
                      <button 
                        className="btn btn-primary w-100 mb-2"
                        onClick={scrollToContact}
                      >
                        Entre em contato
                      </button>
                      {/* <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => downloadDatasheet(inverter.datasheet)}
                      >
                        Download Datasheet
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid bg-body py-5" id="ecoflow">  
        <div className='container'>
          <div className="row g-4 mx-0 mx-md-5" >
            <h3 className="mb-4 text-center">EcoFlow</h3>
            {ecoflow.map((battery, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="module-card h-100">
                  <div className="module-image">
                    <img 
                      src={battery.image} 
                      alt={battery.title}
                      className="module-img"
                    />
                  </div>
                  
                  <div className="module-content">
                    <h3 className="module-title">{battery.title}</h3>
                    <p className="module-series fw-semibold">{battery.series}</p>

                    <div className="module-actions mt-3">
                      <button 
                        className="btn btn-primary w-100 mb-2"
                        onClick={scrollToContact}
                      >
                        Entre em contato
                      </button>
                      {/* <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => downloadDatasheet(inverter.datasheet)}
                      >
                        Download Datasheet
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        <div className="container-fluid py-5" id="estruturas">  
          <div className='container'>
            <div className="row g-4 mx-0 mx-md-5" >
            <h3 className="mb-4 text-center">Estruturas</h3>
            {structures.map((structure, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="module-card h-100">
                  <div className="module-image">
                    <img 
                      src={structure.image} 
                      alt={structure.title}
                      className="module-img"
                    />
                  </div>
                  
                  <div className="module-content">
                    <h3 className="module-title">{structure.title}</h3>
                    <p className="module-series fw-semibold">{structure.series}</p>

                    <div className="module-actions mt-3">
                      <button 
                        className="btn btn-primary w-100 mb-2"
                        onClick={scrollToContact}
                      >
                        Entre em contato
                      </button>
                      {/* <button 
                        className="btn btn-outline-secondary w-100"
                        onClick={() => downloadDatasheet(inverter.datasheet)}
                      >
                        Download Datasheet
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesProducts;
