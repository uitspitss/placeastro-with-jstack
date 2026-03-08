/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeastro-r2.imgix.net',
        // port: '',
        // pathname: '',
        // search: '',
      },
    ],

  },
}

export default nextConfig
