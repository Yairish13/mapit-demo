import styles from './DefaultLayout.module.css';
import { useTranslation } from '@app/i18n';
import Logo from '@components/Logo';

export default async function DefaultLayout({
  children,
  lng
}) {
  const { t } = await useTranslation(lng);

  return (
    <div className="container">
      <div className={styles.layout}>
        <header className={styles.header}>
          <Logo t={t} />
        </header>
        
        <main className={styles.main}>
          {children}
        </main>
        
        <footer className={styles.footer}>
          {t("global.regulations")}
        </footer>
      </div>
    </div>
  )
}
