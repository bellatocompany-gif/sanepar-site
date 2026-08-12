import Link from "next/link";

export const metadata = {
  title: "Sanepar Segunda Via | Conta e Fatura",
  description:
    "Saiba como consultar a segunda via da conta Sanepar pelos canais oficiais e veja orientações para acessar sua fatura.",
  keywords: [
    "Sanepar segunda via",
    "segunda via Sanepar",
    "Sanepar conta",
    "Sanepar fatura",
    "segunda via conta Sanepar",
  ],
  alternates: {
    canonical: "/sanepar-segunda-via",
  },
};

export default function SegundaViaPage() {
  return (
    <section className="content container">
      <h1>Sanepar Segunda Via</h1>

      <p>
        Precisa consultar ou localizar a segunda via da sua conta Sanepar?
        Nesta página você encontra orientações para acessar os canais oficiais
        da companhia.
      </p>

      <div className="official">
        <strong>Segunda via oficial:</strong>

        <p>
          Para consultar sua conta, utilize diretamente os canais oficiais da
          Sanepar.
        </p>

        <a
          className="btn"
          href="https://www.sanepar.com.br/segunda-via"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar segunda via oficial
        </a>
      </div>

      <h2>Como consultar a segunda via</h2>

      <ol>
        <li>
          Acesse o site oficial da Sanepar.
        </li>
        <li>
          Procure pela opção relacionada à segunda via da conta.
        </li>
        <li>
          Siga as instruções apresentadas no canal oficial.
        </li>
        <li>
          Faça a consulta utilizando os dados solicitados pela companhia.
        </li>
      </ol>

      <h2>Segunda via e fatura Sanepar</h2>

      <p>
        Se você está procurando informações sobre sua fatura, consulta de
        valores ou outros serviços relacionados à conta, também pode acessar a
        página de informações sobre a fatura.
      </p>

      <Link className="btn" href="/sanepar-fatura">
        Ver informações sobre a fatura
      </Link>

      <h2>Outros serviços</h2>

      <div className="card-grid">
        <div className="card">
          <h3>Sanepar</h3>

          <p>
            Informações gerais e acesso aos principais canais oficiais.
          </p>

          <Link className="btn" href="/sanepar">
            Ver página
          </Link>
        </div>

        <div className="card">
          <h3>Sanepar Fatura</h3>

          <p>
            Consulte informações sobre fatura, pagamento e serviços digitais.
          </p>

          <Link className="btn" href="/sanepar-fatura">
            Ver página
          </Link>
        </div>
      </div>
    </section>
  );
}
