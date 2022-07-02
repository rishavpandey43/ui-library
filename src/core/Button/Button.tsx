import { forwardRef } from 'react';
import {
  Button as MuiButton,
  CircularProgress,
  Box,
  ButtonProps,
} from '@mui/material';

export interface CustomButtonProps extends ButtonProps {
  /**
   * if `true`, displays loading state.
   * @default 'false'
   */
  loading?: boolean;
}

const Button: React.FC<CustomButtonProps> = forwardRef(
  ({ children, disabled, loading, ...rest }, ref) => (
    <MuiButton {...rest} ref={ref} disabled={disabled || loading}>
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
    </MuiButton>
  )
);

export default Button;
