import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from './redux/providers';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
          <Providers>{children}</Providers>
          </body>
      </html>
  )
}
