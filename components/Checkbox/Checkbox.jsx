import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange, error, errorText, name, index }) => {
    return (
        <div>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="checkbox"
                    id={id}
                    
                    onChange={(e) => onChange(e, index, name)}
                />
                {label && <label>
                    {label}
                </label>}
            </div>
        </div>

    );
};

export default Checkbox;