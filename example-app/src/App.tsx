import React from 'react';
// import {Button} from "@mui/material"
import { styled } from '@mui/material/styles';
import { Button, DefaultTheme } from 'ui-lib';
// import { Button } from 'ui-lib/core';

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
        <StyledButton color="primary" variant="contained">
          Styled Button
        </StyledButton>
      </DefaultTheme>
    </div>
  );
}

export default App;
