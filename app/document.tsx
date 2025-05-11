import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* This meta tag will refresh the page to /longevity if the redirect in page.tsx doesn't work */}
        <meta httpEquiv="refresh" content="0;url=/longevity" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
