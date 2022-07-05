/// <reference types="react" />
import { ChipProps } from '@mui/material';
export interface CustomChipProps extends ChipProps {
    /**
     * If `true`, chip shape is square with curved border.
     * @default 'false'
     */
    square?: boolean;
    /**
     * The type of the component.
     */
    type?: 'draft' | 'processing' | 'successful' | 'cancelled' | 'selected' | 'deSelected';
}
declare const Chip: React.FC<CustomChipProps>;
export default Chip;
