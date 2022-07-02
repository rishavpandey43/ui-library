import { ThemeOptions } from '@mui/material/styles';
import React from 'react';
export declare const customMuiTheme: import("@mui/material/styles").Theme;
export declare const responsiveCustomMuiTheme: ThemeOptions;
interface DefaultThemeType {
    children: React.ReactNode;
}
declare const DefaultTheme: ({ children }: DefaultThemeType) => JSX.Element;
export default DefaultTheme;
