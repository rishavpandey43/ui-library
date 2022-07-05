import React from 'react';
// import {Button} from "@mui/material"
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import {
  Stack,
  Box,
  // Button,
  DefaultTheme,
} from 'ui-lib';
import { Button, Chip, IconButton } from 'ui-lib/core';
import { DetailWithAvatar, CalloutDataSet } from 'ui-lib/web';

const gridData = [
  {
    heading: '2',
    subTitle: 'Roles',
  },
  {
    heading: '20',
    subTitle: 'Open Positions',
  },
  {
    heading: '10',
    subTitle: 'Hired',
  },

  {
    heading: '5',
    subTitle: 'Offered',
  },
  {
    heading: '25%',
    subTitle: 'Decline Ratio',
  },
];

// import DefaultTheme from "./theme/defaultTheme"

const StyledButton = styled(Button)(({ theme }) => {
  console.log('theme', theme);
  return {
    backgroundColor: 'red',
    color: 'white',
  };
});

/*
* WORKING -
  - Importing the components from `@mui/material` and themeProvider from `./theme/skuadDefaultTheme`
  - Importing everything only from `ui-lib` (but while trying to console theme values when using `DefaultTheme`,no extra colors are being consoled, which were added in `DefaultTheme` under library)
*/

/*
! NOT-WORKING -
  - Importing the components from `ui-lib/core` and themeProvider from `ui-lib`
  - Importing the components from `ui-lib/core` and themeProvider from `./theme/skuadDefaultTheme`
  - Importing the components from `@mui/material` and themeProvider from `ui-lib`
*/

function App() {
  return (
    <div className="App">
      <DefaultTheme>
        <Stack m={5} spacing={2} direction="row" alignItems="center">
          <Button variant="contained">Hello</Button>
          <StyledButton color="primary" variant="contained">
            Styled Button
          </StyledButton>
          <Chip label="Square" square />
          <Chip label="Draft" type="draft" />
          <IconButton tooltipTitle="Hello, I'm tooltip">
            <AddIcon />
          </IconButton>
          <DetailWithAvatar
            heading="John Doe"
            subHeading="Employee"
            chip={{ label: 'Processing', type: 'processing' }}
          />
        </Stack>
        <Stack>
          <CalloutDataSet gridData={gridData} divider={true} />
        </Stack>
      </DefaultTheme>
      <Box mt={4}>
        <Stack m={5} spacing={2} direction="row" alignItems="center">
          <Button variant="contained">Hello</Button>
          <StyledButton color="primary" variant="contained">
            Styled Button
          </StyledButton>
          <Chip label="Square" square />
          <Chip label="Draft" type="draft" />
          <IconButton tooltipTitle="Hello, I'm tooltip">
            <AddIcon />
          </IconButton>
          <DetailWithAvatar
            heading="John Doe"
            subHeading="Employee"
            chip={{ label: 'Processing', type: 'processing' }}
          />
        </Stack>
        <Stack>
          <CalloutDataSet gridData={gridData} divider={true} />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
