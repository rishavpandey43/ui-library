import { ComponentStory, ComponentMeta } from '@storybook/react';

import CalloutDataSetComponent from './CalloutDataSet';

export default {
  title: 'web/Dashboard/CalloutDataSet',
  component: CalloutDataSetComponent,
} as ComponentMeta<typeof CalloutDataSetComponent>;

const Template: ComponentStory<typeof CalloutDataSetComponent> = (args) => (
  <CalloutDataSetComponent {...args} />
);

export const CalloutDataSet = Template.bind({});

let gridData = [
  {
    heading: '2',
    subTitle: 'Roles',
  },
  {
    heading: '20',
    subTitle: 'Open Positions',
  },
  {
    heading: '10',
    subTitle: 'Hired',
  },

  {
    heading: '5',
    subTitle: 'Offered',
  },
  {
    heading: '25%',
    subTitle: 'Decline Ratio',
  },
];

CalloutDataSet.args = {
  gridData: gridData,
};
