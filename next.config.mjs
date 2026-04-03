/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Enable React 19 features
    ppr: true
  },
  typescript: {
    // Enable strict mode for better type checking
    ignoreBuildErrors: false
  },
  eslint: {
    // Lint during builds
    ignoreDuringBuilds: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  // Environment variables that should be exposed to the client
  env: {
    NEXT_PUBLIC_APP_NAME: 'OverseeAI CMS Shell',
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version
  }
};

export default nextConfig;