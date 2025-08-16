const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-brand">
              <h4 className="fw-bold mb-3">Hub-C</h4>
              <p className="text-muted mb-4">
                Sua parceira confiável no comércio atacado de módulos de energia solar. 
                Preço da China, estoque no Brasil.
              </p>
              <div className="social-links">
                <a href="#" className="text-icon-accent me-3" aria-label="LinkedIn">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-icon-accent me-3" aria-label="WhatsApp">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.488"/>
                  </svg>
                </a>
                <a href="#" className="text-icon-accent" aria-label="Instagram">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.204 4.955.388a5.426 5.426 0 0 0-1.962 1.277A5.426 5.426 0 0 0 1.716 3.62C1.532 4.144 1.41 4.758 1.376 5.705.341 6.653.328 7.06.328 10.681v2.638c0 3.621.013 4.028.048 4.976.034.947.156 1.561.34 2.085a5.426 5.426 0 0 0 1.277 1.962c.603.604 1.207.957 1.962 1.277.524.184 1.138.306 2.085.34.948.035 1.355.048 4.976.048h2.638c3.621 0 4.028-.013 4.976-.048.947-.034 1.561-.156 2.085-.34a5.426 5.426 0 0 0 1.962-1.277c.604-.603.957-1.207 1.277-1.962.184-.524.306-1.138.34-2.085.035-.948.048-1.355.048-4.976V10.681c0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.561-.34-2.085a5.426 5.426 0 0 0-1.277-1.962A5.426 5.426 0 0 0 19.36 1.38c-.524-.184-1.138-.306-2.085-.34C16.327.013 15.92 0 12.299 0h-.282zm-.14 2.181h.282c3.586 0 4.008.012 5.429.048.726.033 1.225.142 1.513.235.38.148.653.325.938.61.285.285.462.558.61.938.093.288.202.787.235 1.513.036 1.421.048 1.843.048 5.429s-.012 4.008-.048 5.429c-.033.726-.142 1.225-.235 1.513-.148.38-.325.653-.61.938-.285.285-.558.462-.938.61-.288.093-.787.202-1.513.235-1.421.036-1.843.048-5.429.048s-4.008-.012-5.429-.048c-.726-.033-1.225-.142-1.513-.235a2.53 2.53 0 0 1-.938-.61 2.53 2.53 0 0 1-.61-.938c-.093-.288-.202-.787-.235-1.513-.036-1.421-.048-1.843-.048-5.429s.012-4.008.048-5.429c.033-.726.142-1.225.235-1.513.148-.38.325-.653.61-.938.285-.285.558-.462.938-.61.288-.093.787-.202 1.513-.235 1.244-.036 1.725-.048 4.274-.048zm.14 3.693a6.126 6.126 0 1 0 0 12.252 6.126 6.126 0 0 0 0-12.252zm0 10.093a3.967 3.967 0 1 1 0-7.934 3.967 3.967 0 0 1 0 7.934zM16.248 5.67a1.434 1.434 0 1 0 2.868 0 1.434 1.434 0 0 0-2.868 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h5 className="fw-bold mb-3">Empresa</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#sobre" className="text-muted text-decoration-none hover-link">
                    Sobre Nós
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#beneficios" className="text-muted text-decoration-none hover-link">
                    Nossos Diferenciais
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#depoimentos" className="text-muted text-decoration-none hover-link">
                    Depoimentos
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contato" className="text-muted text-decoration-none hover-link">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <div className="footer-links">
              <h5 className="fw-bold mb-3">Produtos</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-muted">Painéis Monocristalinos</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Painéis Policristalinos</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Módulos Bifaciais</span>
                </li>
                <li className="mb-2">
                  <span className="text-muted">Inversores</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <div className="footer-contact">
              <h5 className="fw-bold mb-3">Contato</h5>
              <div className="contact-item mb-2">
                <small className="text-muted d-block">Email:</small>
                <a href="mailto:contato@hub-c.com.br" className="text-white text-decoration-none">
                  contato@hub-c.com.br
                </a>
              </div>
              <div className="contact-item mb-2">
                <small className="text-muted d-block">Telefone:</small>
                <a href="tel:+5511999999999" className="text-white text-decoration-none">
                  (11) 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © 2025 Hub-C. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">
              Desenvolvido com{' '}
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="text-icon-primary d-inline-block">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              {' '}para energia sustentável
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
