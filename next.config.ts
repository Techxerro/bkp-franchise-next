// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */  
//   output: 'export',
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
 



/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.1.22'], // ← add this
};

module.exports = nextConfig;
