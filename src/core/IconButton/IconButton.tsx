import { forwardRef } from 'react';

import {
  IconButton as MuiIconButton,
  Tooltip,
  CircularProgress,
  Box,
  IconButtonProps,
} from '@mui/material';
export interface CustomIconButtonProps extends IconButtonProps {
  /**
   * Tooltip message, if any.
   */
  tooltipTitle?: string;
  /**
   * Tooltip Props to override, if required.
   */
  TooltipProps?: object;
  /**
   * if `true`, displays loading state.
   * @default 'false'
   */
  loading?: boolean;
}

const WrappedIconButton: React.FC<CustomIconButtonProps> = forwardRef(
  ({ loading, children, ...rest }, ref) => (
    <MuiIconButton {...rest} ref={ref} disabled={loading || rest.disabled}>
      {loading && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress size={24} />
        </Box>
      )}
      {children}
    </MuiIconButton>
  )
);

const IconButton: React.FC<CustomIconButtonProps> = forwardRef(
  ({ children, tooltipTitle, TooltipProps, loading, ...rest }, ref) =>
    tooltipTitle ? (
      <Tooltip arrow {...TooltipProps} title={tooltipTitle}>
        <WrappedIconButton
          {...rest}
          ref={ref}
          loading={loading}
          children={children}
        />
      </Tooltip>
    ) : (
      <WrappedIconButton
        {...rest}
        ref={ref}
        loading={loading}
        children={children}
      />
    )
);

export default IconButton;
