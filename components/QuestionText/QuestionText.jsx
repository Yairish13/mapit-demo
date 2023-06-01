import styles from './QuestionText.module.css';

const QuestionText = ({ text, subText, number }) => {
    return (
        <div className='question'>
            <div className={styles.questionNumber}>
            </div>
            <div>
                <div>
                    {number}.
                    {text}
                </div>
                <div className={styles.subTextQuestion}>
                    {subText}
                </div>
            </div>
        </div>
    )
}

export default QuestionText