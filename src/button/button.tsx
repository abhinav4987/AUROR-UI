import React, { FC } from 'react';
import classNames from 'classnames';
import  './styles.module.css';

export interface ButtonProps  {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  label: string,
  onClick: Function,
  type?: "default" | "dark" | "secondary",
  color?: string,
  backgroundColor?: string, 
  roundedType?: 'small' | 'medium' | 'large' | 'extralarge'
  variant?: 'outlined' | 'filled'
  size: 'normal' | 'large',
  disabled: boolean,
}



export const Button: FC<ButtonProps> = (props:ButtonProps) => {
    
    const {
        label, 
        onClick, 
        type = '', 
        color= '', 
        backgroundColor='',
        roundedType='',
        variant = '',
        size,
        disabled
    } = props;

    const buttonClass = classNames({
        [`btn-${size}`] : true,
        'customButton': !disabled,
        'customButton-disabled': disabled,
        'defualtButton': type == 'default' || type == '',
        'secondaryButton': type == 'secondary',
        'darkButton': type == 'dark',
        'smallRounded': roundedType == 'small' || roundedType == '',
        'mediumRounded': roundedType == 'medium',
        'largeRounded': roundedType == 'large',
        'extralargeRounded' : roundedType === 'extralarge',
        'outlined' : variant === 'outlined',
        'filled': variant == 'filled' || type == ''
    });

    const onClickHandler = () => {
        if(!disabled)
        onClick();
    };
  return (
      <div className='buttonWrapper' >
          <button 
            className={buttonClass}
            style={{
                color: color,
                backgroundColor: backgroundColor
            }}
            onClick={onClickHandler}
        >
            {label}
        </button>
          
      </div>
  );
};
