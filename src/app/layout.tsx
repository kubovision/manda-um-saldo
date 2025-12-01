import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';

const roboto = Roboto_Flex({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Manda Um Saldo - Plataforma Angolana de Apoio a Criadores',
  description: 'Recebe apoio dos teus fãs através de Unitel Money, Africell Money e Multicaixa. A primeira plataforma angolana de microdoações.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}