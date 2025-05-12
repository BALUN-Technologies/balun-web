import '../../styles/globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Creative Chaos | Your Innovation Delivery Partners',
  description:
    'Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea.',
  openGraph: {
    title: 'Creative Chaos | Your Innovation Delivery Partners',
    description:
      'Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea.',
    url: 'https://creativechaos.co/',
    siteName: 'Creative Chaos',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Chaos | Your Innovation Delivery Partners',
    description:
      'Creative Chaos is a technology innovation delivery agency that helps startups and enterprises develop their next big idea.',
  },
  icons: {
    icon: '/favicon.ico',  // Updated favicon
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',  // Optional
  },
  manifest: '/site.webmanifest.html',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/new-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* WordPress-generated styles */}
        <link rel="stylesheet" href="/ajax_style.css" />
        <link rel="stylesheet" href="/style1.css" />
        <link rel="stylesheet" href="/font.css" />
        <link rel="stylesheet" href="/style2.css" />
        <link rel="stylesheet" href="/fontawesome_min.css" />
        <link rel="stylesheet" href="/style3.css" />

        {/* Inline style from original site */}
        <style>{`
          @media (max-width: 1370px) {
            #header .overlayMenu .menu li a {
              font-size: 2vw;
            }
          }
        `}</style>

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "#website",
              "url": "https://creativechaos.co/",
              "name": "Creative Chaos",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://creativechaos.co/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Scripts via next/script */}
        <Script
          id="jquery"
          src="https://creativechaos.co/wp-includes/js/jquery/jquery.js"
          strategy="beforeInteractive"
        />
        <Script
          id="wp-settings"
          src="https://creativechaos.co/wp-content/themes/ccweb/js/settings.min.js?ver=2.1"
          strategy="afterInteractive"
        />
        <Script id="wpcf7-data" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
            var wpcf7 = {
              "apiSettings": {
                "root": "https://creativechaos.co/wp-json/contact-form-7/v1",
                "namespace": "contact-form-7/v1"
              },
              "recaptcha": {
                "messages": {
                  "empty": "Please verify that you are not a robot."
                }
              },
              "cached": "1"
            };
          `
        }} />
        <Script id="enable-js-class" strategy="beforeInteractive">
          {`document.documentElement.className += " js";`}
        </Script>

        {children}
      </body>
    </html>
  )
}

