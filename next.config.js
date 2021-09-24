/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/github', destination: 'https://github.com/cassiechew', permanent: true },
      { source: '/blog', destination: 'https://blog.cassie.id', permanent: true },
    ]
  },
  reactStrictMode: true,
}
