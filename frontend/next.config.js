/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['localhost', 'https://www.themoviedb.org', 'www.themoviedb.org']
  },

  env: {
    //{process.env.dbPath}
    dbPath: 'mysql'
  }
};
