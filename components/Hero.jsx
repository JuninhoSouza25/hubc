'use client';

import { scrollToElement } from '../utils/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/carrossel/carrossel.png',
  // '/carrossel/carrossel-1.png',
  '/carrossel/carrossel-2.png',
  // '/carrossel/carrossel-3.png',
  // '/carrossel/carrossel-4.png',
  // '/carrossel/carrossel-5.png'
];

const Hero = () => {
  const scrollToContact = () => {
    scrollToElement('contato');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mx-auto">
            <div className="hero-content">
              <h1 className="hero-title display-3 fw-bold mb-4">
                Preço da China <br /> Estoque no Brasil
              </h1>
              <p className="hero-description lead mb-5 fs-6">
                Preço de fabricante, com retirada ou entrega imediata.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary-1 btn-lg px-5 py-3 me-3 mb-3"
                  onClick={scrollToContact}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="hero-image mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={false}
                pagination={false}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={1}
              >
                {images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={src} alt={`Hero ${idx + 1}`} className="img-fluid" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-geometric"></div>
    </section>
  );
};

export default Hero;
