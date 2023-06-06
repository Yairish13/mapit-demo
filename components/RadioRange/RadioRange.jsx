import RadioButton from '@components/RadioButton/RadioButton'
import styles from './RadioRange.module.css'
import { useState } from 'react'
const RadioRange = ({ name, onChange, register, required }) => {
    const [selected, setSelected] = useState('');
    const handleChange = (e) => {
        setSelected(e.target.id)
        onChange(e.target.id)
    }
    return (
        <div className={styles.container}>
            <div className={styles.rightContainer}>
                <div>1</div>
                <RadioButton id="1" name={name} onChange={handleChange} refs={{
                    ...register(`${name}`, {
                        required,
                    })
                }} />
            </div>
            <div className={styles.barContainer}>
                <div className={selected === '1' ? `${styles.rightBar}  ${styles.checked}` : styles.rightBar}></div>
                <div className={selected === '2' ? `${styles.leftBar}  ${styles.checked}` : styles.leftBar}></div>
            </div>
            <div className={styles.rightContainer}>
                <div>2</div>
                <RadioButton id="2" name={name} onChange={handleChange} refs={{
                    ...register(`${name}`, {
                        required,
                    })
                }} />
            </div>
        </div>
    )
}

export default RadioRange