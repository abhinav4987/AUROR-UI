import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';
import './tooltip.module.css';


export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
 
  children?: ReactChild;
  backgroundColor: string;
  anchor: "left" | "right" | "top" | "bottom"
  text: string
}

export const Tooltip: FC<TooltipProps> = (props) => {
    const {backgroundColor, anchor, text,  children} = props;
    const tooltipClass = classNames({
        'tooltiptext': true,
        'topTooltip': anchor == 'top',
        'bottomTooltip': anchor == 'bottom',
        'rightTooltip': anchor == 'right',
        'leftTooltip': anchor == 'left'
    })
    return (
      <div 
        className='tooltip'
        style={{
          backgroundColor : backgroundColor !== '' ? backgroundColor : '#444444'
        }}
      >
          {children}
          <span className={tooltipClass}>{text}</span>
      </div>
  )
};
