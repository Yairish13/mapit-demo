"use client"
import styles from './RadioButton.module.css'

const RadioButton = ({ id,index, checked, register, onChange,name }) => {
    const handleChange = (e) => {
        console.log('changed')
        onChange(e,index,name);
    }
    return (
        <input
            type='radio'
            id={id}
            checked={checked}
            className={styles.radioBtn}
            onChange={(e) => handleChange(e)}
            register={register}
        />
    )
}

export default RadioButton