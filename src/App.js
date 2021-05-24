import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import "./index.css";
import {commonStyles} from "./components/Assets/CommonThemes";
import Router from "./routes/Router";
import ErrorHandler from "./components/ErrorHandler";

const App = ()=>{
  return (
    <>
    <ThemeProvider theme={commonStyles}>
      <ErrorHandler />
      <Router />
    </ThemeProvider>
    </>
  )
}

export default App;
