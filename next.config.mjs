/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/facebook',
        destination:
          'https://www.facebook.com/share/dFAS9f6BVQhMf6s1/?mibextid=qi2Omg',
        permanent: true,
      },
      {
        source: '/instagram',
        destination:
          'https://www.instagram.com/bsi_usa?igsh=MTQ3cjR6c3Y2dDNyZw==',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/company/bsi-usa/',
        permanent: true,
      },
      {
        source: '/youtube',
        destination:
          'https://www.facebook.com/share/dFAS9f6BVQhMf6s1/?mibextid=qi2Omg',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
}

export default nextConfig
