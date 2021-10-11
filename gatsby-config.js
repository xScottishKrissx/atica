module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Atica",
    description: "Welcome to the home of furniture",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/cards/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
