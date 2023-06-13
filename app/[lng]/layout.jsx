import '@styles/variables.css';
import '@styles/fonts.css';
import '@styles/globals.scss';
import '@styles/normalize.css';
import Providers from '@store/Providers';
import { dir } from 'i18next'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6Lcrk5ImAAAAAGdxcLEpwRCyqk3rpbfIGPKplfl8" async></script>
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}