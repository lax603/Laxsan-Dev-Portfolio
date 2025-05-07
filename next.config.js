/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Disable cache in development to prevent file system issues
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig