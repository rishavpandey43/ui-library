import { ComponentStory, ComponentMeta } from '@storybook/react';

import SubmitButtonGroupComponent from './SubmitButtonGroup';

export default {
  title: 'web/Form Components/SubmitButtonGroup',
  component: SubmitButtonGroupComponent,
} as ComponentMeta<typeof SubmitButtonGroupComponent>;

const SubmitButtonGroupStory: ComponentStory<
  typeof SubmitButtonGroupComponent
> = (args) => <SubmitButtonGroupComponent {...args} />;

export const SubmitButtonGroup = SubmitButtonGroupStory.bind({});
