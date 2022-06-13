import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectProps, } from '../src';
import { SelectItem } from '../src/select';
const meta: Meta = {
  title: 'Select',
  component: Select,
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


    
const Template: Story<SelectProps> = args => (
    <div style={{
        width: '400px',
        height: '400px',
        display: 'flex',
        paddingLeft: '10px',
        paddingRight: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }}>
        <Select {...args} >
            <SelectItem value={'hello'} label={'HELLO'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 1'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 2'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 3'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 4'} onClick={()=>{}}/>
        </Select>
        <Select {...args} >
            <SelectItem value={'hello'} label={'HELLO'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 1'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 2'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 3'} onClick={()=>{}}/>
            <SelectItem value={'hello'} label={'HELLO 4'} onClick={()=>{}}/>
        </Select>
    </div>
);

export const Default = Template.bind({});

Default.args = {};