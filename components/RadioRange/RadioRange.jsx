import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadioRange.module.css'
import { useState } from 'react'
const RadioRange = ({ name,onChange }) => {
    const [selected, setSelected] = useState('');
    const handleChange = (e) => {
        setSelected(e.target.id)
        onChange(e.target.id)
    }
    console.log(selected);
    return (
        <div className={styles.container}>
            <div className={styles.rightContainer}>
                <div>1</div>
                <RadioButton id="1" name={name} onChange={handleChange} />
            </div>
            <div className={styles.barContainer}>
                <div className={selected === '1' ? `${styles.rightBar}  ${styles.checked}` : styles.rightBar}></div>
                <div className={selected === '2' ? `${styles.leftBar}  ${styles.checked}` : styles.leftBar}></div>
            </div>
            <div className={styles.rightContainer}>
                <div>2</div>
                <RadioButton id="2" name={name} onChange={handleChange} />
            </div>
        </div>
    )
}

export default RadioRange