import type { Metadata, Viewport } from 'next';

import { roboto } from '@/config';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/twMerge-clsx';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `Inicio | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.author,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className='scroll-smooth'>
      <body className={cn('min-h-screen antialiased', roboto.variable)}>
        {children}
      </body>
    </html>
  );
}
