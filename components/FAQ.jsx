'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Qual é o prazo de entrega dos módulos solares?",
      answer: "Com nosso estoque estratégico no Brasil, conseguimos entregar em até 5 dias úteis para a maioria das regiões. Para grandes volumes, o prazo pode ser de 7 a 10 dias úteis."
    },
    {
      question: "Os painéis possuem garantia?",
      answer: "Sim! Todos os nossos módulos solares possuem garantia de fábrica de 10 a 25 anos, dependendo do modelo. Também oferecemos suporte técnico completo durante todo o período."
    },
    {
      question: "Posso comprar menos de 1 container?",
      answer: "Absolutamente! Trabalhamos tanto com grandes volumes quanto com pedidos menores. Nosso estoque no Brasil permite flexibilidade para atender projetos de todos os tamanhos."
    },
    {
      question: "Vocês oferecem suporte na instalação?",
      answer: "Fornecemos suporte técnico completo, incluindo documentação, especificações e orientações para instalação. Também temos uma rede de parceiros instaladores certificados."
    },
    {
      question: "Como funciona o processo de importação?",
      answer: "Nossa equipe cuida de todo o processo de importação, incluindo documentação, desembaraço alfandegário e logística. Você recebe o produto pronto para uso."
    },
    {
      question: "Quais certificações os produtos possuem?",
      answer: "Todos os nossos produtos possuem certificações internacionais como IEC, CE e também são homologados pelo INMETRO para uso no Brasil."
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
                className="btn btn-primary btn-lg"
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
