import React, { useState, useEffect } from "react";
import GlobalStyle, { Container } from "./styles/globalStyles";
import { CartProvider } from './contexts/Cart'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/index.js";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import CardDetailsPage from "./pages/CardDetailsPage";
import MoreCardsPage from "./pages/MoreCardsPage";
import Copyright from "./components/Copyright";
import { Toaster } from "react-hot-toast";

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
      <CartProvider>
        <Router>
          <GlobalStyle />
          <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <ScrollToTop />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage isDarkTheme={isDarkTheme} />} />
              <Route path="/carrinho" element={<CartPage isDarkTheme={isDarkTheme} />} />
              <Route path="/favoritos" element={<FavoritesPage isDarkTheme={isDarkTheme} />} />
              <Route path="/card/:race/:id" element={<CardDetailsPage isDarkTheme={isDarkTheme} />} />
              <Route path="/card/:race" element={<MoreCardsPage isDarkTheme={isDarkTheme} />} />
            </Routes>
          </Container>
          <Copyright />
        </Router>
      </CartProvider>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </ThemeProvider>
  );
}

export default App;
