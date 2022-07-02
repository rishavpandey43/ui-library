declare module '@mui/material/styles' {
  interface Palette {
    backgroundPrimary: Palette['primary'];
    backgroundSecondary: Palette['primary'];
    selectedPrimary: Palette['primary'];
    selectedSecondary: Palette['primary'];
    border: Palette['primary'];
    hover: Palette['primary'];
  }
  interface PaletteOptions {
    backgroundPrimary: PaletteOptions['primary'];
    backgroundSecondary: PaletteOptions['primary'];
    selectedPrimary: PaletteOptions['primary'];
    selectedSecondary: PaletteOptions['primary'];
    border: PaletteOptions['primary'];
    hover: PaletteOptions['primary'];
  }
}

// export dummy content to make this file compile.
export const dummyDataExport = '';
