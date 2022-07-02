import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  responsiveFontSizes,
} from '@mui/material/styles';
import React from 'react';

import { colorConfig } from './constants';

const defaultTheme = createTheme();

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
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
        },
        label: {
          fontSize: '12px',
          lineHeight: '16px',
          padding: '4px 8px',
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: defaultTheme.breakpoints.keys[0],
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'inline-block',
          marginBottom: defaultTheme.spacing(1),
        },
        asterisk: {
          color: colorConfig.error,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colorConfig.textPrimary,
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          whiteSpace: 'normal',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: colorConfig.selectedSecondary,
            '&:hover': {
              backgroundColor: colorConfig.selectedSecondary,
            },
          },
          '&.MuiTableRow-hover': {
            '&:hover': {
              backgroundColor: colorConfig.selectedSecondary,
            },
          },
          '&[tabindex="0"]:focus': {
            backgroundColor: colorConfig.selectedSecondary,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          lineHeight: '22px',
          borderBottom: `1px solid ${colorConfig.border}`,
        },
        body: {
          color: colorConfig.textDefault,
        },
        head: {
          padding: '12px 16px',
          fontSize: '0.75rem',
          lineHeight: '16px',
          fontWeight: 400,
          color: colorConfig.textDefault,
          borderBottom: 'none',
        },
        stickyHeader: {
          backgroundColor: colorConfig.backgroundSecondary,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colorConfig.textDefault,
        },
        gutterBottom: {
          marginBottom: defaultTheme.spacing(1),
        },
      },
    },
  },
});

export const responsiveCustomMuiTheme: ThemeOptions =
  responsiveFontSizes(customMuiTheme);

interface SkuadDefaultThemeType {
  children: React.ReactNode;
}

const SkuadDefaultTheme = ({ children }: SkuadDefaultThemeType) => (
  <ThemeProvider theme={responsiveCustomMuiTheme}>{children}</ThemeProvider>
);
export default SkuadDefaultTheme;
