import Head from 'next/head';

export const metadata = {
  title: 'Isha Gupta',
  description: 'Software Developer',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body >{children}</body>
    </html>
  )
}
