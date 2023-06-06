"use client"
import styles from './RadioButton.module.css'

const RadioButton = ({ id, index, checked, register, onChange, name }) => {
    const handleChange = (e) => {
        if (onChange) onChange(e, index, name);
    }
    return (
        <input
            type='radio'
            id={id}
            name={name}
            checked={checked}
            className={styles.radioBtn}
            onChange={(e) => handleChange(e)}
            register={register}
        />
    )
}

export default RadioButton