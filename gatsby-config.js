const breakpoints = {
  sm: '(max-width: 700px)',
  md: '(max-width: 1232px)',
  l: '(min-width: 1233px)'
}

module.exports = {
  siteMetadata: {
    title: `The Tiny Beet`,
    description: `Using Lifestyle Medicine to nuture a better life for your children and family.`,
    author: `Dr. Yolanda Rivera-Caudill`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-breakpoints`,
      options: {
        queries: breakpoints
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Tenor Sans',
            },
            {
              family: 'Montserrat',
              variants: ['400', '600'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/beet.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
