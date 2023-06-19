"use client"
import { useTranslation } from '@app/i18n/client';
import styles from './FullTerms.module.css'
import { Trans } from 'react-i18next/TransWithoutContext'

const FullTerms = ({ lng }) => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h2 className={styles.termsHeader}>
                {t('pages.terms.fullHeader')}
            </h2>
            <div>
                <Trans i18nKey="pages.terms.textOne" t={t}>
                    Switch from <strong>{ lng }</strong> to {''}
                </Trans>
            </div>

            <div>
                <Trans i18nKey="pages.terms.textTwo" t={t}>
                    Switch from <strong>{ lng }</strong> to {''}
                </Trans>
            </div>

            <div className={styles.headers}>
                1.{t("pages.terms.general")}
            </div>

            <div className={styles.row}>
                <div>1.1.</div>

                <div>
                    <Trans i18nKey="pages.terms.oneOne" t={t}>
                        Switch from <strong>{ lng }</strong> to {''}
                    </Trans></div>
            </div>

            <div className={styles.row}>
                <div>1.2.</div>

                <div>
                    {t("pages.terms.oneTwo")}
                </div>
            </div>

            <div className={styles.row}>
                <div>1.3.</div><div>
                    {t("pages.terms.oneThree")}
                </div>
            </div>

            <div className={styles.row}>
                <div>1.4.</div><div>
                    {t("pages.terms.oneFour")}
                </div>
            </div>

            <div className={styles.headers}>
                2. {t("pages.terms.two")}
            </div>

            <div className={styles.row}>
                <div>2.1.</div><div>
                    {t("pages.terms.twoOne")}
                </div>
            </div>

            <div className={styles.row}>
                <div>2.2.</div><div>
                    {t('pages.terms.twoTwo')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>2.2.1.</div><div>
                    {t('pages.terms.twoTwoOne')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>2.2.2.</div><div>
                    {t('pages.terms.twoTwoTwo')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>2.2.3.</div><div>
                    {t('pages.terms.twoTwoThree')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>2.2.4.</div><div>
                    {t('pages.terms.twoTwoFour')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>2.2.5.</div><div>
                    {t('pages.terms.twoTwoFive')}
                </div>
            </div>

            <div className={styles.headers}>
                3. {t('pages.terms.three')}
            </div>

            <div className={styles.row}>
                <div>3.1.</div><div>
                    {t('pages.terms.threeOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>3.2.</div><div>
                    {t('pages.terms.threeTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>3.3.</div><div>
                    {t('pages.terms.threeThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>3.4.</div><div>
                    {t('pages.terms.threeFour')}
                </div>
            </div>

            <div className={styles.row}>
                <div>3.5.</div><div>
                    {t('pages.terms.threeFive')}
                </div>
            </div>

            <div className={styles.headers}>
                4. {t('pages.terms.four')}
            </div>

            <div className={styles.row}>
                <div>4.1.</div><div>
                    {t('pages.terms.fourOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>4.2.</div><div>
                    {t('pages.terms.fourTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>4.3.</div><div>
                    {t('pages.terms.fourThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>4.4.</div><div>
                    {t('pages.terms.fourFour')}
                </div>
            </div>

            <div className={styles.headers}>
                5. {t('pages.terms.five')}
            </div>

            <div className={styles.row}>
                <div>5.1.</div><div>
                    {t('pages.terms.fiveOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.2.</div><div>
                    {t('pages.terms.fiveTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.3.</div><div>
                    {t('pages.terms.fiveThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.4.</div><div>
                    {t('pages.terms.fiveFour')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.5.</div><div>
                    {t('pages.terms.fiveFive')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.6.</div><div>
                    {t('pages.terms.fiveSix')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.7.</div><div>
                    {t('pages.terms.fiveSeven')}
                </div>
            </div>

            <div className={styles.row}>
                <div>5.8.</div><div>
                    {t('pages.terms.fiveEight')}
                </div>
            </div>

            <div className={styles.headers}>
                6. {t('pages.terms.six')}
            </div>

            <div className={styles.row}>
                <div>6.1.</div><div>
                    {t('pages.terms.sixOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>6.2.</div><div>
                    {t('pages.terms.sixTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>6.3.</div><div>
                    {t('pages.terms.sixThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>6.4.</div><div>
                    {t('pages.terms.sixFour')}
                </div>
            </div>

            <div className={styles.headers}>
                7. {t('pages.terms.seven')}
            </div>

            <div className={styles.row}>
                <div>7.1.</div><div>
                    {t('pages.terms.sevenOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>7.2.</div><div>
                    {t('pages.terms.sevenTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>7.3.</div><div>
                    {t('pages.terms.sevenThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>7.4.</div><div>
                    {t('pages.terms.sevenFour')}
                </div>
            </div>

            <div className={styles.headers}>
                8. {t('pages.terms.eight')}
            </div>

            <div className={styles.row}>
                <div>8.1.</div><div>
                    {t('pages.terms.eightOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>8.2.</div><div>
                    {t('pages.terms.eightTwo')}
                </div>
            </div>

            <div className={styles.headers}>
                9. {t('pages.terms.nine')}
            </div>

            <div className={styles.row}>
                <div>9.1.</div><div>
                    {t('pages.terms.nineOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>9.2.</div><div>
                    {t('pages.terms.nineTwo')}
                </div>
            </div>

            <div className={styles.row}>
                <div>9.3.</div><div>
                    {t('pages.terms.nineThree')}
                </div>
            </div>

            <div className={styles.row}>
                <div>9.4.</div><div>
                    {t('pages.terms.nineFour')}
                </div>
            </div>

            <div className={styles.row}>
                <div>9.5.</div><div>
                    {t('pages.terms.nineFive')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.1.</div><div>
                    {t('pages.terms.nineFiveOne')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.2.</div><div>
                    {t('pages.terms.nineFiveTwo')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.3.</div><div>
                    {t('pages.terms.nineFiveThree')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.4.</div><div>
                    {t('pages.terms.nineFiveFour')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.5.</div><div>
                    {t('pages.terms.nineFiveFive')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.5.6.</div><div>
                    {t('pages.terms.nineFiveSix')}
                </div>
            </div>

            <div className={styles.row}>
                <div>9.6.</div><div>
                    {t('pages.terms.nineSix')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.1.</div><div>
                    {t('pages.terms.nineSixOne')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.2.</div><div>
                    {t('pages.terms.nineSixTwo')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.3.</div><div>
                    {t('pages.terms.nineSixThree')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.4.</div><div>
                    {t('pages.terms.nineSixFour')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.5.</div><div>
                    {t('pages.terms.nineSixFive')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.6.</div><div>
                    {t('pages.terms.nineSixSix')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.7.</div><div>
                    {t('pages.terms.nineSixSeven')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.8.</div><div>
                    {t('pages.terms.nineSixEight')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.9.</div><div>
                    {t('pages.terms.nineSixNine')}
                </div>
            </div>

            <div className={styles.subRow}>
                <div>9.6.10.</div><div>
                    {t('pages.terms.nineSixTen')}
                </div>
            </div>

            <div className={styles.headers}>
                10. {t('pages.terms.ten')}
            </div>

            <div className={styles.row}>
                <div>10.1.</div><div>
                    {t('pages.terms.tenOne')}
                </div>
            </div>

            <div className={styles.headers}>
                11. {t('pages.terms.eleven')}
            </div>

            <div className={styles.row}>
                <div>11.1.</div><div>
                    {t('pages.terms.elevenOne')}
                </div>
            </div>

            <div className={styles.headers}>
                12. {t('pages.terms.twelve')}
            </div>

            <div className={styles.row}>
                <div>12.1.</div><div>
                    {t('pages.terms.twelveOne')}
                </div>
            </div>

            <div className={styles.headers}>
                13. {t('pages.terms.thirteen')}
            </div>

            <div className={styles.row}>
                <div>13.1.</div><div>
                    {t('pages.terms.thirteenOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>13.2.</div><div>
                    {t('pages.terms.thirteenTwo')}
                </div>
            </div>

            <div className={styles.headers}>
                14. {t('pages.terms.fourteen')}
            </div>

            <div className={styles.row}>
                <div>14.1.</div><div>
                    {t('pages.terms.fourteenOne')}
                </div>
            </div>

            <div className={styles.row}>
                <div>
                    {t('pages.terms.address')}
                </div>
            </div>

            <div className={styles.row}>
                <div>
                    {t('pages.terms.tel')}
                </div>
            </div>

            <div className={styles.row}>
                <div>
                    {t('pages.terms.email')}
                </div>
            </div>

            <div className={styles.row}>
                <div>
                    {t('pages.terms.rightsLaywer')}
                </div>
            </div>

            <div className={styles.row}>
                <div>
                    {t('pages.terms.lastUpdate')}
                </div>
            </div>
        </div>
    )
}

export default FullTerms