'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    cnpj: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Formatação específica para CNPJ
    if (name === 'cnpj') {
      // Remove todos os caracteres não numéricos
      const numericValue = value.replace(/\D/g, '');
      
      // Aplica a máscara do CNPJ
      let formattedValue = numericValue;
      if (numericValue.length > 2) {
        formattedValue = numericValue.replace(/^(\d{2})(\d)/, '$1.$2');
      }
      if (numericValue.length > 5) {
        formattedValue = formattedValue.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
      }
      if (numericValue.length > 8) {
        formattedValue = formattedValue.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4');
      }
      if (numericValue.length > 12) {
        formattedValue = formattedValue.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);
    setShowSuccess(false);
    
    // Verificar se as variáveis de ambiente estão configuradas
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS não configurado. Verifique as variáveis de ambiente.');
      setShowError(true);
      setIsSubmitting(false);
      return;
    }

    console.log('Configurações EmailJS:', {
      serviceId,
      templateId: templateId.substring(0, 10) + '...',
      publicKey: publicKey.substring(0, 10) + '...'
    });

    try {
      const templateParams = {
        from_name: formData.name,
        company_name: formData.companyName,
        cnpj: formData.cnpj,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Hub-C',
        reply_to: formData.email,
      };

      console.log('Enviando email com parâmetros:', templateParams);

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email enviado com sucesso!', result.status, result.text);
      setShowSuccess(true);
      setFormData({ name: '', companyName: '', cnpj: '', phone: '', email: '', message: '' });
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      
      // Mensagem de erro específica baseada no tipo de erro
      if (error.status === 400) {
        console.error('Erro 400: Verifique se o Template ID está correto no EmailJS Dashboard');
      } else if (error.status === 401) {
        console.error('Erro 401: Verifique se a Public Key está correta');
      } else if (error.status === 404) {
        console.error('Erro 404: Verifique se o Service ID está correto');
      }
      
      setShowError(true);
      
      // Esconder mensagem de erro após 8 segundos
      setTimeout(() => setShowError(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
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
                <strong>✅ Sucesso!</strong> Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowSuccess(false)}
                  aria-label="Close"
                ></button>
              </div>
            )}

            {showError && (
              <div className="alert alert-danger alert-dismissible fade show mb-4" role="alert">
                <strong>❌ Erro!</strong> Ocorreu um erro ao enviar sua mensagem. 
                <br />
                <small>
                  Por favor, verifique a configuração do EmailJS ou entre em contato diretamente pelo telefone/email.
                </small>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowError(false)}
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
                    Telefone / Whatsapp *
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
                
                <div className="col-md-6">
                  <label htmlFor="companyName" className="form-label fw-semibold">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Nome da sua empresa"
                  />
                </div>
                
                <div className="col-md-6">
                  <label htmlFor="cnpj" className="form-label fw-semibold">
                    CNPJ
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="cnpj"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    placeholder="00.000.000/0000-00"
                    maxLength="18"
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
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" className="text-icon-accent">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="mb-0">contato@hub-c.com.br</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-icon mb-3">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" className="text-icon-accent">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <h5 className="fw-bold">Telefone</h5>
                  <p className="mb-0">(11) 9999-9999</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="contact-icon mb-3">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24" className="text-icon-accent">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
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
