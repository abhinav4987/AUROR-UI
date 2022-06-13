import React, { FC } from 'react';
import  './backdrop.module.css';


export interface BackdropProps  {
  onClick ?: Function
  backDropColor?: string,
}



export const Backdrop: FC<BackdropProps> = (props) => {
  
  const {onClick = ()=>{}, backDropColor} = props;
  const handleClick = () => {
    onClick();
  }
  return (
      <div 
        onClick={handleClick} 
        className='backdrop' 
        style={{
          backgroundColor: backDropColor
        }}
      />
  );
};