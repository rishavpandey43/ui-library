import { forwardRef } from 'react';
import { Avatar as MuiAvatar, AvatarProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Utility } from 'skuad-fe-utils';

export interface CustomAvatarProps extends AvatarProps {
  /**
   *  The name to send in Avatar for creating and rendering it's initials
   */
  name?: string;
  /**
   * The size of the component.
   * @default 'md'
   */
  size?: 'lg' | 'md' | 'sm' | 'xs';
}

type sizeMappingType = {
  [x: string]: {
    width: string;
    height: string;
    variant:
      | 'button'
      | 'caption'
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'inherit'
      | 'body2'
      | 'body1'
      | 'subtitle1'
      | 'subtitle2'
      | 'overline';
  };
};

const sizeMapping: sizeMappingType = {
  lg: {
    width: '50px',
    height: '50px',
    variant: 'body2',
  },
  md: {
    height: '40px',
    width: '40px',
    variant: 'body1',
  },
  sm: {
    height: '32px',
    width: '32px',
    variant: 'caption',
  },
  xs: {
    width: '24px',
    height: '24px',
    variant: 'caption',
  },
};

const CustomAvatar = styled(MuiAvatar, {
  shouldForwardProp: (prop) => prop !== 'name' && prop !== 'size',
})<CustomAvatarProps>(({ size }) => {
  return {
    ...(size && {
      width: sizeMapping[size].width,
      height: sizeMapping[size].height,
    }),
  };
});

const Avatar: React.FC<CustomAvatarProps> = forwardRef(
  ({ name, size, children, ...rest }, ref) => (
    <CustomAvatar size={size} {...rest} ref={ref}>
      {name ? (
        <Typography color="textPrimary" variant={sizeMapping[size!]?.variant}>
          {Utility.getInitials(name)}
        </Typography>
      ) : (
        children
      )}
    </CustomAvatar>
  )
);

Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;
