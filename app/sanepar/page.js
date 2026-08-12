import Link from "next/link";

export const metadata = {
  title: "Sanepar: Serviços, Segunda Via, Fatura e Atendimento",
  description:
    "Encontre informações sobre a Sanepar, serviços, segunda via, fatura, pagamento e canais oficiais de atendimento.",

  keywords: [
    "Sanepar",
    "Sanepar segunda via",
    "Sanepar fatura",
    "segunda via Sanepar",
    "fatura Sanepar",
    "conta Sanepar",
    "serviços Sanepar",
    "atendimento Sanepar",
  ],

  alternates: {
    canonical: "/sanepar",
  },

  openGraph: {
    title: "Sanepar: Serviços, Segunda Via, Fatura e Atendimento",
    description:
      "Informações sobre serviços da Sanepar, segunda via, fatura, pagamento e canais oficiais de atendimento.",
    url: "https://sanepar-site.vercel.app/sanepar",
    siteName: "Sanepar",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SaneparPage() {
  return (
    <section className="content container">
      <h1>Sanepar: Serviços, Segunda Via, Fatura e Atendimento</h1>

      <p>
        Encontre informações práticas sobre serviços da Sanepar, segunda via
        de conta, fatura, formas de pagamento e canais oficiais de
        atendimento.
      </p>

      <div className="official">
        <strong>Site oficial da Sanepar:</strong>{" "}
        Para acessar serviços, consultar informações atualizadas e entrar em
        contato com a companhia, utilize o canal oficial abaixo.
        <br />
        <br />

        <a
          className="btn"
          href="https://www.sanepar.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar Sanepar.com.br
        </a>
      </div>

      <h2>Serviços da Sanepar</h2>

      <p>
        A Sanepar disponibiliza diferentes serviços relacionados ao
        abastecimento de água, esgoto, atendimento ao cliente, contas e
        serviços digitais. Consulte sempre os canais oficiais para obter
        informações atualizadas.
      </p>

      <div className="card-grid">
        <div className="card">
          <h2>Sanepar Segunda Via</h2>

          <p>
            Saiba como localizar informações sobre a segunda via da conta e
            consulte os canais oficiais disponibilizados pela Sanepar.
          </p>

          <Link className="btn" href="/sanepar-segunda-via">
            Ver Segunda Via
          </Link>
        </div>

        <div className="card">
          <h2>Sanepar Fatura</h2>

          <p>
            Encontre informações sobre fatura, conta, pagamento e serviços
            digitais relacionados à Sanepar.
          </p>

          <Link className="btn" href="/sanepar-fatura">
            Ver informações da Fatura
          </Link>
        </div>
      </div>

      <h2>Como acessar os canais oficiais</h2>

      <p>
        Para consultar sua conta, obter informações sobre serviços ou buscar
        atendimento, recomendamos utilizar diretamente os canais oficiais da
        Sanepar.
      </p>

      <p>
        <a
          href="https://www.sanepar.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar o site oficial da Sanepar
        </a>
      </p>

      <h2>Informações importantes</h2>

      <p>
        Este é um site informativo independente e não representa oficialmente
        a Sanepar. As informações apresentadas têm como objetivo facilitar a
        localização dos serviços e canais oficiais da companhia.
      </p>

      <p>
        Para informações oficiais, valores, atendimento, contas e serviços,
        confirme os dados diretamente no site da Sanepar.
      </p>
    </section>
  );
}
