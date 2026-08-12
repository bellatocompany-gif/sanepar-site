export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sanepar-site.vercel.app/sitemap.xml",
  };
}
