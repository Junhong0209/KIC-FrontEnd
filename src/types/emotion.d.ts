import "@emotion/react";
import { theme } from "src/core/styles/theme";

type customThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends customThemeType {}
}
