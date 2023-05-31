"use client"
import styles from './Button.module.css';

const Button = ({ mode, id, onClick, disabled, type, children }) => {
    const handleClick = (e) => {
        console.log('alaa');
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
            onClick={(e) => handleClick(e)}
        >
            {children}
        </button >
    );
};

export default Button;