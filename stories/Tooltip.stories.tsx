import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps, Button } from '../src';

const meta: Meta = {
  title: 'Tooltip',
  component: Tooltip,
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


    
const Template: Story<TooltipProps> = args => (
   <div style={{
       width: '100%',
       height: '100%',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
   }}>
        <Tooltip {...args}>
            <Button label='Test Tooltip' onClick={()=>{}} />
        </Tooltip>
   </div>
);

export const Default = Template.bind({});

Default.args = {};