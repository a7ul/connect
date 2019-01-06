import { hot } from "react-hot-loader/root";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/home";
import { GlobalStyle } from "./core/styles/global";

export const App = hot(() => (
  <>
    <ThemeProvider theme={{ mode: "light" }}>
      <Home />
    </ThemeProvider>
    <GlobalStyle />
  </>
));
