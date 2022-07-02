/// <reference types="react" />
import { AvatarProps } from '@mui/material';
export interface CustomAvatarProps extends AvatarProps {
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
declare const Avatar: React.FC<CustomAvatarProps>;
export default Avatar;
