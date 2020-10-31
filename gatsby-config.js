const path = require("path")

module.exports = {
  siteMetadata: {
    title: `gatsby-markdown-boilerplate`,
    description: `Gatsby Markdown Filesystem Boilerplate`,
    author: `@mohsenshafiei`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpts: {
          snippet: {
            type: "html",
            nodeTypeSourceSet: {
              MarkdownRemark: "markdownHtml",
            },
          },
        },
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          "fonts" /* Matches Gatsby default rules for fonts */,
          "images" /* Matches Gatsby default rules for images */,
          "media" /* Matches Gatsby default rules for media (video/audio) */,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, "src/static/images"),
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Grotters, Cocogoose, Lora"],
          urls: [path.resolve(__dirname, "src/styles/utils/fonts.module.scss")],
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@styles": path.resolve(__dirname, "src/styles/index.scss"),
        },
        extensions: ["sass"],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
