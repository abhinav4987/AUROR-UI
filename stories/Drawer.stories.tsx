import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer,DrawerProps } from '../src';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer,
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


    
const Template: Story<DrawerProps> = args => <Drawer {...args} />;

export const Default = Template.bind({});

Default.args = {};