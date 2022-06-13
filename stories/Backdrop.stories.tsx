import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Backdrop, BackdropProps } from '../src';

const meta: Meta = {
  title: 'Backdrop',
  component: Backdrop,
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


    
const Template: Story<BackdropProps> = args => <Backdrop {...args} />;

export const Default = Template.bind({});

Default.args = {};