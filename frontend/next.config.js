/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['localhost', 'www.themoviedb.org']
  },

  env: {
    //{process.env.dbPath}
    dbPath: 'mysql'
  }
};
