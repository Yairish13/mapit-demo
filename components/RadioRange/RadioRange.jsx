import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadioRange.module.css'
import { useState } from 'react'
const RadioRange = ({ name }) => {
    const [selected, setSelected] = useState('');
    const handleChange = (e) => {
        setSelected(e.target.id)
    }
    console.log(selected);
    return (
        <div className={styles.container}>
            <div className={styles.rightContainer}>
                <div>1</div>
                <RadioButton id="right" name={name} onChange={handleChange} />
            </div>
            <div className={styles.barContainer}>
                <div className={selected === 'right' ? `${styles.rightBar}  ${styles.checked}` : styles.rightBar}></div>
                <div className={selected === 'left' ? `${styles.leftBar}  ${styles.checked}` : styles.leftBar}></div>
            </div>
            <div className={styles.rightContainer}>
                <div>2</div>
                <RadioButton id="left" name={name} onChange={handleChange} />
            </div>
        </div>
    )
}

export default RadioRange