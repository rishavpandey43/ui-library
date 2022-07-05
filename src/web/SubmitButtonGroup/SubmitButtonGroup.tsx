import {
  Edit as EditIcon,
  Close as CloseIcon,
  Done as DoneIcon,
} from '@mui/icons-material';
import { Stack, IconButton, Button } from '../../core';
import { CustomButtonProps } from '../../core';

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

interface ButtonWrapperProps extends CustomButtonProps {
  iconButton: boolean;
  label: string;
  tooltipTitle: string;
  icon: React.ReactNode;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  iconButton,
  label,
  icon,
  tooltipTitle,
  ...rest
}) =>
  iconButton ? (
    <IconButton
      size="small"
      color="primary"
      tooltipTitle={tooltipTitle}
      {...rest}
    >
      {icon}
    </IconButton>
  ) : (
    <Button {...rest}>{label}</Button>
  );

const SubmitButtonGroup: React.FC<SubmitButtonGroupProps> = ({
  formEditable,
  setFormEditable,
  discardChanges,
  loading,
  localFormStateUpdated,
  iconButton,
}) => {
  return formEditable ? (
    <Stack direction="row" spacing={2}>
      <ButtonWrapper
        tooltipTitle="Discard Changes"
        iconButton={iconButton as boolean}
        label="Discard"
        icon={<CloseIcon />}
        onClick={discardChanges}
      />
      <ButtonWrapper
        type="submit"
        tooltipTitle="Save Changes"
        iconButton={iconButton as boolean}
        label="Save"
        icon={<DoneIcon />}
        onClick={discardChanges}
        disabled={!localFormStateUpdated}
        loading={loading}
      />
    </Stack>
  ) : (
    <ButtonWrapper
      tooltipTitle="Edit Data"
      iconButton={iconButton as boolean}
      label="Edit"
      icon={<EditIcon />}
      onClick={() => setFormEditable(true)}
    />
  );
};

SubmitButtonGroup.defaultProps = {
  iconButton: true,
};

export default SubmitButtonGroup;
