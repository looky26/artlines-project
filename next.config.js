/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        externalDir: true,
        esmExternals:'loose',
        serverActions: true,
      },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    },
    
  
}

module.exports = nextConfig
