"use client"
import styles from './LanguageSelect.module.css';
import { languages } from '../../app/i18n/settings'
import Link, { usePathname, useRouter } from 'next/navigation';

const LanguageSelect = ({ lng }) => {
    const router = useRouter()
    const pathname = usePathname();
    const handleChange = (e) => {
        let splitted = pathname.split('/');
        const path = `/${e.target.value}/${splitted[splitted.length - 1]}`;
        router.push(path)
    }
    let arr = lng === 'en' ? ['en', 'he'] : languages;
    return (
        <div>
            <select className={styles.languageSelect} onChange={(e) => handleChange(e)} name="language" id="language" form="carform">
                {arr.map((el, index) => (
                    <option value={el} key={index}>{el === 'he' ? 'Hebrew' : 'English'}</option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelect