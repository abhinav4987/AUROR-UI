import React, { FC, HTMLAttributes, ReactChild } from 'react';

export {Button, ButtonProps} from './button';
export {Backdrop, BackdropProps} from './backdrop';
export {Drawer, DrawerProps} from './drawer';
export {Tooltip, TooltipProps} from './tooltip';
export {Input, InputProps} from './input'
export {Rating, RatingProps} from './rating';
export {Select, SelectProps} from './select';
export { Modal, ModalProps} from './modal'
export {Toast, ToastProps} from './toast';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};
  