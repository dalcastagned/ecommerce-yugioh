import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (localStorage.getItem("theme") === 'true') {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
  }, []);

  return (

    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
