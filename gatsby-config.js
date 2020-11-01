const path = require("path")

module.exports = {
  siteMetadata: {
    title: "gatsby-markdown-boilerplate",
    description: "Gatsby Markdown Filesystem Boilerplate",
    author: "@mohsenshafiei",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-transformer-remark",
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
      resolve: "gatsby-plugin-force-file-loader",
      options: {
        rules: [
          "fonts" /* Matches Gatsby default rules for fonts */,
          "images" /* Matches Gatsby default rules for images */,
          "media" /* Matches Gatsby default rules for media (video/audio) */,
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
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
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@styles": path.resolve(__dirname, "src/styles/index.scss"),
        },
        extensions: ["sass"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Mohsen Shafiei",
        defaultSiteImage: "src/static/fav/fav.png",
        siteUrl: "https://mohsenshafiei.com",
        twitterCreator: "@_mosen_",
        twitterSite: "@_mosen_",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Mohsen Shafiei",
        short_name: "mohsenshafiei.com",
        description:
          "I'm Mohsen Shafiei. I am a frontend engineer and I live in Singapore.",
        lang: "en",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/static/fav/fav.png",
        // icons: [
        //   {
        //     src: "src/static/fav/apple-icon-114x114.png",
        //     sizes: "114x14",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-120x120.png",
        //     sizes: "120x120",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-144x144.png",
        //     sizes: "144x144",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-152x152.png",
        //     sizes: "152x152",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-180x180.png",
        //     sizes: "180x180",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-57x57.png",
        //     sizes: "57x57",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-60x60.png",
        //     sizes: "60x60",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-72x72.png",
        //     sizes: "72x72",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-76x76.png",
        //     sizes: "76x76",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon-precomposed.png",
        //     sizes: "76x76",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/apple-icon.png",
        //     sizes: "76x76",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/favicon-16x16.png",
        //     sizes: "16x16",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/favicon-96x96.png",
        //     sizes: "96x96",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/ms-icon-144x144.png",
        //     sizes: "144x144",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/ms-icon-150x150.png",
        //     sizes: "150x150",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/ms-icon-310x310.png",
        //     sizes: "310x310",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/ms-icon-70x70.png",
        //     sizes: "70x760",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-144x144.png",
        //     sizes: "144x144",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-36x36.png",
        //     sizes: "36x36",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-48x48.png",
        //     sizes: "48x48",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-72x72.png",
        //     sizes: "72x72",
        //     type: "image/png",
        //   },
        //   {
        //     src: "src/static/fav/android-icon-96x96.png",
        //     sizes: "96x96",
        //     type: "image/png",
        //   },
        // ],
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        appendScript: require.resolve("./src/services/main.js"),
      },
    },
  ],
}
