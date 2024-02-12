import { PaletteColor } from "@mui/material";
import theme from "core/MuiProvider/theme";

const linkColor: string = (theme.palette?.primary as PaletteColor)?.main;

export const linkStyles = {
    color: linkColor,
    textDecoration: "none",
    fontWeight: "500" as React.CSSProperties['fontWeight'], // Ensure it's of the correct type
    textTransform: 'none' as React.CSSProperties['textTransform'], // Ensure it's of the correct type
  } as const;