const About = () => {
  return (
    <section id="sobre" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content">
              <h2 className="display-5 fw-bold mb-4 text-dark">
                Sobre a Hub-C
              </h2>
              <p className="lead mb-4 text-muted">
                A Hub-C é uma empresa especializada no comércio atacado de módulos de energia solar, 
                conectando a qualidade e o preço competitivo dos produtos chineses com a agilidade 
                de entrega do mercado brasileiro.
              </p>
              <p className="mb-4 text-muted">
                Nossa missão é democratizar o acesso à energia solar no Brasil, oferecendo produtos 
                de alta qualidade com preços justos e logística eficiente. Trabalhamos diretamente 
                com fabricantes chineses renomados e mantemos estoque estratégico no Brasil.
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="stat-item text-center">
                    <h3 className="display-6 fw-bold text-primary">500+</h3>
                    <p className="mb-0 text-muted">Projetos Atendidos</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="stat-item text-center">
                    <h3 className="display-6 fw-bold text-primary">98%</h3>
                    <p className="mb-0 text-muted">Satisfação dos Clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
              <div className="about-image-container rounded">
                <img 
                  src="/container-painel.png" 
                  alt="Contêiner com painéis solares" 
                  className="img-fluid w-100"
                  style={{ objectFit: 'cover', height: '100%', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
