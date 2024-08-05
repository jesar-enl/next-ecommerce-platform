import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'NextJs E-Commerce Application',
  description: 'A fully featured e-commerce application built with NextJs',
  icons: '/images/logo-no-background.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="my-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
