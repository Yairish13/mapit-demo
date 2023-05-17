'use client';
import { useEffect, useState } from 'react'
import styles from './Login.module.css';
import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import TextInput from '@components/TextInput/TextInput'
import { cellphonePattern } from '@utils';
import { useTranslation } from '@app/i18n/client';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

const Login = ({ lng }) => {
    const { t } = useTranslation(lng);
    const router = useRouter();
    const [isDetailsError, setsIsDetailsError] = useState(false);
    const [isCodeError, setIsCodeError] = useState(false);
    // const { register, handleSubmit, watch, formState: { errors } } = useForm({
        //     mode: 'any,'
        // });
        const handleClick = (aa) => {
            console.log(aa, 'aa')
        setsIsDetailsError((prev) => !prev)
    }
    
    const handleChange = (e) => {
        console.log(e, 'FFFFFFFFFF')
    }
    const handleBefore = () =>{
        router.push('/terms')
    }
    
    return (
        <div className={styles.centeredLogin}>
            <h2 className={styles.loginHeader}>
                {t('phoneValidation')}
            </h2>
            <div className={styles.textField}>
                <TextInput
                    id="phoneLoginInput"
                    type='number'
                    bottomText={t('smsWillBeSent')}
                    onChange={handleChange}
                    maxLength="12"
                // {...register("phoneLoginInput", { required: true })}
                />
                {isDetailsError && <div className={styles.loginErr}>{t('loginErr')}</div>}
            </div>
            <Checkbox
                label={t('rememberTheNumber')}
            />
            <Button
                mode="primary"
                type="submit"
                id='submitPhone'
                onClick={handleClick}
            >
                {t('send')}
            </Button>
            <div className={styles.textField}>
                <TextInput
                    id="otpInput"
                    type='password'
                    bottomText={t('enterTheCode')}
                />
                {isCodeError && <div className={styles.loginErr}>{t('codeErr')}</div>}
            </div>

            <Button
                mode="secondary"
                onClick={handleBefore}
            >
                {t('approve')}
            </Button>
        </div>
    )
}

export default Login