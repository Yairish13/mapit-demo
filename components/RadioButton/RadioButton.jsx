"use client"
import styles from './RadioButton.module.css'

const RadioButton = ({ id, checked }) => {
    const handleChange = () => {
        console.log('changed')
    }
    return (
        <input
            type='radio'
            id={id}
            checked={checked}
            className={styles.radioBtn}
            onChange={handleChange}
        />
    )
}

export default RadioButton