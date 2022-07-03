type colorConfigType = {
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

export const colorConfig: colorConfigType = {
  primary: '#13B68F',
  secondary: '#FE7360',
  textDefault: '#000000',
  textPrimary: '#667085',
  textDisabled: '#69778C',
  error: '#E16D65',
  backgroundPrimary: '#FBF7F7',
  backgroundSecondary: '#F2F3F7',
  selectedPrimary: '#DCC8C8',
  selectedSecondary: '#FDFBFB',
  border: '#E2E4F0',
  hover: '#FDFBFB',
  link: '#2887E8',
  white: '#FFFFFF',
  chip: {
    draft: {
      color: '#2D9CDB',
      background: '#EBF6FF',
      hoverColor: '#028CDB',
      hoverBackground: '#F7FCFF',
    },
    processing: {
      color: '#F2994A',
      background: '#FEF5ED',
      hoverColor: '#F28524',
      hoverBackground: '#FFFAF5',
    },
    successful: {
      color: '#219653',
      background: '#E9F5EE',
      hoverColor: '#099645',
      hoverBackground: '#F3FAF5',
    },
    cancelled: {
      color: '#EC4747',
      background: '#FDEDED',
      hoverColor: '#EC2121',
      hoverBackground: '#FFF8F8',
    },
  },
};
