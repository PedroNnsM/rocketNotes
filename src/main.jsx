import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./Styles/global";
import { ThemeProvider } from "styled-components";
import { SignUp } from "./pages/SignUp";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  </React.StrictMode>
);
