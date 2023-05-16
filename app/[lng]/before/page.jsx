import Image from 'next/image';
import styles from './page.module.css';
import mapitLogo from '@public/assets/images/mapitLogo.svg';
import groupCircle from '@public/assets/images/groupCircle.svg';
import BeforeForm from '@components/BeforeForm/BeforeForm';
import { useTranslation } from '@app/i18n';


const Page = async({ params: { lng } }) => {
    const { t } = await useTranslation(lng, 'before-page')

    return (
        <>
            <div className={lng === 'he' ? `${styles.split} ${styles.left}` : `${styles.split} ${styles.rightEn}`}>
                <Image className={lng === 'he' ? styles.logoLeft : styles.logoRight} src={mapitLogo.src} alt="" width="100" height="100" />
                <BeforeForm
                    lng={lng}
                />
            </div>

            <div className={ lng === 'he' ? `${styles.split} ${styles.right}`: `${styles.split} ${styles.leftEn}`}>
                <div className={styles.rightScreen}>
                    <Image className={styles.groupLogo} src={groupCircle.src} alt="" width="450" height="450" />
                    <div className={styles.rightText}>
                        {t('beforeStart')}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;