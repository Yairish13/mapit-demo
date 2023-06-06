import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange, error, errorText, name, index, register }) => {
    const handleChange = (e) => {
        onChange && onChange(e, name, index);
    }
    return (
        <div>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="checkbox"
                    id={`${id}_${index}`}
                    checked={checked}
                    onChange={(e) => handleChange(e)}
                    register={register}
                />
                {label && <label htmlFor={`${id}_${index}`} className={styles.label}>
                    {label}
                </label>}
            </div>
        </div>

    );
};

export default Checkbox;