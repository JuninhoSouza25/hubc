'use client';

import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Função para forçar scroll para o topo
    const scrollToTop = () => {
      if (typeof window !== 'undefined') {
        // Múltiplas tentativas para garantir que funcione
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    // Executa imediatamente
    scrollToTop();

    // Executa quando o DOM estiver carregado
    if (document.readyState === 'loading') {
      const handleDOMContentLoaded = () => {
        scrollToTop();
      };
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      
      // Cleanup para DOMContentLoaded
      return () => {
        document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      };
    }

    // Executa quando a página estiver completamente carregada
    const handleLoad = () => {
      scrollToTop();
    };

    if (document.readyState === 'complete') {
      scrollToTop();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Executa com um pequeno delay para garantir
    const timeoutId = setTimeout(() => {
      scrollToTop();
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return null; // Este componente não renderiza nada
};

export default ScrollToTop;
