'use client';

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2ZM4 10H20V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V10ZM6 12V20H18V12H6ZM8 14H16V16H8V14ZM8 17H13V18H8V17Z"/>
        </svg>
      ),
      title: "Estoque no Brasil",
      description: "Sem espera por importação. Containers em estoque nacional."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V8H20V18ZM4 6V8H20V6H4ZM6 10V12H8V10H6ZM10 10V12H18V10H10ZM6 14V16H10V14H6Z"/>
        </svg>
      ),
      title: "Pagamento Nacionalizado",
      description: "Pagamento em R$, sem IOF, câmbio ou burocracias internacionais."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22S5 14.25 5 9C5 5.13 8.13 2 12 2ZM12 6C10.34 6 9 7.34 9 9S10.34 12 12 12 15 10.66 15 9 13.66 6 12 6Z"/>
        </svg>
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
