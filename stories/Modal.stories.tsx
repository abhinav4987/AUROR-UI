import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from '../src';
const meta: Meta = {
  title: 'Modal',
  component: Modal,
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


    
const Template: Story<ModalProps> = args => (
  <Modal {...args}>
    <h1 style={{
      padding: '1rem'
    }}>The Modal</h1>
  </Modal>
)

export const Default = Template.bind({});

Default.args = {};