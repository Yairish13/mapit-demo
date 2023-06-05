import styles from './RadiosAnswerRange.module.css';
import RadioRange from '@components/RadioRange/RadioRange';

const RadiosAnswerRange = ({ textOne, textTwo, name, handleCheck, isError }) => {
    return (
        <div className={`${styles.container} answer ${isError ? 'error' : ''}`}>
            <div className={styles.column}>
                {textOne}
            </div>
            <div className={styles.column}>
                <RadioRange name={name} onChange={(e) => handleCheck(e, name)} />
            </div>
            <div className={styles.column}>
                {textTwo}
            </div>
        </div>
    )
}

export default RadiosAnswerRange