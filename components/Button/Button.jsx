"use client"
import styles from './Button.module.css';

const Button = (props) => {
    const {
        mode,
        id,
        onClick,
        disabled,
        type,
        children,
        loading } = props;
    const handleClick = (e) => {
        if (onClick) {
            onClick(id);
        }
    };
    const buttonClass = `${styles[mode]} ${styles.btn} ${disabled ? 'disabled' : ''}`;
    console.log(loading);
    // console.log(mode, id, onClick, disabled, type, children, loading);
    return (
        <button
            id={id}
            type={type}
            className={buttonClass}
            disabled={disabled}
            onClick={(e) => handleClick(e)}
        >
            {loading ?
                <div className={styles.loader}></div>
                : children}
        </button >
    );
};

export default Button;