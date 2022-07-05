/// <reference types="react" />
import { ChipProps, AvatarProps } from '@mui/material';
import React$1 from 'react';

interface CustomChipProps extends ChipProps {
    /**
     * If `true`, chip shape is square with curved border.
     * @default 'false'
     */
    square?: boolean;
    /**
     * The type of the component.
     */
    type?: 'draft' | 'processing' | 'successful' | 'cancelled' | 'selected' | 'deSelected';
}

interface CustomAvatarProps extends AvatarProps {
    /**
     *  The name to send in Avatar for creating and rendering it's initials
     */
    name?: string;
    /**
     * The size of the component.
     * @default 'md'
     */
    size?: 'lg' | 'md' | 'sm' | 'xs';
}

interface DetailWithAvatarProps {
    /**
     * Heading of the detail.
     */
    heading: string;
    /**
     * Sub Heading of the detail.
     */
    subHeading?: string;
    /**
     * Details to be displayed inside chip.
     */
    chip?: {
        label: string;
        type: 'draft' | 'processing' | 'successful' | 'cancelled' | 'selected' | 'deSelected';
    };
    /**
     * Props applied to the Avatar component.
     */
    AvatarProps?: CustomAvatarProps;
    /**
     * Props applied to the Chip component.
     */
    ChipProps?: CustomChipProps;
}
declare const DetailWithAvatar: ({ heading, subHeading, chip, ChipProps, AvatarProps, }: DetailWithAvatarProps) => JSX.Element;

interface SubmitButtonGroupProps {
    /**
     * If `true`, displays the discard/submit buttons.
     * @default 'false'
     */
    formEditable: boolean;
    /**
     * Function to trigger when the edit button is clicked.
     * @default 'false'
     */
    setFormEditable: (editable: boolean) => void;
    /**
     * Function to trigger when the discard button is clicked.
     * @default 'false'
     */
    discardChanges: () => void;
    /**
     * If `true`, enables the submit button.
     * @default 'false'
     */
    localFormStateUpdated?: boolean;
    /**
     * if `true`, displays loading state.
     * @default 'false'
     */
    loading?: boolean;
    /**
     * if `true`, renders IconButton instead of default Button.
     * @default 'true'
     */
    iconButton?: boolean;
}
declare const SubmitButtonGroup: React.FC<SubmitButtonGroupProps>;

interface CalloutDataProps {
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
declare const CalloutData: React$1.FC<CalloutDataProps>;

interface CalloutDataSetProps {
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

export { CalloutData, CalloutDataSet, DetailWithAvatar, SubmitButtonGroup };
