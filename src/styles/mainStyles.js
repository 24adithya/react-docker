import { createTheme } from "@mui/material";
import { paletteProperties } from "./styleConstants";

export const mainTheme = createTheme({
  palette: {
    text: {
      primary: paletteProperties.TEXT_COLOR_DARK,
      secondary: paletteProperties.TEXT_COLOR_DARK,
    },
    components: {
      header: {
        backgroundColor: paletteProperties.PRIMARY,
        color: paletteProperties.SECONDARY,
      },
      body: {
        backgroundColor: paletteProperties.PRIMARY,
        color: paletteProperties.SECONDARY,
      },
    },
  },
  typography: {
    fontSize: 12,
    htmlFontSize: 17,
    fontFamily: "Comic Sans MS !important",
  },
});

export const componentTheme = createTheme({
  palette: {
    text: {
      primary: "Crimson",
    },
  },
  typography: {
    fontSize: 12,
    htmlFontSize: 17,
    fontFamily: "Comic Sans MS !important",
  },
});
