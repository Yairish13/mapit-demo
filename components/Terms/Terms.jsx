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
                        {t('pages.terms.header')}
                    </span>
                </div>
                <div className={styles.termsCheckbox}>
                    <Link target='_blank' className={styles.text} href={`/${lng}/terms/full`}>
                        <span className={styles.text}>
                            {t('pages.terms.readTakanon')}
                        </span>
                    </Link>
                    <Checkbox
                        
                    />
                </div>
                <div>
                    <Button mode="tertiary" onClick={handleRoute}>
                        {t('pages.terms.continue')}
                    </Button>
                </div>
            </div>

        </div >
    )
}

export default Terms