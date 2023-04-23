import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from './redux/providers';
import Header from '../components/header/Header';
import Footer from "../components/footer/Footer";

export const metadata = {
  title: 'Petwalk',
  description: 'Your pet will be walked',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  config.autoAddCss = false;
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}