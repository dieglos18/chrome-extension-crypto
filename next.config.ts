/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out', // La carpeta donde se generarán los archivos estáticos
  trailingSlash: true, // Opcional: asegura que las rutas terminen en una barra diagonal
};

export default nextConfig;
