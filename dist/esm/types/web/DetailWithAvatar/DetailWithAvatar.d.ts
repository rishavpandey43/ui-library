/// <reference types="react" />
import { CustomChipProps } from '../../core/Chip';
import { CustomAvatarProps } from '../../core';
export interface DetailWithAvatarProps {
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
export default DetailWithAvatar;
