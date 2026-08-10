import type { APIRoute } from "astro";
import { projects } from "@data/projects";

const siteUrl = "https://roy-buhay.github.io";
const staticPaths = ["/", "/about/", "/projects/", "/contact/"];

const urls = [
  ...staticPaths,
  ...projects.map(({ title }) => `/projects/${title}/`),
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
