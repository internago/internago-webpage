module.exports = {
  siteMetadata: {
    title: `Internago - International Payroll, Local Experts`,
    author: {
      name: `Internago`,
      summary: `Official website of Internago, offering international payroll services and portal.`,
    },
    description: `Internago offers a international payroll system, which allows you to easily administrate pay for international employees from one online interface. Our experienced team of consultants have worked in various industries and with different challenges, and can take care of the time consuming and complex administrative tasks before, during and after you enter a new market.`,
    siteUrl: `https://internago.com`,
    social: {
      twitter: `@Interna_GO`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Internago Official Website`,
        short_name: `Internago`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0066AA`,
        display: `minimal-ui`,
        icon: `content/assets/internago-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-netlify-cms'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
