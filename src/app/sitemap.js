export default function sitemap() {
  const baseUrl = "https://www.unigrow.ca";

  const pages = [
    "", // Home
    "book-free-consultation",
    "case-studies",
    "cookies",
    "pricing",
    "why-unigrow",
    "services/ecommerce",
    "services/portfolio-creation",
    "services/seo",
    "services/website-development",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
    priority: page === "" ? 1.0 : 0.8, // Home page gets higher priority
    changeFrequency: "weekly",
  }));
}
