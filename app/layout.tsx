import './globals.css';
import type { Metadata } from 'next';
import { poppins } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Analytics } from "@vercel/analytics/react"
import { Footer } from '@/components/footer';


export const metadata: Metadata = {
  title: 'Laxsan Dev | Web Developer',
  description: 'Web developer specializing in Next.js and React.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}