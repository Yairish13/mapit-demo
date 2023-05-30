import styles from './RadiosAnswerRange.module.css';
import RadioRange from '@components/RadioRange/RadioRange';

const RadiosAnswerRange = ({ textOne, textTwo }) => {
    return (
        <div className={`${styles.container} answer`}>
            <div className={styles.column}>
                {textOne}
            </div>
            <div className={styles.column}>
                <RadioRange />
            </div>
            <div className={styles.column}>
                {textTwo}
            </div>
        </div>
    )
}

export default RadiosAnswerRange