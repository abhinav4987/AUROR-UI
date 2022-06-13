import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from '../src';

const meta: Meta = {
  title: 'Input',
  component: Input,
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


    
const Template: Story<InputProps> = args => (
    <div style={{
        width: '400px',
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        backgroundColor: '#737373'
    }}>
        <Input {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {};