'use client';

import { ModulosIcon, InversoresIcon, EstruturasIcon, CabosIcon, EVChargersIcon } from './ProductIcons';

const ProductsSection = () => {
  const products = [
    {
      title: "Módulos",
      icon: ModulosIcon,
      link: "#modulos",
    },
    {
      title: "Inversores", 
      icon: InversoresIcon,
      link: "#contato",
    },
    {
      title: "Estruturas",
      icon: EstruturasIcon,
      link: "#contato",
    },
    {
      title: "Cabos",
      icon: CabosIcon,
      link: "#contato",
    },
    {
      title: "EV Chargers",
      icon: EVChargersIcon,
      link: "#contato",
    }
  ];

  return (
    <section id="produtos" className="products-section py-5 bg-white">
      <div className="container">
        {/* <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              Nossos Produtos
            </h2>
            <p className="lead text-muted">
              Oferecemos uma linha completa de produtos para energia solar com qualidade superior e preços competitivos.
            </p>
          </div>
        </div> */}
        
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="products-grid-section">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <a
                    key={index} 
                    href={product.link}
                    className="product-item-section"
                    onClick={(e) => {
                      if (product.link.startsWith('#')) {
                        e.preventDefault();
                        const targetId = product.link.substring(1);
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <div className="product-icon-section">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="product-title-section">{product.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
