"use client"
import Checkmark from '@components/Checkmark/Checkmark';
import { Trans } from 'react-i18next/TransWithoutContext'
import styles from './FinishComp.module.css';
import { useTranslation } from '@app/i18n/client';


const FinishComp = ({ lng }) => {
    const { t } = useTranslation(lng);

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

export default FinishComp