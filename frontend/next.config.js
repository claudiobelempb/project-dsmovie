/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  distDir: 'frontend',

  async redirects() {
    return [
      {
        source: '/valuation/:id',
        destination: '/',
        permanent: false
      }
    ];
  },

  images: {
    domains: ['localhost', 'https://www.themoviedb.org', 'www.themoviedb.org']
  },

  env: {
    //{process.env.dbPath}
    dbPath: 'mysql'
  }
};
