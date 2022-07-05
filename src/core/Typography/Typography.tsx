import { forwardRef } from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
export interface CustomTypographyProps extends TypographyProps {
  /**
   * Font weight of the text.
   */
  weight?: number;
  /**
   * If `true`, the text will have a top margin.
   * @default false
   */
  gutterTop?: boolean;
  /**
   * If `true`, the text will have a left margin.
   * @default false
   */
  gutterLeft?: boolean;
  /**
   * If `true`, the text will have a right margin.
   * @default false
   */
  gutterRight?: boolean;
  /**
   * The content of the component.
   */
  component?: React.ReactNode;
}

const CustomTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) =>
    prop !== 'weight' &&
    prop !== 'gutterTop' &&
    prop !== 'gutterLeft' &&
    prop !== 'gutterRight',
})<CustomTypographyProps>(
  ({ weight, gutterTop, gutterLeft, gutterRight, theme }) => {
    return {
      ...(weight && {
        fontWeight: weight || 400,
      }),
      ...(gutterTop && {
        marginTop: theme.spacing(1),
      }),
      ...(gutterLeft && {
        marginLeft: theme.spacing(1),
      }),
      ...(gutterRight && {
        marginRight: theme.spacing(1),
      }),
    };
  }
);

const Typography: React.FC<CustomTypographyProps> = forwardRef(
  ({ children, weight, gutterTop, gutterLeft, gutterRight, ...rest }, ref) => (
    <CustomTypography
      {...rest}
      ref={ref}
      weight={weight}
      gutterTop={gutterTop}
      gutterLeft={gutterLeft}
      gutterRight={gutterRight}
    >
      {children}
    </CustomTypography>
  )
);

export default Typography;
