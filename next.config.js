/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        externalDir: true,
        esmExternals:'loose',
      },
    env: {
      stripe_public_key: process.env.STRIPE_PUBLIC_KEY
    },
    async serverRuntimeConfig() {
      return {
        // Increase the timeout to a higher value, e.g., 60 seconds
        serverTimeout: 60000,
      };
    },
}

module.exports = nextConfig
