import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChipComponent from './Chip';

export default {
  title: 'core/Chip',
  component: ChipComponent,
} as ComponentMeta<typeof ChipComponent>;

const ChipStory: ComponentStory<typeof ChipComponent> = (args) => (
  <ChipComponent {...args} />
);

export const Chip = ChipStory.bind({});

Chip.args = {
  variant: 'outlined',
  label: 'Outlined Chip',
};
