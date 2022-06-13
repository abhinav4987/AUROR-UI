import React, { FC, HTMLAttributes, useRef, useState, useEffect } from 'react';
// import classNames from 'classnames';
import './input.module.css';


export interface InputProps extends HTMLAttributes<HTMLInputElement> { 
  value: string  
  label: string
  variant: 'outlined' | "bottom-outlined",
  backgroundColor: string,
  error?: string;
  borderColor?: string,
  textColor: string;
}

export const Input: FC<InputProps> = (props:InputProps) =>{
    const {
        value = '', 
        label,backgroundColor='', 
        variant='bottom-outlined',
        error=null,
        borderColor='',
        textColor=''
    } = props;
    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const [labelClass, setLabelClass] = useState('input-label-empty'); 
    useEffect(() =>{
        if(value === '') {
            setLabelClass('input-label-empty')
        } else {
            setLabelClass('input-label')
        }
    },[value]);
    const inputFocusHandler = () => {
        setLabelClass('input-label');
    };

    const inputBlurHandler = () =>{
        if(value === '')
        setLabelClass('input-label-empty');
    }
    return(
        <div className="form-control">
            <label 
                className={labelClass} 
                ref={labelRef}
                style={{
                    color: textColor
                }}
            >{label}</label>
            <input 
                className={`input-field input-field-${variant}`} 
                ref={inputRef} 
                onFocus={inputFocusHandler} 
                onBlur={inputBlurHandler} 
                value={value} 
                style={{
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    color: textColor
                }}
            />
            {error && <span className='input-error'>&#9888;{' '}{error}</span>}
        </div>
    )
}