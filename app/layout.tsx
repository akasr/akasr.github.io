import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Navigation from './ui/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Akash\'s Site' ,
  description: 'Portfolio website for Akash',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
