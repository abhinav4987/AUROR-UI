import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Rating, RatingProps } from '../src';

const meta: Meta = {
  title: 'Rating',
  component: Rating,
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


    
const Template: Story<RatingProps> = args => (
    <div style={{
        width: '400px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Rating {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {};