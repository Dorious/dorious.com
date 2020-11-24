module.exports = {
  siteMetadata: {
    title: `dorious.com, web, mobile, photography`,
    description: `Hi! My name is Dariusz Arciszewski... and I do web/mobile apps from scratch, web sites, web consultancy, front-end engineering, software engineering, headshot photography, portraits, retouching... you name it :)`,
    author: `@darius.arc`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dorious-com`,
        short_name: `dorious`,
        start_url: `/`,
        background_color: `#1d1d1d`,
        theme_color: `#1d1d1d`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-8295657-9",
      },
    },
  ],
}
