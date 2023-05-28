import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange, error, errorText }) => {
    return (
        <div>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="checkbox"
                    id={id}
                    checked={checked ? checked : false}
                    onChange={onChange}
                />
                {label && <label>
                    {label}
                </label>}
            </div>
        </div>

    );
};

export default Checkbox;