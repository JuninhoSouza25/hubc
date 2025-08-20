const Benefits = () => {
  const benefits = [
      {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
        </svg>
      ),
      title: "Estoque Nacional",
      description: "Pronta entrega sem espera por importação."
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22S5 14.25 5 9C5 5.13 8.13 2 12 2ZM12 6C10.34 6 9 7.34 9 9S10.34 12 12 12 15 10.66 15 9 13.66 6 12 6Z"/>
        </svg>
      ),
      title: "Retirada Imediata",
      description: "Retire hoje mesmo em nossos CD's"
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M12 2C17.52 2 22 6.48 22 12S17.52 22 12 22S2 17.52 2 12S6.48 2 12 2ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"/>
        </svg>
      ),
      title: "Entrega Rápida",
      description: "7-15 dias úteis direto na sua obra"
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 8.6 14.8 10V11.5C15.4 11.5 16 12.1 16 12.7V16.2C16 16.7 15.6 17.2 15.1 17.2H8.9C8.4 17.2 8 16.8 8 16.3V12.8C8 12.3 8.4 11.9 8.9 11.9V10.4C8.9 8.6 10.2 7 12 7ZM12 8.2C10.2 8.2 10.2 9.2 10.2 10V11.5H13.8V10C13.8 9.2 13.8 8.2 12 8.2Z"/>
        </svg>
      ),
      title: "Garantia Premium",
      description: "15 anos produto / 30 anos linear"
    }
  ];

  return (
    <section id="beneficios" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Por que escolher a Hub|C?
            </h2>
            <p className="lead text-muted">
              Oferecemos a melhor combinação de preço, qualidade e agilidade no mercado de painéis solares.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-3">
              <div className="benefit-card h-100 p-4 bg-white rounded shadow-sm border hover-card">
                <div className="text-center mb-4">
                  <div className="benefit-icon mb-3 d-flex justify-content-center">
                    {benefit.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{benefit.title}</h4>
                </div>
                <p className="text-muted text-center mb-0">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="bg-dark text-white rounded p-5 text-center">
              <h3 className="fw-bold mb-3">Pronto para economizar?</h3>
              <p className="mb-4">
                Solicite um orçamento personalizado e descubra como a Hub-C pode 
                otimizar seus custos com energia solar.
              </p>
              <button 
                className="btn btn-light btn-lg px-5"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
