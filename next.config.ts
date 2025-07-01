import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'example.com', // Replace with your actual hostname
      //   port: '',
      //   pathname: '/images/**', // Adjust the pathname as needed
      // },
    ],
  }
};

export default nextConfig;
