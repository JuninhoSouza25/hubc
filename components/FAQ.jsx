'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Qual é o prazo de entrega dos módulos solares?",
      answer: "Produtos disponíveis para retirada imediata. Para entregas, o prazo varia conforme o endereço de destino, mas em média é de até 5 dias úteis para a maioria das regiões."
    },
    {
      question: "Os painéis possuem garantia?",
      answer: "Sim! Todos os nossos módulos solares possuem garantia de fábrica de 10 a 25 anos, dependendo do modelo. Também oferecemos suporte técnico completo durante todo o período."
    },
    {
      question: "Posso comprar menos de 1 container?",
      answer: "Atendemos pedidos a partir de 1 container. No entanto, caso sua demanda seja menor, podemos direcioná-lo a parceiros comerciais que atendem volumes reduzidos."
    },
    {
      question: "Vocês oferecem suporte na instalação?",
      answer: "Podemos indicar parceiros especializados para apoiar na instalação. A HUB|C atua exclusivamente na venda de módulos solares e não realiza serviços de instalação diretamente."
    },
    {
      question: "Como funciona o processo de importação?",
      answer: "Os produtos estão disponíveis para retirada imediata, com pagamento em real (R$), sem burocracia, IOF ou longos prazos de espera. O processo de importação já foi realizado por nós."
    },
    {
      question: "A HUB|C tem outros produtos além de módulos?",
      answer: "Sim. Nossa linha é ampla e inclui inversores, carregadores, estruturas e muito mais. Além disso, atuamos em outras linhas de negócio além do setor solar. Apresente sua demanda e teremos prazer em avaliá-la."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Perguntas Frequentes
            </h2>
            <p className="lead text-muted">
              Tire suas dúvidas sobre nossos produtos e serviços.
            </p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqItems.map((item, index) => (
                <div key={index} className="accordion-item border-0 mb-3 shadow-sm">
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button ${openIndex === index ? '' : 'collapsed'} fw-semibold`}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openIndex === index}
                    >
                      {item.question}
                    </button>
                  </h3>
                  <div
                    className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                  >
                    <div className="accordion-body text-muted">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="bg-light p-4 rounded">
              <h4 className="fw-bold mb-3">Ainda tem dúvidas?</h4>
              <p className="text-muted mb-3">
                Nossa equipe de especialistas está pronta para ajudar você com qualquer questão.
              </p>
              <button 
                className="btn btn-primary-1 btn-lg"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
