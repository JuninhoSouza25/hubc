const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "Solar Tech Brasil",
      text: "A Hub-C revolucionou nossa operação. Conseguimos reduzir custos em 30% mantendo a qualidade dos produtos. Entrega sempre pontual!",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Energia Verde Ltda",
      text: "Parceria excepcional! O estoque no Brasil faz toda diferença na agilidade dos nossos projetos. Recomendo a todos do setor.",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      company: "SunPower Distribuidora",
      text: "Preços imbatíveis e suporte técnico de primeira. A Hub-C é nossa fornecedora principal há mais de 2 anos.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "text-warning" : "text-muted"}>
        ★
      </span>
    ));
  };

  return (
    <section id="depoimentos" className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="lead text-muted">
              Confiança construída através de resultados consistentes e relacionamentos duradouros.
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div className="testimonial-card h-100 p-4 bg-white rounded shadow-sm">
                <div className="mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="mb-4">
                  <p className="text-muted fst-italic">
                    "{testimonial.text}"
                  </p>
                </blockquote>
                <div className="testimonial-author">
                  <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                  <small className="text-muted">{testimonial.company}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-6 mx-auto text-center">
            <div className="cta-box p-4 bg-dark-accent text-white rounded">
              <h4 className="fw-bold mb-3">Junte-se aos nossos clientes satisfeitos</h4>
              <p className="mb-3">
                Faça parte da nossa rede de parceiros e transforme seu negócio com nossas soluções.
              </p>
              <button 
                className="btn btn-light btn-lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
