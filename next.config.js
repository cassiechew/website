/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/github', destination: 'https://github.com/ryanchew3', permanent: true },
      { source: '/blog', destination: 'https://cassie.id', permanent: true },
    ]
  },
  reactStrictMode: true,
}
