"use client"
import styles from './Button.module.css';

const Button = ({ mode, id, onClick, disabled,type, children }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(id);
        }
    };
    const buttonClass = `${styles[mode]} ${disabled ? 'disabled' : ''}`;

    return (
        <button
            id={id}
            type={type}
            className={buttonClass}
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button >
    );
};

export default Button;