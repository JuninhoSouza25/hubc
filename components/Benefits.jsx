const Benefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Preço Competitivo",
      description: "Importação direta da China com os melhores preços do mercado, sem intermediários."
    },
    {
      icon: "🚚",
      title: "Entrega Rápida",
      description: "Estoque estratégico no Brasil garante entregas em até 5 dias úteis."
    },
    {
      icon: "✅",
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
                  <div className="benefit-icon fs-1 mb-3">
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
