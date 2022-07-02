declare type colorConfigType = {
    primary: string;
    secondary: string;
    textDefault: string;
    textPrimary: string;
    textDisabled: string;
    error: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    selectedPrimary: string;
    selectedSecondary: string;
    border: string;
    hover: string;
    link: string;
    white: string;
    chip: {
        [x: string]: {
            color: string;
            background: string;
            hoverColor: string;
            hoverBackground: string;
        };
    };
};
export declare const colorConfig: colorConfigType;
export {};
