"use client"
import './CustomSelect.css';
import React, { useEffect, useRef, useState } from 'react';
import Checkbox from '@components/Checkbox/Checkbox';
import ArrowDown from '../../public/assets/icons/arrowDown.svg'

const CustomSelect = ({
    options,
    onClick,
    placeholder,
    withArrow,
    withNoHeader = false,
    selectedOptions,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const handleOptionClick = (option, e) => {
        onClick(option, e)
    };
    const isSelected = (id) => {
        if (selectedOptions) return selectedOptions.some((option) => option.id === id)
    }
    const handleClick = () => {
        setIsOpen(prev => !prev)
    }
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen && setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <>
            {!withNoHeader ? <div className="custom-select" ref={ref}>
                <div className={isOpen ? "selected-options open" : "selected-options"} onClick={handleClick}>
                    <div className={!withArrow ? 'headerDivNoArrow' : 'headerDivArrow'}>
                        <div>
                            {placeholder}
                        </div>
                        {withArrow && <ArrowDown className={isOpen ? 'arrow-up' : 'arrow-down'} />}
                    </div>
                </div>
                {(isOpen || !withArrow) &&
                    <div className={!withArrow ? 'options smallWindow' : "options"} >
                        {options.map((option, index) => (
                            <div key={option.id} className={isSelected(option.id) ? "option selected" : 'option'}>
                                {option.value}
                                <Checkbox
                                    onChange={(e) => handleOptionClick(option, e)}
                                    checked={isSelected(option.id)}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div> :
                <div className={"options noHeader"}>
                    {options.map((option, index) => (
                        <div key={option.id} className={isSelected(option.id) ? "option selected" : 'option'}>
                            {option.value}
                            <Checkbox
                                onClick={() => handleOptionClick(option)}
                                checked={isSelected(option.id)}
                            />
                        </div>
                    ))}
                </div>}
        </>
    );
};

export default CustomSelect;
