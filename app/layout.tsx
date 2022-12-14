import './globals.css';

import { Kumbh_Sans } from '@next/font/google';

const kumbhSans = Kumbh_Sans({
  variable: '--font-kumbh-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={kumbhSans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
