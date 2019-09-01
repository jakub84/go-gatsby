
const config = require("./data/SiteConfig");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-lodash",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "assets",
    //     path: `${__dirname}/static/`
    //   }
    // },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `/assets/`
          }
      }
  },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    "gatsby-plugin-sharp",
   
  ]
};
