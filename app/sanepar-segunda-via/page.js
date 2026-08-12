import Link from "next/link";
export const metadata = { title: "Sanepar Segunda Via", description: "Saiba como consultar a segunda via da Sanepar pelos canais oficiais." };

export default function Page() {
  return <section className="content container">
    <h1>Sanepar Segunda Via</h1>
    <p>Quem precisa de uma segunda via da conta pode consultar os canais oficiais da Sanepar. A companhia informa que a segunda via completa pode ser obtida pelo Portal Minha Sanepar.</p>
    <div className="official">
      <strong>Segunda via oficial:</strong> consulte diretamente a página da Sanepar.
      <br/><a className="btn" href="https://www.sanepar.com.br/segunda-via" target="_blank" rel="noopener noreferrer">Acessar segunda via oficial</a>
    </div>
    <h2>Como encontrar a segunda via</h2>
    <ol>
      <li>Acesse o canal oficial da Sanepar.</li>
      <li>Procure pela opção de segunda via ou pelo Portal Minha Sanepar.</li>
      <li>Siga as instruções de autenticação e consulta apresentadas pela própria companhia.</li>
    </ol>
    <h2>Fatura e segunda via</h2>
    <p>Se você está procurando informações gerais da conta, consulte também a página <Link href="/sanepar-fatura">Sanepar Fatura</Link>.</p>
    <p>Para conhecer outras formas de pagamento, consulte a página oficial <a href="https://www.sanepar.com.br/como-pagar" target="_blank" rel="noopener noreferrer">Como Pagar</a>.</p>
  </section>;
}