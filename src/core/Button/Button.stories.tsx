import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonComponent from './Button';

export default {
  title: 'core/Button',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const ButtonStory: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = ButtonStory.bind({});

Button.args = {
  variant: 'contained',
  children: 'Contained Button',
};
