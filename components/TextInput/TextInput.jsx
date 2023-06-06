"use client"
import './TextInput.css'
import Eye from '../../public/assets/icons/eye.svg'
import { useEffect, useState } from 'react'
import AreaCodeSelect from '@components/AreaCodeSelect/AreaCodeSelect'

const TextInput = ({ id, type, onChange, disabled, placeholder, value, bottomText, maxLength, register, error, errorText, lng, areaCode, handleAreaCode }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e)
        }
    }
    const [passwordType, setPasswordType] = useState("");

    const handleShowPassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    useEffect(() => {
        if (type == 'password') {
            setPasswordType('password')
        }
    }, [])
    return (
        <div className='inputContainer'>
            <div className={type == 'password' ? 'textAndArea password' : 'textAndArea'}>
                <input
                    id={id}
                    type={passwordType ? passwordType : 'search'}
                    onChange={handleChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    maxLength={maxLength}
                    register={register}
                    value={value}
                />
                {areaCode && <AreaCodeSelect handleAreaCode={handleAreaCode} value={972} />}
                {type == 'password' && <div> <Eye className={passwordType == 'password' ? `eyeSvg ${lng}` : `eyeSvg ${lng} visible`} onClick={handleShowPassword} /> </div>}
            </div>
            {bottomText && <div className='bottomText'>
                {bottomText}
            </div>}
            {error && <div className='errDiv'>{errorText}</div>}
        </div>
    )
}

export default TextInput