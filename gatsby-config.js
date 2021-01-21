/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Raw Muscle",
    description: "Australia's Best Touring Male Strippers",
    author: "Edward Baldacchino",
    twitterUsername: "@john_doe",
    image: "/twitter-img.png",
    siteUrl: "https://rawmuscle.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [ 
            { family: "Open Sans" },
            { family: "Josefin Sans"}
          ],
        },
      },
    },
  ],
}
