import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://healthscan.example.com'),
  title: {
    default: 'HealthScan Diagnostics',
    template: '%s | HealthScan Diagnostics',
  },
  description: 'Premium diagnostic laboratory website for accurate testing and better healthcare.',
  keywords: ['diagnostic lab', 'blood tests', 'health packages', 'home sample collection'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
