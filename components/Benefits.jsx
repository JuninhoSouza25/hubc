const Benefits = () => {
  const benefits = [
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.33C15.44 5.12 14.67 5 13.87 5C10.03 5 7 8.03 7 11.87C7 15.71 10.03 18.74 13.87 18.74C17.71 18.74 20.74 15.71 20.74 11.87V9H21ZM3 13V11L6 8L8 10L11 7L13 9V11L11 13L8 10L6 12L3 13Z"/>
        </svg>
      ),
      title: "Preço Competitivo",
      description: "Importação direta da China com os melhores preços do mercado, sem intermediários."
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M20 8H19V7C19 5.9 18.1 5 17 5H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V5H7C5.9 5 5 5.9 5 7V8H4C3.45 8 3 8.45 3 9V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9C21 8.45 20.55 8 20 8ZM10 4H14V5H10V4ZM7 7H17V8H7V7ZM19 19H5V10H19V19ZM17 12H7V14H17V12ZM17 15H7V17H17V15Z"/>
        </svg>
      ),
      title: "Entrega Rápida",
      description: "Estoque estratégico no Brasil garante entregas em até 5 dias úteis."
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-highlight">
          <path d="M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C7.6 4 4 7.6 4 12S7.6 20 12 20 20 16.4 20 12 16.4 4 12 4M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
        </svg>
      ),
      title: "Qualidade Garantida",
      description: "Produtos certificados com garantia de fábrica e suporte técnico especializado."
    }
  ];

  return (
    <section id="beneficios" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Por que escolher a Hub-C?
            </h2>
            <p className="lead text-muted">
              Oferecemos a melhor combinação de preço, qualidade e agilidade no mercado de painéis solares.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4">
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
