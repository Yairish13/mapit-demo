'use client';
import { useEffect, useState } from 'react'
import styles from './Login.module.css';
import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import TextInput from '@components/TextInput/TextInput'
import { cellphonePattern, otpPattern } from '@utils';
import { useForm } from 'react-hook-form';
import { useTranslation } from '@app/i18n/client';
import { useRouter } from "next/navigation";

const Login = ({ lng }) => {
    const { t } = useTranslation(lng);
    const router = useRouter();
    const [otpIsOn, setOtpIsOn] = useState(false);
    const { register,setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'any',
    });

    const onSubmitPhone = (aa) => {
        setOtpIsOn(true)
    }

    const handleChange = (e) => {
        console.log(e.target.id)
        setValue(e.target.id, e.target.value || e.target.checked);
    }
    const handleBefore = () => {
        router.push('/terms')
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])
    return (
        <div className={styles.centeredLogin}>
            <h2 className={styles.loginHeader}>
                {t('pages.login.phoneValidation')}
            </h2>
{!otpIsOn && <>   
            <div className={styles.textField}>
                <TextInput
                    id="phoneLoginInput"
                    name="phoneLoginInput"
                    type='number'
                    bottomText={t('pages.login.smsWillBeSent')}
                    {...register(`phoneLoginInput`, {
                        required: true,
                        pattern: cellphonePattern,
                    })}
                    error={errors.phoneLoginInput ? errors.phoneLoginInput : false}
                    errorText={errors.phoneLoginInput ? t('pages.login.loginErr') :'' }
                    onChange={handleChange}
                    maxLength="12"
                />
            </div>
            <Checkbox
            id="rememberMeCheckbox"
                label={t('pages.login.rememberTheNumber')}
                {...register(`rememberMeCheckbox`)}
                onClick={handleChange}
            />
            <Button
                mode="primary"
                type="submit"
                id='submitPhone'
                onClick={handleSubmit(onSubmitPhone)}
            >
                {t('pages.login.send')}
            </Button>
            </>}
            {otpIsOn &&
                <>
                    <div className={styles.textField}>
                        <TextInput
                            id="otpInput"
                            type='password'
                            bottomText={t('pages.login.enterTheCode')}
                            {...register(`otpInput`, {
                                required: true,
                                pattern: otpPattern,
                            })}
                            onChange={handleChange}
                            lng={lng}
                        />
                    </div>

                    <Button
                        mode="secondary"
                    onClick={handleSubmit(handleBefore)}
                    >
                        {t('pages.login.approve')}
                    </Button>
                </>
            }
        </div>
    )
}

export default Login