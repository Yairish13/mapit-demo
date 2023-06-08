"use client"
import styles from './LanguageSelect.module.css';
import { languages } from '../../app/i18n/settings'
import Link, { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from '@app/i18n/client';

const LanguageSelect = ({ lng }) => {
    const { t } = useTranslation(lng);
    const router = useRouter()
    const pathname = usePathname();
    const handleChange = (e) => {
        console.log(lng, 'lng');
        let splitted = pathname.split('/');
        let path;
        if (splitted[splitted.length - 1] === 'he' || splitted[splitted.length - 1] === 'en') path = `/${e.target.value}/`
        else path = `/${e.target.value}/${splitted[splitted.length - 1]}`;
        router.push(path)
    }
    console.log(lng, 'select');
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