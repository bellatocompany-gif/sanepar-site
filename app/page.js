import Link from "next/link";

export const metadata = {
  title: "Sanepar",
  description:
    "Informações sobre a Sanepar, serviços, segunda via e fatura. Encontre orientações e acesse os canais oficiais da companhia.",
  alternates: {
    canonical: "/sanepar",
  },
};

export default function SaneparPage() {
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
        <h2>Informações sobre a Sanepar</h2>

        <p>
          A Sanepar oferece canais digitais para consulta de serviços,
          atendimento, pagamentos, faturas e outros assuntos relacionados ao
          abastecimento de água e ao saneamento.
        </p>

        <p>
          Para consultar informações diretamente nos canais oficiais, utilize
          o site da Sanepar e os serviços disponibilizados pela companhia.
        </p>

        <div className="card-grid">
          <article className="card">
            <h2>Sanepar Segunda Via</h2>

            <p>
              Saiba onde encontrar informações sobre a segunda via da conta
              pelos canais oficiais da Sanepar.
            </p>

            <Link className="btn" href="/sanepar-segunda-via">
              Sanepar Segunda Via
            </Link>
          </article>

          <article className="card">
            <h2>Sanepar Fatura</h2>

            <p>
              Consulte informações sobre fatura, pagamento e serviços digitais
              relacionados à conta da Sanepar.
            </p>

            <Link className="btn" href="/sanepar-fatura">
              Sanepar Fatura
            </Link>
          </article>
        </div>

        <div className="content-links">
          <h2>Canais oficiais</h2>

          <ul>
            <li>
              <a
                href="https://www.sanepar.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site oficial da Sanepar
              </a>
            </li>

            <li>
              <a
                href="https://www.sanepar.com.br/segunda-via"
                target="_blank"
                rel="noopener noreferrer"
              >
                Segunda via no site oficial
              </a>
            </li>

            <li>
              <a
                href="https://www.sanepar.com.br/minha-fatura"
                target="_blank"
                rel="noopener noreferrer"
              >
                Minha Fatura no site oficial
              </a>
            </li>

            <li>
              <a
                href="https://www.sanepar.com.br/como-pagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informações oficiais sobre como pagar
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
