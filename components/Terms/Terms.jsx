"use client"
import Checkbox from '@components/Checkbox/Checkbox'
import styles from './Terms.module.css'
import Button from '@components/Button/Button'
import Link from 'next/link';
import { useTranslation } from '@app/i18n/client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Terms = ({ lng }) => {
    const router = useRouter()
    const { t } = useTranslation(lng)
    const { register, setValue, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
    });
    const handleRoute = () => {
        router.push('/before')
    }
    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.id, e.target.checked);
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])
    return (
        <div className="container-content">
            <div className={styles.container}>
                <div>
                    <h2 className={`${styles.header} title`}>
                        {t('pages.terms.header')}
                    </h2>
                </div>
                <div className={styles.termsCheckbox}>
                    <Link target='_blank' className={styles.text} href={`/${lng}/terms/full`}>
                        <span className={styles.text}>
                            {t('pages.terms.readTakanon')}
                        </span>
                    </Link>
                    <Checkbox
                        id='readAndAcceptedTakanon'
                        refs={{
                            ...register(`readAndAcceptedTakanon`, {
                                required: true,
                            })
                        }}
                        onChange={handleChange}
                    // error={errors.readAndAcceptedTakanon ? errors.readAndAcceptedTakanon : false}
                    // errorText={errors.readAndAcceptedTakanon ?  : ''}
                    />
                </div>
                {errors && errors.readAndAcceptedTakanon && <div className={styles.errDiv}>{t('pages.terms.checkboxErr')}</div>}
                <div>
                    <Button mode="tertiary" onClick={handleSubmit(handleRoute)}>
                        {t('pages.terms.continue')}
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default Terms