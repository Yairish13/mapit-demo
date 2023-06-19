'use client';
import { useTranslation } from '@app/i18n/client';
import { useEffect, useState } from 'react'
import styles from './Login.module.css';
import Button from '@components/Button/Button';
import Checkbox from '@components/Checkbox/Checkbox';
import TextInput from '@components/TextInput/TextInput'
import { cellphonePattern, handleRecaptcha, otpPattern, recaptchaAction } from '@utils';
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { useFetch } from '@hooks/useFetch';

const Login = ({ lng }) => {
    const { t } = useTranslation(lng);
    const router = useRouter();
    const [otpIsOn, setOtpIsOn] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [areaCode, setAreaCode] = useState('972')
    const { register, setValue, handleSubmit, setError, formState: { errors } } = useForm({
        mode: 'any',
    });
    const { isLoading, data, fetchData } = useFetch();
    const onSubmitPhone = async (data) => {
        const { phoneLoginInput } = data;
        const isRecaptchaPass = await handleRecaptcha(
            recaptchaAction,
            process.env.NEXT_PUBLIC_RECAPTCHA_KEY
        );
        console.log(isRecaptchaPass,'isRecaptchaPass');
        if (isRecaptchaPass) {
            await fetchData(`http://localhost:1337/api/auth/phone/callback?phoneNumber=${phoneLoginInput}&project=1`);
        } else {
            alert("Recaptcha verification fail");
        }
    };

    const handleChange = (e) => {
        if (e.target.id === 'rememberMeCheckbox') {
            setValue('rememberMeCheckbox', e.target.checked);
            setIsChecked((prev) => !prev)
        }
        else setValue(e.target.id, e.target.value);
    }
    const handleAreaCode = (areaCode) => {
        setAreaCode(areaCode);
    }
    const handleBefore = async (data) => {
        // const { otpInput } = data;
        // await fetchData(`${process.env.LOGIN_URL}${phoneLoginInput}&project=1&code=${otpInput}`);
        router.push(`${lng}/terms`);
    }

    useEffect(() => {
        console.log(data);
        if (data?.success) setOtpIsOn(true)
        else if (data?.error) setError('phoneLoginInput', { type: 'custom' });
    }, [data])
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
                        errorText={
                            errors.phoneLoginInput && errors.phoneLoginInput.type === 'required' ? t('pages.login.required') :
                                errors.phoneLoginInput && errors.phoneLoginInput.type === 'pattern' ? t('pages.login.patternErr')
                                    : t('pages.login.loginErr')}
                        onChange={handleChange}
                        maxLength="12"
                        placeholder={t('pages.login.inputExample')}
                        areaCode={true}
                        handleAreaCode={handleAreaCode}
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
                    loading={isLoading}
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
                            error={errors.otpInput ? errors.otpInput : false}
                            errorText={
                                errors.otpInput && errors.otpInput.type === 'required' ? t('pages.login.otpRequired') :
                                    errors.otpInput && errors.otpInput.type === 'pattern' ? t('pages.login.otpPatternErr')
                                        : t('pages.login.otpLoginErr')}
                            onChange={handleChange}
                            lng={lng}
                            placeholder={t('pages.login.otpExample')}
                            maxLength={6}
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