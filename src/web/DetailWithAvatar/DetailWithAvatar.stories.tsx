import { ComponentStory, ComponentMeta } from '@storybook/react';

import DetailWithAvatarComponent from './DetailWithAvatar';

export default {
  title: 'web/Data Display/Detail With Avatar',
  component: DetailWithAvatarComponent,
} as ComponentMeta<typeof DetailWithAvatarComponent>;

const DetailWithAvatarStory: ComponentStory<typeof DetailWithAvatarComponent> =
  (args) => <DetailWithAvatarComponent {...args} />;

export const DetailWithAvatar = DetailWithAvatarStory.bind({});

DetailWithAvatar.args = {
  heading: 'Abhimanyu Singh',
  subHeading: 'Employee',
  chip: {
    label: 'Onboarding Pending',
    type: 'processing',
  },
};
