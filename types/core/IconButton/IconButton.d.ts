/// <reference types="react" />
import { IconButtonProps } from '@mui/material';
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
declare const IconButton: React.FC<CustomIconButtonProps>;
export default IconButton;
