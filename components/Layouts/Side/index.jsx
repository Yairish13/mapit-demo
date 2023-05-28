import styles from './Side.module.scss';
import { useTranslation } from '@app/i18n';
import Logo from '@components/Logo';

export default async function DefaultLayout({
  children,
  lng
}) {
  const { t } = await useTranslation(lng);

  return (
    <div className={styles.content}>
      <div className={styles.side}>
        <div className={styles.side__hero}>
          <p>{t('global.before_you_begin')}</p>
        </div>
      </div>

      <main className={styles.main}>
        <header className={styles.header}>
          <Logo lng={lng} />
        </header>

        <div className={styles.body}>
          {children}
        </div>

        <footer className={styles.footer}>
          {t('global.regulations')}
        </footer>
      </main>
    </div>
  )
}