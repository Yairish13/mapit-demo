import Checkmark from '@components/Checkmark/Checkmark';
import { Trans } from 'react-i18next/TransWithoutContext'
import styles from './page.module.css';
import { useTranslation } from '@app/i18n';

const Page = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng)
    return (
        <div className={`${styles.finishContainer} conatiner`}>
            <div>
                <Checkmark />
            </div>
            <h2 className={styles.finishHeader}>
            <Trans i18nKey="pages.finish.youFinished" t={t}>
                Switch from <strong>{{ lng }}</strong> to {""}
              </Trans>
            </h2>
            <div>
                {t('pages.finish.thanks')}
            </div>
        </div>
    )
}

export default Page