"use client"
import Terms from '@components/Terms/Terms'
import styles from './page.module.css'
import { Trans } from 'react-i18next'
import Checkbox from '@components/Checkbox/Checkbox';
import Button from '@components/Button/Button';
import { useTranslation } from '@app/i18n/client';


const Page =  ({ params: { lng } }) => {
    const { t } =  useTranslation(lng, 'terms-page')

    return (
        <div className={styles.container}>
            <h2 className={styles.termsHeader}>
                {t('fullHeader')}
            </h2>
            <div>
                {t("textOne")}
            </div>
            <br />
            <div>
                {t("textTwo")}
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                1.{t("general")}
            </div>
            <br />
            <div className={styles.row}>
                <div>1.1.</div>
                &nbsp;
                <div>{t("oneOne")}</div>
            </div>
            <br />
            <div className={styles.row}>
                <div>1.2.</div>
                &nbsp;
                <div>
                    {t("oneTwo")}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>1.3.</div>&nbsp;<div>
                    {t("oneThree")}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>1.4.</div>&nbsp;<div>
                    {t("oneFour")}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                2. {t("two")}
            </div>
            <br />
            <div className={styles.row}>
                <div>2.1.</div>&nbsp;<div>
                    {t("twoOne")}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>2.2.</div>&nbsp;<div>
                    {t('twoTwo')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>2.2.1.</div>&nbsp;<div>
                    {t('twoTwoOne')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>2.2.2.</div>&nbsp;<div>
                    {t('twoTwoTwo')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>2.2.3.</div>&nbsp;<div>
                    {t('twoTwoThree')}                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>2.2.4.</div>&nbsp;<div>
                    {t('twoTwoFour')}                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>2.2.5.</div>&nbsp;<div>
                    {t('twoTwoFive')}                    </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                3. {t('three')}
            </div>
            <br />
            <div className={styles.row}>
                <div>3.1.</div>&nbsp;<div>
                    {t('threeOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>3.2.</div>&nbsp;<div>
                    {t('threeTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>3.3.</div>&nbsp;<div>
                    {t('threeThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>3.4.</div>&nbsp;<div>
                    {t('threeFour')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>3.5.</div>&nbsp;<div>
                    {t('threeFive')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                4. {t('four')}
            </div>
            <br />
            <div className={styles.row}>
                <div>4.1.</div>&nbsp;<div>
                    {t('fourOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>4.2.</div>&nbsp;<div>
                    {t('fourTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>4.3.</div>&nbsp;<div>
                    {t('fourThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>4.4.</div>&nbsp;<div>
                    {t('fourFour')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                5. {t('five')}
            </div>
            <br />
            <div className={styles.row}>
                <div>5.1.</div>&nbsp;<div>
                    {t('fiveOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.2.</div>&nbsp;<div>
                    {t('fiveTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.3.</div>&nbsp;<div>
                    {t('fiveThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.4.</div>&nbsp;<div>
                    {t('fiveFour')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.5.</div>&nbsp;<div>
                    {t('fiveFive')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.6.</div>&nbsp;<div>
                    {t('fiveSix')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.7.</div>&nbsp;<div>
                    {t('fiveSeven')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>5.8.</div>&nbsp;<div>
                    {t('fiveEight')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                6. {t('six')}
            </div>
            <br />
            <div className={styles.row}>
                <div>6.1.</div>&nbsp;<div>
                    {t('sixOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>6.2.</div>&nbsp;<div>
                    {t('sixTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>6.3.</div>&nbsp;<div>
                    {t('sixThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>6.4.</div>&nbsp;<div>
                    {t('sixFour')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                7. {t('seven')}
            </div>
            <br />
            <div className={styles.row}>
                <div>7.1.</div>&nbsp;<div>
                    {t('sevenOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>7.2.</div>&nbsp;<div>
                    {t('sevenTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>7.3.</div>&nbsp;<div>
                    {t('sevenThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>7.4.</div>&nbsp;<div>
                    {t('sevenFour')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                8. {t('eight')}
            </div>
            <br />
            <div className={styles.row}>
                <div>8.1.</div>&nbsp;<div>
                    {t('eightOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>8.2.</div>&nbsp;<div>
                    {t('eightTwo')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                9. {t('nine')}
            </div>
            <br />
            <div className={styles.row}>
                <div>9.1.</div>&nbsp;<div>
                    {t('nineOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>9.2.</div>&nbsp;<div>
                    {t('nineTwo')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>9.3.</div>&nbsp;<div>
                    {t('nineThree')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>9.4.</div>&nbsp;<div>
                    {t('nineFour')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>9.5.</div>&nbsp;<div>
                    {t('nineFive')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.1.</div>&nbsp;<div>
                    {t('nineFiveOne')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.2.</div>&nbsp;<div>
                    {t('nineFiveTwo')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.3.</div>&nbsp;<div>
                    {t('nineFiveThree')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.4.</div>&nbsp;<div>
                    {t('nineFiveFour')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.5.</div>&nbsp;<div>
                    {t('nineFiveFive')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.5.6.</div>&nbsp;<div>
                    {t('nineFiveSix')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>9.6.</div>&nbsp;<div>
                    {t('nineSix')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.1.</div>&nbsp;<div>
                    {t('nineSixOne')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.2.</div>&nbsp;<div>
                    {t('nineSixTwo')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.3.</div>&nbsp;<div>
                    {t('nineSixThree')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.4.</div>&nbsp;<div>
                    {t('nineSixFour')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.5.</div>&nbsp;<div>
                    {t('nineSixFive')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.6.</div>&nbsp;<div>
                    {t('nineSixSix')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.7.</div>&nbsp;<div>
                    {t('nineSixSeven')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.8.</div>&nbsp;<div>
                    {t('nineSixEight')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.9.</div>&nbsp;<div>
                    {t('nineSixNine')}
                </div>
            </div>
            <br />
            <div className={styles.subRow}>
                <div>9.6.10.</div>&nbsp;<div>
                    {t('nineSixTen')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                10. {t('ten')}
            </div>
            <br />
            <div className={styles.row}>
                <div>10.1.</div>&nbsp;<div>
                    {t('tenOne')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                11. {t('eleven')}
            </div>
            <br />
            <div className={styles.row}>
                <div>11.1.</div>&nbsp;<div>
                    {t('elevenOne')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                12. {t('twelve')}
            </div>
            <br />
            <div className={styles.row}>
                <div>12.1.</div>&nbsp;<div>
                    {t('twelveOne')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                13. {t('thirteen')}
            </div>
            <br />
            <div className={styles.row}>
                <div>13.1.</div>&nbsp;<div>
                    {t('thirteenOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>13.2.</div>&nbsp;<div>
                    {t('thirteenTwo')}
                </div>
            </div>
            <br />
            <div style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                14. {t('fourteen')}
            </div>
            <br />
            <div className={styles.row}>
                <div>14.1.</div>&nbsp;<div>
                    {t('fourteenOne')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>
                    {t('address')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>
                    {t('tel')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>
                    {t('email')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>
                    {t('rightsLaywer')}
                </div>
            </div>
            <br />
            <div className={styles.row}>
                <div>
                    {t('lastUpdate')}
                </div>
            </div>
            <br />
            <Checkbox
                label={t('get')}
            />
            <br />
            <br />
            <Button
                mode="primary"
            >
                {t('continue')}
            </Button>
        </div>
    )
}

export default Page