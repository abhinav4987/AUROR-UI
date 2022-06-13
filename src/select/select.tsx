import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import { ReactChild } from 'react';
import './select.module.css';


export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactChild,
    value: string,
    label: string,
    inputBackgroundColor: string,
    borderColor: string,
    listBackgroundColor: string,
    labelColor: string,
    inputColor: string,
}

export const Select: FC<SelectProps> = (props) => {
    const {
        label, 
        value='', 
        children, 
        inputBackgroundColor='', 
        borderColor='', 
        listBackgroundColor='',
        labelColor='',
        inputColor=''
    } = props;
    const [labelClass, setLabelClass] = useState('select-input-label-empty'); 
    const [selectListClass, setSelectListClass] = useState('select-option-list select-option-list-close');
    useEffect(() =>{
        if(value === '') {
            setLabelClass('select-input-label-empty')
        } else {
            setLabelClass('select-input-label')
        }
    },[value]);
    const inputFocusHandler = () => {
        setLabelClass('select-input-label');
        setSelectListClass('select-option-list select-option-list-open');
    };

    const inputBlurHandler = () =>{
        if(value === '')
        setLabelClass('select-input-label-empty');
        setSelectListClass('select-option-list select-option-list-close');
    }

    return (
      <div 
        className='select-input'
      >
          {/* the input */}
            <div className="form-control">
                {label !== '' && <label 
                                    className={labelClass}
                                    style={{
                                        color: labelColor
                                    }} 
                                >{label}</label>}
                <input 
                    className="select-input-field" 
                    onFocus={inputFocusHandler} 
                    onBlur={inputBlurHandler} 
                    value={value} 
                    style={{
                        backgroundColor: inputBackgroundColor,
                        borderColor: borderColor,
                        color: inputColor
                    }}
                />

            </div>
          {/* the list */}
            <ul className={selectListClass}
                style={{
                    backgroundColor: listBackgroundColor
                }}
            >
                {children}
            </ul>
      </div>
  )
};
