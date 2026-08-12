export default function sitemap() {
  const baseUrl = "https://sanepar-site.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sanepar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sanepar-segunda-via`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sanepar-fatura`,
      lastModified: new Date(),
    },
  ];
}
