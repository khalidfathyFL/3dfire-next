import { Inter } from 'next/font/google';
import ClientWrapper from '@/components/ClientWrapper';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '3D Fire Design - Fire Systems Design & Solutions',
  description: 'Expert fire protection design and documentation services for water-based fire suppression systems in both 2D and 3D environments.',
  keywords: 'fire design, fire protection, BIM, Revit, MicroBIM Fire, fire suppression systems',
  openGraph: {
    title: '3D Fire Design - Fire Systems Design & Solutions',
    description: 'Expert fire protection design and documentation services',
    url: 'https://3dfire.com.au',
    siteName: '3D Fire Design',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '3D Fire Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
