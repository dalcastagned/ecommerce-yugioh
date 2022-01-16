import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/index.js";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import MoreCardsPage from "./pages/MoreCardsPage";

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
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/carrinho" element={<CartPage/>} />
          <Route path="/favoritos" element={<FavoritesPage/>} />
          <Route path="/card/:id" element={<CardDetailsPage/>} />
          <Route path="/card/:race" element={<MoreCardsPage/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
