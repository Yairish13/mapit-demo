"use Client"
import Image from 'next/image';
import styles from './page.module.css';
import mapitText from '@public/assets/images/mapitText.svg';
import gilboa from '@public/assets/images/gilboa.svg';
import TextInput from '@components/TextInput/TextInput';
import Checkbox from '@components/Checkbox/Checkbox';
import Button from '@components/Button/Button';
import { useTranslation } from '@app/i18n/client';


const Page =  ({ params: { lng } }) => {
    const { t } =  useTranslation(lng, 'login-page')

    return (
        <div>
            <div className={lng === 'he' ? `${styles.split} ${styles.left} ${styles.bgImage}`: `${styles.split} ${styles.right} ${styles.bgImage}`}>
                <div className={styles.centered}>
                    <Image src={mapitText.src} className={styles.mapitLogo} width={125} height={125} />
                </div>
                <div className={styles.bottomText}>
                    <span>0508855300</span>
                    {' '}|{' '}
                    <span>
                        {t('gilboaName')}
                    </span>
                    {' '}|{' '}
                    <span>
                        {t('gilboaMail')}
                        </span>

                </div>
                <p>

                </p>
            </div>

            <div className={ lng === 'he' ? `${styles.split} ${styles.right}`: `${styles.split} ${styles.left}`}>
                <Image className={styles.logo} src={gilboa.src} width={100} height={60} />
                <div className={styles.centeredLogin}>
                    <h2 className={styles.loginHeader}>
                        {t('phoneValidation')}
                    </h2>
                    <TextInput
                        id="phoneLoginInput"
                        type='number'
                        bottomText={t('smsWillBeSent')}
                    />
                    <Checkbox
                        label={t('rememberTheNumber')}
                    />
                    <Button
                        mode="primary"
                    >
                        {t('send')}
                    </Button>
                    <TextInput
                        id="otpInput"
                        type='password'
                        bottomText={t('enterTheCode')}
                    />
                    <Button
                        mode="secondary"
                    >
                        {t('approve')}
                    </Button>
                </div>
                <div className={styles.takanon}>
                    <div style={{paddingInlineEnd:"5px"}}>©</div>
                    <div>
                        {t('takanon')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;