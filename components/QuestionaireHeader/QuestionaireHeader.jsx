import CircleProgress from '@components/CircleProgress/CircleProgress';
import styles from './QuestionaireHeader.module.css';
import { useTranslation } from 'react-i18next'

const QuestionaireHeader = ({ title }) => {
    const { t } = useTranslation()

    return (
        <div className={styles.headerDiv}>
            <h3 className="title">{title}</h3>
            <div className={styles.progress}>
                {t("global.progress")}
                <CircleProgress />
            </div>
        </div>
    )
}

export default QuestionaireHeader