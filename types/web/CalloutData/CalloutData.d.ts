import React from 'react';
export interface CalloutDataProps {
    /**
     *  The heading of the callout data.
     */
    heading: string;
    /**
     * The sub-title of the callout data.
     */
    subTitle: string;
    /**
     * If `true`, highlight the data by increasing the font-size.
     * @default 'false'
     */
    highlight?: boolean;
}
declare const CalloutData: React.FC<CalloutDataProps>;
export default CalloutData;
