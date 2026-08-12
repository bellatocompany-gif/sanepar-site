import Link from "next/link";

export const metadata = {
  title: "Sanepar | Serviços, Segunda Via e Fatura",
  description:
    "Informações sobre serviços da Sanepar, segunda via, fatura e canais oficiais de atendimento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sanepar | Serviços, Segunda Via e Fatura",
    description:
      "Informações sobre serviços da Sanepar, segunda via, fatura e canais oficiais de atendimento.",
    type: "website",
    locale: "pt_BR",
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
            fatura e os principais canais oficiais de atendimento.
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
          <div className="card">
            <h2>Sanepar</h2>

            <p>
              Informações gerais e acesso aos principais canais oficiais da
              Sanepar.
            </p>

            <Link className="btn" href="/sanepar">
              Ver página
            </Link>
          </div>

          <div className="card">
            <h2>Sanepar Segunda Via</h2>

            <p>
              Veja como localizar a segunda via da conta pelos canais oficiais
              da Sanepar.
            </p>

            <Link className="btn" href="/sanepar-segunda-via">
              Ver página
            </Link>
          </div>

          <div className="card">
            <h2>Sanepar Fatura</h2>

            <p>
              Informações sobre fatura, pagamento e serviços digitais da
              Sanepar.
            </p>

            <Link className="btn" href="/sanepar-fatura">
              Ver página
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
