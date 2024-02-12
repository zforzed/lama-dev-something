/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.*'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.*'
      },
    ]
  }
}

module.exports = nextConfig
