import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onClick }) => {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="checkbox"
                id={id}
                checked={checked}
                onClick={onClick}
            />
            {label && <label>
                {label}
            </label>}
        </div>
    );
};

export default Checkbox;