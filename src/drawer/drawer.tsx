import React, { FC, HTMLAttributes, ReactChild, Fragment, useState } from 'react';
import classNames from 'classnames';
import {Backdrop} from '../';
import './drawer.module.css';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
 
  children?: ReactChild;
  backgroundColor: string;
  anchor: "left" | "right" | "top" | "bottom"
  isOpen: boolean,
}

export const Drawer: FC<DrawerProps> = (props) => {
    const {backgroundColor, anchor, children, isOpen=false} = props;

    const [isVisible, setIsvisible] = useState(isOpen);
    const drawerClass = classNames({
        'drawer' : true,
        'leftDrawer': anchor === 'left',
        'rightDrawer': anchor === 'right',
        'topDrawer': anchor === 'top',
        'bottomDrawer': anchor === 'bottom',
    });

    const closeModal = () =>{
      setIsvisible(false);
    }
    return isVisible ? (
      <Fragment>
            <div 
                className={drawerClass}
                style={{
                    backgroundColor: backgroundColor,
                }}
            >
            {children}
            </div>
            <Backdrop onClick={closeModal}/>
      </Fragment>
  ) : <></>
};
