import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  responsiveFontSizes,
} from '@mui/material/styles';
import React from 'react';

import { colorConfig } from './constants';

const typographyOverride = () => {
  const style = (
    fontSize = 'inherit',
    fontWeight = '400',
    lineHeight = '1.3'
  ) => ({
    fontSize,
    fontWeight,
    lineHeight,
  });

  return {
    h1: style('4rem', '500', '1.3'),
    h2: style('1rem', '500', '1.375'),
    h3: style('0.875rem', '500', '1.14285'),
    body1: style('0.875rem', '400', '1.5714'),
    body2: style('1rem', '400', '1.75'),
    subtitle1: style('2rem', '400', '1.25'),
    caption: style('0.75rem', '400', '1.3333333'),
  };
};

export const customMuiTheme = createTheme({
  typography: {
    ...typographyOverride(),
  },
  palette: {
    primary: {
      main: colorConfig.primary,
      contrastText: '#fff',
    },
    secondary: {
      main: colorConfig.secondary,
      contrastText: '#fff',
    },
    text: {
      primary: colorConfig.textPrimary,
      disabled: colorConfig.textDisabled,
    },
    error: {
      main: colorConfig.error,
    },
    backgroundPrimary: {
      main: colorConfig.backgroundPrimary,
    },
    backgroundSecondary: {
      main: colorConfig.backgroundSecondary,
    },
    selectedPrimary: {
      main: colorConfig.selectedPrimary,
    },
    selectedSecondary: {
      main: colorConfig.selectedSecondary,
    },
    border: {
      main: colorConfig.border,
    },
    hover: {
      main: colorConfig.hover,
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: colorConfig.backgroundSecondary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: '48px',
          minWidth: '160px',
          padding: '8px 32px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          color: colorConfig.white,
        },
        outlinedPrimary: {
          color: colorConfig.primary,
        },
        sizeSmall: {
          minHeight: '40px',
          minWidth: '120px',
          padding: '8px 16px',
        },
      },
    },
  },
});

export const responsiveCustomMuiTheme: ThemeOptions =
  responsiveFontSizes(customMuiTheme);

interface DefaultThemeType {
  children: React.ReactNode;
}

const DefaultTheme = ({ children }: DefaultThemeType) => (
  <ThemeProvider theme={responsiveCustomMuiTheme}>{children}</ThemeProvider>
);
export default DefaultTheme;
