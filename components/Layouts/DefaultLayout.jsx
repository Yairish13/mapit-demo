import '@styles/globals.css';
import styles from './DefaultLayout.module.css';
import mapitLogo from '@public/assets/images/mapitLogo.svg';
import Image from 'next/image';
import { useTranslation } from '@app/i18n';


export default async function DefaultLayout({
  children,
  lng
}) {
  const { t } = await useTranslation(lng, 'login-page')
  return (
    <html>
      <head />
      <body>
        <header className={styles.RootLayoutHeader}>
          <Image src={mapitLogo.src} alt="" width="100" height="100" />
        </header>
        <main>{children}</main>
        <footer className={styles.RootLayoutFooter}>
          {t('takanon')}
        </footer>
      </body>
    </html>
  )
}
