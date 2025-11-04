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

export const BatteryIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* corpo da bateria */}
    <rect
      x="1.5"
      y="6"
      width="17"
      height="12"
      rx="2.2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      opacity="0.06"
    />
    {/* terminal positivo */}
    <rect
      x="19.5"
      y="9.5"
      width="2"
      height="5"
      rx="0.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="currentColor"
      opacity="0.9"
    />

    {/* indicador de carga — divisões */}
    <rect x="3.5" y="8.2" width="3" height="7.6" rx="0.6" fill="currentColor" opacity="0.5" />
    <rect x="7.5" y="8.2" width="3" height="7.6" rx="0.6" fill="currentColor" opacity="0.35" />
    <rect x="11.5" y="8.2" width="3" height="7.6" rx="0.6" fill="currentColor" opacity="0.2" />

    {/* contornos internos finos para estilizar */}
    <path d="M3.5 8.2v7.6" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.15" />
    <path d="M7.5 8.2v7.6" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.12" />
    <path d="M11.5 8.2v7.6" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.1" />

    {/* símbolo de raio (carga) centralizado sobre os blocos */}
    <path
      d="M9.2 9.6 L7.9 12.0 L9.8 12.0 L8.9 14.4 L11.0 11.0 L9.2 11.0 Z"
      fill="currentColor"
      opacity="0.95"
      transform="translate(0.8,0.2) scale(0.9)"
    />

    {/* traço externo mais forte */}
    <rect
      x="1.5"
      y="6"
      width="17"
      height="12"
      rx="2.2"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      opacity="0.9"
    />
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
