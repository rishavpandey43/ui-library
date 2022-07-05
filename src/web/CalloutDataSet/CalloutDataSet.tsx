import { Divider, Stack } from '@mui/material';

import CalloutData, { CalloutDataProps } from '../CalloutData';

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

const CalloutDataSet: React.FC<CalloutDataSetProps> = ({
  gridData,
  highlight,
  divider,
}) => {
  return (
    <Stack
      direction="row"
      gap={1}
      alignItems="center"
      divider={
        divider && <Divider orientation="vertical" flexItem variant="middle" />
      }
    >
      {gridData.map((gridData: CalloutDataProps, index) => {
        return <CalloutData key={index} {...gridData} highlight={highlight} />;
      })}
    </Stack>
  );
};

export default CalloutDataSet;
