module.exports = {
  siteMetadata: {
    siteUrl: 'http://www.joshmayo.co.uk',
    title: 'Portfolio site',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        // isTSX: true, // defaults to false
        // jsxPragma: 'jsx', // defaults to "React"
        // allExtensions: true, // defaults to false
      },
    },
  ],
};
