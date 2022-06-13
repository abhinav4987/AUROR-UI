import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toast, ToastProps } from '../src';

const meta: Meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;


    
const Template: Story<ToastProps> = args => <Toast {...args} />;

export const Default = Template.bind({});

Default.args = {};