module.exports = {
  siteMetadata: {
    title: `Dark Mode (minimal example)`,
    description: `SSR-compatible flicker-free dark-mode in GatsbyJS`,
    author: `Janosh Riebesell`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
      },
    },
  ],
}
