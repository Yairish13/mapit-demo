
import styles from './RadioButton.module.css'

const RadioButton = ({ id, checked }) => {
    return (
        <input
            type='radio'
            id={id}
            checked={checked}
            className={styles.radioBtn}
        />
    )
}

export default RadioButton