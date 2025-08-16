/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      formats: ['image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
        },
      ],
    },
    // Supressão de avisos de hidratação causados por extensões do navegador
    experimental: {
      suppressHydrationWarning: true,
    },
    // Configuração adicional para lidar com diferenças de SSR/Cliente
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    }
  };
  
  export default nextConfig;