import GlobalStyle from "src/core/styles/globalStyles";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import { theme } from "src/core/styles/theme";
import { ThemeProvider, Global } from "@emotion/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              width: "560px",
            },
          }}
        />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
