import type { Metadata } from "next";
import { Roboto_Flex } from 'next/font/google';
import BackToTop from "./components/utils/BacktoTop";
import './globals.css';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Manda Um Saldo - Apoia que te inspira.',
  description: 'Recebe apoio dos teus fãs através de Unitel Money, Africell Money e Multicaixa. A primeira plataforma angolana de microdoações.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
