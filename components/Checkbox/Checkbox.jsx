import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange, error, errorText, name, index }) => {
    const handleChange = (e) =>{
        onChange && onChange(e, index, name);
    }
    return (
        <div>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="checkbox"
                    id={id}
                    
                    onChange={(e) => handleChange(e)}
                />
                {label && <label>
                    {label}
                </label>}
            </div>
        </div>

    );
};

export default Checkbox;