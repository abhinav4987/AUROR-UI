import React, { FC, ReactElement, JSXElementConstructor } from 'react';
import { Backdrop } from '../backdrop';

import './modal.module.css';



export interface ModalProps  {
    displayModal : boolean,
    children: ReactElement<any, string | JSXElementConstructor<any>>
    position: 'middle' | 'top-middle' | 'bottom-middle'  
    borderRadius: 'none' | 'small' | 'medium' | 'large'
    backgroundColor: string,
    closeModal: Function
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        displayModal = false,
        children, 
        position = 'middle', 
        backgroundColor = '', 
        borderRadius='none',
        closeModal
    } = props;
    
    return displayModal ? (
       <>
            <div 
                className={`modal modal-${position} border-radius-${borderRadius}`}
                style={{
                    backgroundColor: backgroundColor,
                }}
            >
                {children}
            </div>
            <Backdrop onClick={closeModal} />
       </>
    ) : (<></>)
};
