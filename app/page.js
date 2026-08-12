import Link from "next/link";

export const metadata = {
  title: "Sanepar | Segunda Via, Fatura e Serviços",
  description:
    "Encontre informações sobre a Sanepar, segunda via, fatura, pagamento e acesso aos canais oficiais de atendimento.",
  keywords: [
    "Sanepar",
    "Sanepar segunda via",
    "segunda via Sanepar",
    "Sanepar fatura",
    "fatura Sanepar",
    "conta Sanepar",
    "serviços Sanepar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanepar | Segunda Via, Fatura e Serviços",
    description:
      "Informações sobre segunda via, fatura, pagamento e canais oficiais da Sanepar.",
    url: "https://sanepar-site.vercel.app/",
    siteName: "Sanepar",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Sanepar</h1>

          <p>
            Encontre informações sobre serviços da Sanepar, segunda via,
            fatura, pagamento e os principais canais oficiais de atendimento.
          </p>

          <a
            className="btn"
            href="https://www.sanepar.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar site oficial
          </a>
        </div>
      </section>

      <section className="content container">
        <h2>Encontre o que você precisa</h2>

        <div className="card-grid">
          <article className="card">
            <h2>Sanepar</h2>

            <p>
              Informações gerais, serviços e acesso aos principais canais
              oficiais da Sanepar.
            </p>

            <Link className="btn" href="/sanepar">
              Ver página
            </Link>
          </article>

          <article className="card">
            <h2>Sanepar Segunda Via</h2>

            <p>
              Veja como localizar a segunda via da conta pelos canais oficiais
              da Sanepar.
            </p>

            <Link className="btn" href="/sanepar-segunda-via">
              Ver página
            </Link>
          </article>

          <article className="card">
            <h2>Sanepar Fatura</h2>

            <p>
              Informações sobre fatura, pagamento e serviços digitais da
              Sanepar.
            </p>

            <Link className="btn" href="/sanepar-fatura">
              Ver página
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
