import Button from '@components/Button/Button';
import styles from './page.module.scss';
import { useTranslation } from '@app/i18n';
import clsx from 'clsx';
import TextInput from '@components/TextInput/TextInput';

const Page = async ({ params: { lng } }) => {
    const { t } = await useTranslation(lng);

    const titleClasses = clsx(styles.header, 'title');
    const conatainerClasses = clsx(styles.container, 'container');

    return (
        <div className={conatainerClasses}>
            <h2 className={titleClasses}>{t('pages.before.hello')}</h2>
            <div className={styles.info}>
                <p>{t('pages.before.paragraph_first')}</p>
                <p>{t('pages.before.paragraph_second')}</p>
                <p>{t('pages.before.paragraph_three')}</p>
            </div>

            <div className={styles.list}>
                <p>{t('pages.before.paragraph_four')}</p>
                <ul>
                    <li>{t('pages.before.ulOne')}</li>
                    <li>{t('pages.before.ulTwo')}</li>
                    <li>{t('pages.before.ulThree')}</li>
                    <li>{t('pages.before.ulFour')}</li>
                </ul>
            </div>

            <div className={styles.end}>
                <p>{t('pages.before.textFive')}</p>
                <p>{t('pages.before.textSix')}</p>
                <p>{t('pages.before.textEight')}</p>
            </div>

            <div className={styles.manager}>
                <div className={styles.textInput}>
                    <TextInput
                        placeholder="כמו ג'ון סמית'"
                        bottomText='שם'
                    />
                    <TextInput
                        placeholder="מנהל לדוגמה"
                        bottomText='עמדה'
                    />
                </div>
                <Button mode="tertiary">{t('global.start')}</Button>
            </div>
        </div>
    )
}

export default Page;