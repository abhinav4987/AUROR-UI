import React, { FC } from 'react';
import './select.module.css';


export interface SelectItemProps  {
    onClick :Function,
    value: string,
    label: string
}

export const SelectItem: FC<SelectItemProps> = (props) => {
    const {onClick, value, label} = props;
    
    const clickHandler= () =>{
        onClick(value);
    }

    return (
      <div 
        className='select-item'
        onClick={clickHandler}
      >
        <span>{label}</span>    
      </div>
  )
};
