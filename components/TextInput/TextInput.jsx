"use client"
import { cellphonePattern } from '@utils';
import './TextInput.css'
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const TextInput = ({ id, type, onChange, disabled, placeholder, value, bottomText, maxLength,register }) => {
    return (
        <div className='container'>
            <input
                id={id}
                type={type ? type : 'search'}
                onChange={onChange}
                placeholder={placeholder || 'דוגמא +972 (XX) XXX XX XX'}
                disabled={disabled}
                maxLength={maxLength}
                ref={register && register(id, { required:true})}
            />
            {bottomText && <div className='bottomText'>
                {bottomText}
            </div>}
        </div>
    )
}

export default TextInput