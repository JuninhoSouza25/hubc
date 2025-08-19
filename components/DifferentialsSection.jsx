'use client';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: (
        <div className="number-icon">
          <span>01</span>
        </div>
      ),
      title: "Estoque no Brasil",
      description: "Sem espera por importação. Containers em estoque nacional."
    },
    {
      icon: (
        <div className="number-icon">
          <span>02</span>
        </div>
      ),
      title: "Pagamento Nacionalizado",
      description: "Pagamento em R$, sem IOF, câmbio ou burocracias internacionais."
    },
    {
      icon: (
        <div className="number-icon">
          <span>03</span>
        </div>
      ),
      title: "Retirada Imediata",
      description: "Retire hoje mesmo em nossos CD's regionalizados."
    }
  ];

  return (
    <section id="diferenciais" className="differentials-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              Para quem Lidera, Inova e Escala
            </h2>
            <p className="lead text-muted fs-5">
              Inteligência comercial, tecnologia e escala para quem lidera o setor.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {differentials.map((differential, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="differential-card h-100 p-4 bg-white rounded shadow-sm border">
                <div className="text-center mb-4">
                  <div className="differential-icon mb-3 d-flex justify-content-center">
                    {differential.icon}
                  </div>
                  <h4 className="fw-bold mb-3 text-dark">{differential.title}</h4>
                </div>
                <p className="text-muted text-center mb-0">
                  {differential.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
