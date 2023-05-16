"use client"
import './CustomSelect.css';
import React, { useState } from 'react';
import Checkbox from '@components/Checkbox/Checkbox';
import arrowDown from '@public/assets/icons/arrowDown.svg'
import Image from 'next/image';

const options = [
    { id: 1, value: 'דייויד בקהאם' },
    { id: 2, value: 'רונאלדו' },
    { id: 3, value: 'אנתוני הופקינס' },
    { id: 4, value: 'סטניסלבסקי' },
    { id: 5, value: 'מ\' צ\'כוב' },
    { id: 6, value: 'משה מושיקו' },
    { id: 7, value: 'יואל יואליהו' },
    { id: 8, value: 'דוד דוידי' },
    { id: 9, value: 'יוסי יוסי' },
    { id: 10, value: 'ברוך אשר' },
    { id: 11, value: 'יצחק גבר' },
    { id: 12, value: 'יעקב כהן' },
    { id: 13, value: 'רועי הרנפלד' },
    { id: 14, value: 'דוד צור' },
    { id: 15, value: 'ריי לוי' },
    { id: 16, value: 'אורן שמעוני' },
    { id: 17, value: 'תכלת ים' },
    { id: 18, value: 'סיגל רועי' },
    { id: 19, value: 'ליאת חורש' },
    { id: 20, value: 'עמית כהן' },
];

const CustomSelect = ({
    // options,
    onClick,
    placeholder,
    withArrow,
    withNoHeader = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleOptionClick = (option) => {
        console.log(option)
        const index = selectedOptions.findIndex((item) => item.id === option.id);

        if (index > -1) {
            setSelectedOptions((prevOptions) => {
                const updatedOptions = [...prevOptions];
                updatedOptions.splice(index, 1);
                return updatedOptions;
            });
        } else {
            setSelectedOptions((prevOptions) => [...prevOptions, option]);
        }
    };
    const isSelected = (id) => {
        return selectedOptions.find((option) => option.id === id)
    }
    const handleClick = () => {
        console.log('clicked')
        setIsOpen(prev => !prev)
    }
    return (
        <>
            {!withNoHeader ? <div className="custom-select">
                <div className={isOpen ? "selected-options open" : "selected-options"} onClick={handleClick}>
                    <div className={!withArrow ? 'headerDivNoArrow' : 'headerDivArrow'}>
                        <div>
                            {placeholder}
                        </div>
                        {withArrow && <Image className={isOpen ? 'arrow-up' : 'arrow-down'} src={arrowDown.src} alt="" width="15" height="15" />}
                    </div>
                </div>
                {isOpen &&
                    <div className={!withArrow ? 'options smallWindow' : "options"}>
                        {options.map((option, index) => (
                            <div key={option.id} className={isSelected(option.id) ? "option selected" : 'option'}>
                                {option.value}
                                <Checkbox
                                    onClick={() => handleOptionClick(option)}
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
