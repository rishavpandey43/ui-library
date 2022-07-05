import { ComponentStory, ComponentMeta } from '@storybook/react';

import CalloutDataComponent from './CalloutData';

export default {
  title: 'web/Dashboard/CalloutData',
  component: CalloutDataComponent,
} as ComponentMeta<typeof CalloutDataComponent>;

const Template: ComponentStory<typeof CalloutDataComponent> = (args) => (
  <CalloutDataComponent {...args} />
);

export const CalloutData = Template.bind({});

CalloutData.args = {
  heading: '1',
  subTitle: 'Active',
};
