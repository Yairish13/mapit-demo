'use client';
import { useEffect, useState } from 'react'
import styles from './Login.module.css';
import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import TextInput from '@components/TextInput/TextInput'
import { cellphonePattern, otpPattern } from '@utils';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { useTranslation } from '@app/i18n/client';

const Login = ({ lng }) => {
    const { t } = useTranslation(lng);
    const router = useRouter();
    const [otpIsOn, setOtpIsOn] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'any',
    });

    const onSubmitPhone = (aa) => {
        setOtpIsOn(true)
    }

    const handleChange = (e) => {
        if (e.target.id === 'rememberMeCheckbox') {
            setValue('rememberMeCheckbox', e.target.checked);
            setIsChecked((prev) => !prev)
        }
        else setValue(e.target.id, e.target.value);
    }
    const handleBefore = () => {
        router.push(`${lng}/terms`);
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className={styles.centeredLogin}>
            <h2 className={`${styles.loginHeader} title`}>
                {t('pages.login.phoneValidation')}
            </h2>
            {!otpIsOn && <>
                <div className={styles.textField}>
                    <TextInput
                        id="phoneLoginInput"
                        name="phoneLoginInput"
                        type='number'
                        bottomText={t('pages.login.smsWillBeSent')}
                        refs={{
                            ...register(`phoneLoginInput`, {
                                required: true,
                                pattern: cellphonePattern,
                            })
                        }}
                        error={errors.phoneLoginInput ? errors.phoneLoginInput : false}
                        errorText={errors.phoneLoginInput ? t('pages.login.loginErr') : ''}
                        onChange={handleChange}
                        maxLength="12"
                        placeholder={t('pages.login.inputExample')}
                    />
                </div>
                <Checkbox
                    id="rememberMeCheckbox"
                    label={t('pages.login.rememberTheNumber')}
                    refs={{ ...register(`rememberMeCheckbox`) }}
                    onChange={handleChange}
                    checked={isChecked}
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
                            refs={{
                                ...register(`otpInput`, {
                                    required: true,
                                    pattern: otpPattern,
                                })
                            }}
                            onChange={handleChange}
                            lng={lng}
                            placeholder={t('pages.login.otpExample')}
                            maxLength={6}
                        />
                    </div>

                    <Button
                        mode="secondary"
                        onClick={handleBefore}
                    >
                        {t('pages.login.approve')}
                    </Button>
                </>
            }
        </div>
    )
}

export default Login