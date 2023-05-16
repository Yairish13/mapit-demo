import Button from '@components/Button/Button';
import styles from './page.module.scss';
import { useTranslation } from '@app/i18n';
import clsx from 'clsx';

const Page = async({ params: { lng } }) => {
    const { t } = await useTranslation(lng);

    const titleClasses = clsx(styles.header, 'title');

    return (
        <div className="container">
            <h2 className={titleClasses}>{t('hello')}</h2>
            <div className={styles.info}>
                <p>{t('pages.before.paragraph_first')}</p>
                <p>{t('pages.before.paragraph_second')}</p>
                <p>{t('pages.before.paragraph_three')}</p>
            </div>

            <div className={styles.list}>
                <p>{t('pages.before.paragraph_four')}</p>
                <ul>
                    <li>{t('ulOne')}</li>
                    <li>{t('ulTwo')}</li>
                    <li>{t('ulThree')}</li>
                    <li>{t('ulFour')}</li>
                </ul>
            </div>

            <div className={styles.end}>
                <p>{t('textFive')}</p>
                <p>{t('textSix')}</p>
                <p>{t('textEight')}</p>
            </div>

            <div className={styles.manager}>
                <Button mode="tertiary">{t('global.start')}</Button>
            </div>
        </div>
    )
}

export default Page;