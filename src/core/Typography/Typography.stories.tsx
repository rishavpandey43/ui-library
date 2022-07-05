import { ComponentStory, ComponentMeta } from '@storybook/react';

import TypographyComponent from './Typography';

export default {
  title: 'core/Typography',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

const TypographyStory: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent {...args} />
);

export const Typography = TypographyStory.bind({});

Typography.args = {
  variant: 'h1',
  children: 'H1 Heading',
};
