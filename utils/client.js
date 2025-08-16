// Utilitários para lidar com diferenças SSR/Client
export const isClient = typeof window !== 'undefined';

export const safeClientExecution = (callback) => {
  if (isClient) {
    try {
      return callback();
    } catch (error) {
      console.warn('Client-side execution error:', error);
      return null;
    }
  }
  return null;
};

export const scrollToElement = (elementId) => {
  safeClientExecution(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

export const scrollToTop = () => {
  safeClientExecution(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};
