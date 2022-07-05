import { Stack, Avatar, Box, Typography, Chip } from '../../core';
import { CustomChipProps } from '../../core/Chip';
import { CustomAvatarProps } from '../../core';

export interface DetailWithAvatarProps {
  /**
   * Heading of the detail.
   */
  heading: string;
  /**
   * Sub Heading of the detail.
   */
  subHeading?: string;
  /**
   * Details to be displayed inside chip.
   */
  chip?: {
    label: string;
    type:
      | 'draft'
      | 'processing'
      | 'successful'
      | 'cancelled'
      | 'selected'
      | 'deSelected';
  };
  /**
   * Props applied to the Avatar component.
   */
  AvatarProps?: CustomAvatarProps;
  /**
   * Props applied to the Chip component.
   */
  ChipProps?: CustomChipProps;
}

const DetailWithAvatar = ({
  heading,
  subHeading,
  chip,
  ChipProps,
  AvatarProps,
}: DetailWithAvatarProps) => {
  return (
    <Stack direction="row" gap={2} alignItems="center">
      <Avatar name={heading} size="lg" {...AvatarProps} />
      <Box>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="h3" weight={500}>
            {heading}
          </Typography>
          {chip && chip.label && <Chip square {...chip} {...ChipProps} />}
        </Stack>
        <Typography variant="caption" color="textPrimary">
          {subHeading}
        </Typography>
      </Box>
    </Stack>
  );
};

export default DetailWithAvatar;
