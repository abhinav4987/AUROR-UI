import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import {Error, Warning, Success, Info, Close} from './svg';
import './toast.module.css';


export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    autoClose : boolean,
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
    variant: 'success' | 'warning' | 'info' | 'error' 
    message: string,
    isOpen: boolean
}

export interface RootToastProps extends HTMLAttributes<HTMLDivElement> {
    message: string,
    autoClose: boolean,
    modalClasses: string,
    Icon: FC,
    onClose: Function
}

export const RootToast: FC< RootToastProps> = (props) => {
    const {
        message,
        autoClose,
        modalClasses,
        Icon,
        onClose
    } = props;
    const handleClose = () =>{
        onClose();
    };
    return (
        <div className={`${modalClasses}`}>
            <div className='toast-icon'>
                <Icon />
            </div>
            <p className='toast-message'>{message}</p>
            <div className='close-button' onClick={handleClose}>
                <Close/>
            </div>
            {autoClose && (<></>)}
        </div>
    )
}

export const Toast: FC<ToastProps> = (props) => {
    const {
        autoClose = false, 
        position, 
        variant,
        message,
        isOpen,
    } = props;
    
    const [displayToast, SetDisplayToast] = useState<boolean>(isOpen);

    useEffect(()=>{
        if(autoClose) {
            // type setTimeout for closing the toast
        } 
    },[]);

    useEffect(()=>{
         SetDisplayToast(isOpen)
    },[isOpen]);

    const closeModal = () => SetDisplayToast(false);

        if(variant === 'success') 
            return displayToast ?
            <RootToast 
                message={message}
                autoClose
                modalClasses={`toast toast-position-${position} toast-variant-${variant}`}
                onClose={closeModal}
                Icon={Success}
            /> : <></>
        else if(variant === 'info')
            return displayToast ?
            <RootToast 
                message={message}
                autoClose
                modalClasses={`toast toast-position-${position} toast-variant-${variant}`}
                onClose={closeModal}
                Icon={Info}
            /> : <></>
        else if(variant === 'error')
            return displayToast ? 
            <RootToast 
                message={message}
                autoClose
                modalClasses={`toast toast-position-${position} toast-variant-${variant}`}
                onClose={closeModal}
                Icon={Error}
            /> : <></>
        else (variant === 'warning')
            return displayToast ? 
            <RootToast 
                message={message}
                autoClose
                modalClasses={`toast toast-position-${position} toast-variant-${variant}`}
                onClose={closeModal}
                Icon={Warning}
            /> : <></>
};

