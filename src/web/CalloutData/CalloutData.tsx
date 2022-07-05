import React from 'react';
import { Typography, Box } from '../../core';

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

const CalloutData: React.FC<CalloutDataProps> = ({
  heading,
  subTitle,
  highlight,
}) => (
  <Box px={3}>
    <Typography
      align="center"
      weight={700}
      variant={highlight ? 'h1' : 'h2'}
      component="h2"
      gutterBottom
    >
      {heading}
    </Typography>
    <Typography
      align="center"
      variant={highlight ? 'subtitle1' : 'body1'}
      component="p"
      color="textPrimary"
    >
      {subTitle}
    </Typography>
  </Box>
);

export default CalloutData;
