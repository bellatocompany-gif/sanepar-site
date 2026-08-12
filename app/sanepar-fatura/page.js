import Link from "next/link";
export const metadata = { title: "Sanepar Fatura", description: "Informações sobre a Sanepar Fatura, pagamento e serviços digitais." };

export default function Page() {
  return <section className="content container">
    <h1>Sanepar Fatura</h1>
    <p>A fatura da Sanepar apresenta informações da conta de água e dos serviços de saneamento. A página oficial reúne orientações sobre fatura digital, segunda via, pagamento e outras opções.</p>
    <div className="official">
      <strong>Minha Fatura oficial:</strong> veja as informações diretamente no site da Sanepar.
      <br/><a className="btn" href="https://www.sanepar.com.br/minha-fatura" target="_blank" rel="noopener noreferrer">Consultar informações oficiais</a>
    </div>
    <h2>Segunda via da fatura</h2>
    <p>Se a sua intenção é obter uma nova via da conta, veja também <Link href="/sanepar-segunda-via">Sanepar Segunda Via</Link>.</p>
    <h2>Fatura Digital</h2>
    <p>A Sanepar disponibiliza a Fatura Digital por e-mail e no aplicativo/área do cliente.</p>
    <a className="btn" href="https://www.sanepar.com.br/fatura-digital" target="_blank" rel="noopener noreferrer">Fatura Digital oficial</a>
    <h2>Como pagar</h2>
    <p>Para consultar as formas de pagamento divulgadas pela companhia, acesse a página oficial.</p>
    <a className="btn" href="https://www.sanepar.com.br/como-pagar" target="_blank" rel="noopener noreferrer">Ver formas de pagamento</a>
    <h2>Perguntas frequentes</h2>
    <div className="faq">
      <h3>Onde consultar a fatura?</h3>
      <p>O site oficial da Sanepar possui uma área específica para informações sobre a fatura.</p>
      <h3>Onde encontrar a segunda via?</h3>
      <p>Consulte a página oficial de segunda via ou o Portal Minha Sanepar.</p>
    </div>
  </section>;
}