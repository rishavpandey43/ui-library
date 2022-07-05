/// <reference types="react" />
import { TypographyProps } from '@mui/material';
export interface CustomTypographyProps extends TypographyProps {
    /**
     * Font weight of the text.
     */
    weight?: number;
    /**
     * If `true`, the text will have a top margin.
     * @default false
     */
    gutterTop?: boolean;
    /**
     * If `true`, the text will have a left margin.
     * @default false
     */
    gutterLeft?: boolean;
    /**
     * If `true`, the text will have a right margin.
     * @default false
     */
    gutterRight?: boolean;
    /**
     * The content of the component.
     */
    component?: React.ReactNode;
}
declare const Typography: React.FC<CustomTypographyProps>;
export default Typography;
