/// <reference types="react" />
import { CalloutDataProps } from '../CalloutData';
export interface CalloutDataSetProps {
    /**
     *  Array consisting of callout data objects.
     */
    gridData: CalloutDataProps[];
    /**
     * If `true`, adds divider between callout data.
     * @default 'false'
     */
    divider: boolean;
    /**
     * If `true`, highlight the data by increasing the font-size.
     * @default 'false'
     */
    highlight?: boolean;
}
declare const CalloutDataSet: React.FC<CalloutDataSetProps>;
export default CalloutDataSet;
