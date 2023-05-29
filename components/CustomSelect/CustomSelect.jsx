"use client"
import './CustomSelect.css';
import React, { useEffect, useState } from 'react';
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
    console.log(options);
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionClick = (option, e) => {
        onClick(option, e)
        // const index = selectedOptions.findIndex((item) => item.id === option.id);

        // if (index > -1) {
        //     setSelectedOptions((prevOptions) => {
        //         const updatedOptions = [...prevOptions];
        //         updatedOptions.splice(index, 1);
        //         return updatedOptions;
        //     });
        // } else {
        //     setSelectedOptions((prevOptions) => [...prevOptions, option]);
        // }
    };
    const isSelected = (id) => {
        return selectedOptions.find((option) => option.id === id)
    }
    const handleClick = () => {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {

        return () => {

        }
    }, [])
    return (
        <>
            {!withNoHeader ? <div className="custom-select">
                <div className={isOpen ? "selected-options open" : "selected-options"} onClick={handleClick}>
                    <div className={!withArrow ? 'headerDivNoArrow' : 'headerDivArrow'}>
                        <div>
                            {placeholder}
                        </div>
                        {withArrow && <ArrowDown className={isOpen ? 'arrow-up' : 'arrow-down'} />}
                    </div>
                </div>
                {isOpen &&
                    <div className={!withArrow ? 'options smallWindow' : "options"}>
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
