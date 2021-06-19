module.exports = {
  reactStrictMode: true,
  images : {
    domains : ['www.ptm.ro']
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}
