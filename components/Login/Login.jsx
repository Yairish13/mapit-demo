"use client";
import { useEffect, useState } from 'react'
import styles from './Login.module.css';
import mapitText from '@public/assets/images/mapitText.svg';
import gilboa from '@public/assets/images/gilboa.svg';
import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import TextInput from '@components/TextInput/TextInput'
import Image from 'next/image'
import { cellphonePattern } from '@utils';
import { useTranslation } from '@app/i18n/client';
import { useForm } from 'react-hook-form';

const Login = ({ lng }) => {
    const [isDetailsError, setsIsDetailsError] = useState(false)
    const [isCodeError, setIsCodeError] = useState(false)
    const { t } = useTranslation(lng, 'login-page');
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: 'any,'
    });

    const handleChange = (e) => {
        console.log(e, 'FFFFFFFFFF')
    }
    const handleAAA = (aa) => {
        console.log(aa, 'aa')
        setsIsDetailsError(prev => !prev)
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])
    return (
        <div>
            <div className={lng === 'he' ? `${styles.split} ${styles.left} ${styles.bgImage}` : `${styles.split} ${styles.right} ${styles.bgImage}`}>
                <div className={styles.centered}>
                    <Image src={mapitText.src} className={styles.mapitLogo} width={125} height={125} alt="mapit" />
                </div>
                <div className={styles.bottomText}>
                    <span>0508855300</span>
                    {' '}|{' '}
                    <span>
                        {/* {t('gilboaName')} */}
                    </span>
                    {' '}|{' '}
                    <span>
                        {t('gilboaMail')}
                    </span>
                </div>
            </div>

            <div className={lng === 'he' ? `${styles.split} ${styles.right}` : `${styles.split} ${styles.left}`}>
                <Image className={styles.logo} src={gilboa.src} width={100} height={60} />
                <div className={styles.centeredLogin}>
                    <h2 className={styles.loginHeader}>
                        {t('phoneValidation')}
                    </h2>
                    <div>
                        <TextInput
                            id="phoneLoginInput"
                            type='number'
                            bottomText={t('smsWillBeSent')}
                            onChange={handleChange}
                            maxLength="12"
                            {...register("phoneLoginInput", { required: true })}
                        />
                        {isDetailsError && <div className={styles.loginErr}>{t('loginErr')}</div>}
                    </div>
                    <Checkbox
                        label={t('rememberTheNumber')}
                    />
                    <Button
                        mode="primary"
                        type="submit"
                        onClick={handleAAA}
                    >
                        {t('send')}
                    </Button>
                    <div>
                        <TextInput
                            id="otpInput"
                            type='password'
                            bottomText={t('enterTheCode')}
                        />
                        {isCodeError && <div className={styles.loginErr}>{t('codeErr')}</div>}
                    </div>

                    <Button
                        mode="secondary"
                    >
                        {t('approve')}
                    </Button>
                </div>
                <div className={styles.takanon}>
                    <div style={{ paddingInlineEnd: "5px" }}>©</div>
                    <div>
                        {t('takanon')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login