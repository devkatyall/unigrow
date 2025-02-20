import * as cheerio from "cheerio";

export const metadata = {
  robots: "noindex, nofollow",
};

export default async function page() {
  const content = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/211282718/posts"
  );
  const data = await content.json();

  return (
    <div>
      {data?.posts.map((item) => {
        const $ = cheerio.load(item.content);
        const mainTitle = $("h1").first().text(); // First <h1>
        const subTitle = $("h2").eq(0).text(); // Second <h2> (index 1)
        const mainParagraph = $("p").first().text(); // First <p>
        return (
          <div key={item.id}>
            <section className="header">
              <h1>{mainTitle}</h1>
            </section>
            <section className="subheader">
              <h2>{subTitle}</h2>
            </section>
            <section className="content">
              <p>{mainParagraph}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
}
