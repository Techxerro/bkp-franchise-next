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
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
