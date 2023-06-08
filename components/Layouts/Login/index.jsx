"use client"
import Logo from '@components/Logo'
import GilboaLogo from '../../../public/assets/images/gilboa.svg'
import MapitText from '../../../public/assets/images/mapitText.svg'
import MapitTextSmall from '../../../public/assets/images/mapitTextSmall.svg'
import styles from "./login.module.scss"
import { useTranslation } from '@app/i18n/client'
import LanguageSelect from '@components/LanguageSelect/LanguageSelect'


const LoginLayout = ({ children, lng }) => {
    const { t } = useTranslation(lng);
    console.log(lng,'lng');
    return (
        <div className={styles.content}>
            <main className={styles.main}>
                <header className={styles.header}>
                    <Logo logo={<GilboaLogo />} lng={lng} />
                    <LanguageSelect lng={lng} />
                </header>
                <div className={styles.body}>
                    {children}
                </div>

                <footer className={styles.footer}>
                    {t('global.regulations')}
                </footer>
            </main>
            <div className={styles.side}>
                <div className={styles.mapitBorder}>
                    <div className={styles.mapitBg}>
                        <div className={styles.mapitTextDiv}>
                            <MapitText />
                        </div>
                        <div className={styles.mapitTextDivSmall}>
                            <MapitTextSmall />
                        </div>
                    </div>
                </div>
                <div className={styles.imageSideFooter}>
                    <p>{t('pages.login.gilboaMail')} | {t('pages.login.gilboaName')} | 050-8855300</p>
                </div>
            </div>

        </div>
    )
}

export default LoginLayout