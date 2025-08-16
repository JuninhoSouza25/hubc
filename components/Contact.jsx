'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Entre em Contato
            </h2>
            <p className="lead">
              Pronto para começar seu projeto de energia solar? Solicite um orçamento personalizado.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {showSuccess && (
              <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
                <strong>Sucesso!</strong> Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowSuccess(false)}
                  aria-label="Close"
                ></button>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="bg-white text-dark rounded p-4 shadow">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nome *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label fw-semibold">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div className="col-12">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Mensagem *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Conte-nos sobre seu projeto, quantidade de painéis necessários, localização, etc."
                  ></textarea>
                </div>
                
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary-1 btn-lg w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-icon mb-3">
                    📧
                  </div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="mb-0">contato@hub-c.com.br</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-icon mb-3">
                    📱
                  </div>
                  <h5 className="fw-bold">Telefone</h5>
                  <p className="mb-0">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-icon mb-3">
                    📍
                  </div>
                  <h5 className="fw-bold">Endereço</h5>
                  <p className="mb-0">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
