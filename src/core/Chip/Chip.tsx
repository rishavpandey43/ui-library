import { forwardRef } from 'react';
import { Chip as MuiChip, ChipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

import { colorConfig } from '../../theme/constants';

export interface CustomChipProps extends ChipProps {
  /**
   * If `true`, chip shape is square with curved border.
   * @default 'false'
   */
  square?: boolean;
  /**
   * The type of the component.
   */
  type?:
    | 'draft'
    | 'processing'
    | 'successful'
    | 'cancelled'
    | 'selected'
    | 'deSelected';
}

const CustomChip = styled(MuiChip, {
  shouldForwardProp: (prop) => prop !== 'square' && prop !== 'type',
})<CustomChipProps>(({ square, type, clickable }) => {
  return {
    ...(square && {
      borderRadius: 4,
    }),
    ...(type && {
      color: colorConfig.chip[type]?.color,
      backgroundColor: colorConfig.chip[type]?.background,
    }),
    ...(type &&
      clickable && {
        color: colorConfig.chip[type]?.color,
        backgroundColor: colorConfig.chip[type]?.background,
        '&:focus, &:hover': {
          color: colorConfig.chip[type]?.hoverColor,
          backgroundColor: colorConfig.chip[type]?.hoverBackground,
        },
      }),
  };
});

const Chip: React.FC<CustomChipProps> = forwardRef(
  ({ square, type, ...props }, ref) => (
    <CustomChip square={square} type={type} {...props} ref={ref} />
  )
);

export default Chip;
