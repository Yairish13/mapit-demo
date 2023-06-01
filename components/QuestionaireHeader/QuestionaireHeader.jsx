import CircleProgress from '@components/CircleProgress/CircleProgress';
import styles from './QuestionaireHeader.module.css';

const QuestionaireHeader = ({ title }) => {
    return (
        <div className={styles.headerDiv}>
            <h3 className="title">{title}</h3>
            <CircleProgress />
        </div>
    )
}

export default QuestionaireHeader