import './globals.css';
import { Inter, Lora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use CSS variables for Tailwind
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
