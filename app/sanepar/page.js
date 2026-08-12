import Link from "next/link";
export const metadata = { title: "Sanepar", description: "Informações sobre a Sanepar e acesso aos canais oficiais." };

export default function Page() {
  return <section className="content container">
    <h1>Sanepar</h1>
    <p>Esta página reúne informações gerais para quem procura serviços da Sanepar e deseja acessar os canais oficiais.</p>
    <div className="official">
      <strong>Canal oficial:</strong> consulte o site da Sanepar para serviços, atendimento e informações atualizadas.
      <br/><a className="btn" href="https://www.sanepar.com.br/" target="_blank" rel="noopener noreferrer">Ir para Sanepar.com.br</a>
    </div>
    <h2>Serviços relacionados</h2>
    <div className="card-grid">
      <div className="card"><h2>Sanepar Segunda Via</h2><p>Acesse a página específica sobre segunda via.</p><Link className="btn" href="/sanepar-segunda-via">Segunda via</Link></div>
      <div className="card"><h2>Sanepar Fatura</h2><p>Veja informações sobre a fatura e formas de consulta.</p><Link className="btn" href="/sanepar-fatura">Fatura</Link></div>
    </div>
  </section>;
}