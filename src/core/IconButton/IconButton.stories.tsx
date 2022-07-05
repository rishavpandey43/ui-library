import { ComponentStory, ComponentMeta } from '@storybook/react';

import AddIcon from '@mui/icons-material/Add';

import IconButtonComponent from './IconButton';

export default {
  title: 'core/IconButton',
  component: IconButtonComponent,
} as ComponentMeta<typeof IconButtonComponent>;

const IconButtonStory: ComponentStory<typeof IconButtonComponent> = (args) => (
  <IconButtonComponent {...args} />
);
export const IconButton = IconButtonStory.bind({});

IconButton.args = {
  children: <AddIcon />,
  tooltipTitle: 'Add Me',
};
