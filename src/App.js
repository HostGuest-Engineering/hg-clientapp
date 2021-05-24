import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
// import Header from "./containers/Header/AppHeader";
import "./index.css";
import {commonStyles} from "./components/Assets/CommonThemes";
import Router from "./routes/Router";

const App = ()=>{
  return (
    <>
    <ThemeProvider theme={commonStyles}>
      {/* <Header /> */}
      <Router />
    </ThemeProvider>
    </>
  )
}

export default App;
