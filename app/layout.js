import Link from "next/link";
import "./globals.css";

const official = {
  home: "https://www.sanepar.com.br/",
  secondCopy: "https://www.sanepar.com.br/segunda-via",
  invoice: "https://www.sanepar.com.br/minha-fatura",
  pay: "https://www.sanepar.com.br/como-pagar",
  digital: "https://www.sanepar.com.br/fatura-digital",
  contact: "https://www.sanepar.com.br/contatos",
};

export const metadata = {
  metadataBase: new URL("https://sanepar-site.vercel.app"),

  title: {
    default: "Sanepar | Serviços, Segunda Via e Fatura",
    template: "%s | Sanepar",
  },

  description:
    "Informações sobre serviços da Sanepar, segunda via, fatura e canais oficiais de atendimento.",

  keywords: [
    "Sanepar",
    "Sanepar segunda via",
    "segunda via Sanepar",
    "Sanepar fatura",
    "fatura Sanepar",
    "conta Sanepar",
  ],

  verification: {
    google: "x6tpoqMiykgni4qCcTNaDramUUXhQiYNbG9kC0mkyso",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://sanepar-site.vercel.app/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Sanepar | Serviços, Segunda Via e Fatura",
    description:
      "Informações sobre serviços da Sanepar, segunda via, fatura e canais oficiais de atendimento.",
    url: "https://sanepar-site.vercel.app/",
    siteName: "Sanepar",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="container nav">
            <Link className="brand" href="/">
              Sanepar
            </Link>

            <nav aria-label="Navegação principal">
              <Link href="/sanepar">
                Sanepar
              </Link>

              <Link href="/sanepar-segunda-via">
                Segunda via
              </Link>

              <Link href="/sanepar-fatura">
                Fatura
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <p>
              Site informativo independente. Não somos o site oficial da
              Sanepar.
            </p>

            <div className="footer-links">
              <a
                href={official.home}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site oficial da Sanepar
              </a>

              <a
                href={official.secondCopy}
                target="_blank"
                rel="noopener noreferrer"
              >
                Segunda via oficial
              </a>

              <a
                href={official.invoice}
                target="_blank"
                rel="noopener noreferrer"
              >
                Minha Fatura oficial
              </a>

              <a
                href={official.pay}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como pagar
              </a>

              <a
                href={official.digital}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fatura Digital
              </a>

              <a
                href={official.contact}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contatos oficiais
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
