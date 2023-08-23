import './globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Providers } from './redux/providers';
import localFont from '@next/font/local';

export const metadata = {
  title: 'Petsit',
  description: 'Your pet will be walked',
}

const poppins = localFont({
  src: [
    {
      path: '../public/font/Montserrat-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/font/Montserrat-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-montserrat'
});

console.log(poppins);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  config.autoAddCss = false;
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <body>
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  )
}