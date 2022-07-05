/// <reference types="react" />
export interface SubmitButtonGroupProps {
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
export default SubmitButtonGroup;
