import Link from "next/link";

export const metadata = {
  title: "Sanepar Fatura | Conta, Pagamento e Fatura Digital",
  description:
    "Consulte informações sobre a fatura Sanepar, segunda via, pagamento e serviços digitais pelos canais oficiais.",
  keywords: [
    "Sanepar fatura",
    "fatura Sanepar",
    "Sanepar conta",
    "Sanepar segunda via",
    "Sanepar fatura digital",
    "como pagar Sanepar",
  ],
  alternates: {
    canonical: "/sanepar-fatura",
  },
};

export default function FaturaPage() {
  return (
    <section className="content container">
      <h1>Sanepar Fatura</h1>

      <p>
        Encontre informações sobre a fatura Sanepar, consulta da conta,
        segunda via, pagamento e serviços digitais disponibilizados pela
        companhia.
      </p>

      <div className="official">
        <strong>Minha Fatura oficial:</strong>

        <p>
          Para consultar informações da sua fatura, utilize diretamente o
          canal oficial da Sanepar.
        </p>

        <a
          className="btn"
          href="https://www.sanepar.com.br/minha-fatura"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar Minha Fatura
        </a>
      </div>

      <h2>Segunda via da fatura</h2>

      <p>
        Caso você precise obter uma nova via da sua conta, consulte também a
        página específica sobre segunda via.
      </p>

      <Link className="btn" href="/sanepar-segunda-via">
        Acessar Segunda Via
      </Link>

      <h2>Fatura Digital</h2>

      <p>
        A Sanepar disponibiliza serviços digitais relacionados à fatura.
        Consulte as informações diretamente no canal oficial da companhia.
      </p>

      <a
        className="btn"
        href="https://www.sanepar.com.br/fatura-digital"
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar Fatura Digital
      </a>

      <h2>Como pagar a fatura</h2>

      <p>
        Para consultar as formas de pagamento disponibilizadas pela Sanepar,
        acesse a página oficial da companhia.
      </p>

      <a
        className="btn"
        href="https://www.sanepar.com.br/como-pagar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver formas de pagamento
      </a>

      <h2>Perguntas frequentes</h2>

      <div className="faq">
        <h3>Onde consultar a fatura Sanepar?</h3>

        <p>
          A consulta deve ser realizada pelos canais oficiais da Sanepar.
        </p>

        <h3>Como conseguir a segunda via?</h3>

        <p>
          Você pode acessar a página de segunda via do nosso site ou consultar
          diretamente os canais oficiais da Sanepar.
        </p>

        <h3>Onde encontrar informações sobre pagamento?</h3>

        <p>
          As formas de pagamento devem ser consultadas diretamente na página
          oficial da Sanepar.
        </p>
      </div>

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
          <h3>Sanepar Segunda Via</h3>

          <p>
            Saiba como consultar a segunda via da conta.
          </p>

          <Link className="btn" href="/sanepar-segunda-via">
            Ver página
          </Link>
        </div>
      </div>
    </section>
  );
}
