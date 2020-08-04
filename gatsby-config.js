module.exports = {
  siteMetadata: {
    title: `Autobudjetti`,
    description: `Paljonko autoilu oikeasti maksaa? Laske se autobudjetin avulla.`,
    author: `samu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `autobudjetti`,
        short_name: `autobudjetti`,
        start_url: `/`,
        background_color: ``,
        theme_color: ``,
        display: ``,
        icon: `icons/autobudjetti-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
