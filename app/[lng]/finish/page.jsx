"use client"
import Checkmark from '@components/Checkmark/Checkmark'
import styles from './page.module.css';
import { useTranslation } from '@app/i18n';
import RadioRange from '@components/RadioRange/RadioRange';

const Page = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng)
    return (
        // <div className={`${styles.finishContainer} conatiner`}>
        //     <div>
        //         <Checkmark />
        //     </div>
        //     <h2 className={styles.finishHeader}>
        //         {t('pages.finish.youFinished')}
        //     </h2>
        //     <div>
        //         {t('pages.finish.thanks')}
        //     </div>
        // </div>
        <RadioRange />
    )
}

export default Page