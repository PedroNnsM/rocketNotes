import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Styles/global";
import { ThemeProvider } from "styled-components";

import { Routes } from "./routes";

import theme from "./Styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
