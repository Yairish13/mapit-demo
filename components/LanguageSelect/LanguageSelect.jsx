"use client"
import styles from './LanguageSelect.module.css';
import { languages } from '../../app/i18n/settings'
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LanguageSelect = ({ lng }) => {
    const { t } = useTranslation();
    const router = useRouter()
    const pathname = usePathname();
    const handleChange = (e) => {
        let splitted = pathname.split('/');
        const restPath = splitted.slice(2, splitted.length).join('/')
        router.push(`${e.target.value}/${restPath}`);
    }
    console.log(lng, 'lng');
    let arr = lng === 'en' ? ['en', 'he'] : languages;
    return (
        <div>
            <select className={styles.languageSelect} onChange={(e) => handleChange(e)} name="language" id="language" form="carform">
                {arr.map((el, index) => (
                    <option value={el} key={index}>{el === 'he' ? t('global.hebrew') : t('global.english')}</option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelect