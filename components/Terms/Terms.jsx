"use client"
import Checkbox from '@components/Checkbox/Checkbox'
import styles from './Terms.module.css'
import Button from '@components/Button/Button'
import Link from 'next/link';
import { useTranslation } from '@app/i18n/client';
import { useRouter } from 'next/navigation';

const Terms = ({ lng }) => {
    const router = useRouter()
    const { t } = useTranslation(lng)

    const handleRoute = () => {
        router.push('/before')
    }
    return (
        <div className="container-content">
            <div className={styles.container}>
                <div>
                    <span className={styles.header}>
                        {t('header')}
                    </span>
                </div>
                <div>
                    <Link className={styles.text} href={`/${lng}/terms/full`}>
                        <span className={styles.text}>
                            {t('readTakanon')}
                        </span>
                    </Link>
                </div>
                <Checkbox
                    label={t('get')}
                />
                <div>
                    <Button mode="tertiary" onClick={handleRoute}>
                        {t('continue')}
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default Terms