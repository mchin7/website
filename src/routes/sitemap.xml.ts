import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const website = "https://www.gitpod.io";
  const staticPages = Object.keys(
    import.meta.globEager("/src/routes/**/!(_)*.{svelte,md}")
  )
    .filter((page) => {
      const filters = ["/src/routes/index.svelte", "_", "slug]", "title]"];
      return !filters.find((filter) => page.includes(filter));
    })
    .map((page) => {
      return page
        .replace("/src/routes", "https://www.gitpod.io")
        .replace("/index.md", "/")
        .replace(".md", "/")
        .replace("/index.svelte", "/")
        .replace(".svelte", "/");
    });

  const sitemap = (staticPages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
<url> <loc>${website}/</loc></url>
${staticPages.map((page) => `<url><loc>${page}</loc></url>`).join("")}

</urlset>`;
  return {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
    body: sitemap(staticPages),
  };
};
