export default function sitemap() {
  const base = "https://SEU-DOMINIO.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/sanepar`, lastModified: new Date() },
    { url: `${base}/sanepar-segunda-via`, lastModified: new Date() },
    { url: `${base}/sanepar-fatura`, lastModified: new Date() }
  ];
}