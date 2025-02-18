/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.unigrow.ca", // Replace with your domain
  generateRobotsTxt: true, // Generates robots.txt file
  sitemapSize: 5000, // Limits number of URLs per sitemap
  exclude: ["/admin", "/dashboard"], // Exclude pages from the sitemap
  generateIndexSitemap: false,
};
