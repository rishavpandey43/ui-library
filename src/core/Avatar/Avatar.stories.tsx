import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarComponent from './Avatar';

export default {
  title: 'core/Avatar',
  component: AvatarComponent,
} as ComponentMeta<typeof AvatarComponent>;

const AvatarStory: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const Avatar = AvatarStory.bind({});

Avatar.args = {
  name: 'John Doe',
  size: 'md',
};
