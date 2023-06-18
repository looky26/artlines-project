/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        externalDir: true,
        esmExternals:'loose',
      },
}

module.exports = nextConfig
