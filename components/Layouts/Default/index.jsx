import styles from './DefaultLayout.module.css';
import { useTranslation } from '@app/i18n';
import LanguageSelect from '@components/LanguageSelect/LanguageSelect';
import Logo from '@components/Logo';
import { store } from '@store';

export default async function DefaultLayout({
  children,
  lng
}) {
  const { t } = await useTranslation(lng);
  return (
    <div className="container">
      <div className={styles.layout}>
        <header className={styles.header}>
          <Logo />
          <LanguageSelect lng={lng}/>
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
