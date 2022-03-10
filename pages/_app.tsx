import 'tailwindcss/tailwind.css'
import { useEffect } from "react";
import Script from 'next/script'
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { GTM_ID, pageview } from '../lib/gtm'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
      />
      <Script id='ga-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GTM_ID}');
          `
        }
      </Script>
      <Component {...pageProps} />)
    </>
  )
};

export default App;