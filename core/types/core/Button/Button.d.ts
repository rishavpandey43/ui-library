/// <reference types="react" />
import { ButtonProps } from '@mui/material';
export interface CustomButtonProps extends ButtonProps {
    /**
     * if `true`, displays loading state.
     * @default 'false'
     */
    loading?: boolean;
}
declare const Button: React.FC<CustomButtonProps>;
export default Button;
