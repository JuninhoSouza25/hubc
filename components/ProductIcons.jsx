// Ícones SVG customizados para produtos seguindo a paleta monocromática
export const ModulosIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="5" y="5" width="6" height="6" fill="currentColor" opacity="0.7"/>
    <rect x="13" y="5" width="6" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="5" y="13" width="6" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="13" y="13" width="6" height="6" fill="currentColor" opacity="0.7"/>
    <path d="M2 12h20M12 2v20" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);

export const InversoresIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="6" y="9" width="3" height="6" fill="currentColor" opacity="0.7"/>
    <rect x="10.5" y="9" width="3" height="6" fill="currentColor" opacity="0.5"/>
    <rect x="15" y="9" width="3" height="6" fill="currentColor" opacity="0.7"/>
    <circle cx="6" cy="4" r="1" fill="currentColor"/>
    <circle cx="12" cy="4" r="1" fill="currentColor"/>
    <circle cx="18" cy="4" r="1" fill="currentColor"/>
    <path d="M7.5 4v2M12 4v2M16.5 4v2" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const EstruturasIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V8l8-6 8 6v12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 12h8v8H8z" fill="currentColor" opacity="0.3"/>
    <path d="M10 12v8M14 12v8M8 16h8" stroke="currentColor" strokeWidth="1"/>
    <rect x="11" y="6" width="2" height="3" fill="currentColor" opacity="0.7"/>
    <circle cx="10" cy="18" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="18" r="0.5" fill="currentColor"/>
  </svg>
);

export const CabosIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M13 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.5"/>
    <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M5 10v4M7 8v8M17 8v8M19 10v4" stroke="currentColor" strokeWidth="1"/>
    <circle cx="7" cy="12" r="1" fill="currentColor"/>
    <circle cx="17" cy="12" r="1" fill="currentColor"/>
  </svg>
);

export const EVChargersIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
    <rect x="6" y="8" width="8" height="3" rx="1" fill="currentColor" opacity="0.6"/>
    <path d="M17 8h2a1 1 0 011 1v6a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="12" r="1" fill="currentColor"/>
    <path d="M9 13l2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="18" width="4" height="2" rx="1" fill="currentColor" opacity="0.7"/>
    <path d="M6 20h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
