import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import Buscador from "./Pages/Buscador.jsx"
import Header from "./Components/Header.jsx"

import GlobalStyle from "./Theme/global.jsx";
import theme from "./Theme/theme.jsx";
import MyThemeProvider from "./Components/ThemeContext/ThemeContext.jsx";
import { ThemeProvider } from "styled-components";


function App() {

  return (
    <div>
      <GlobalStyle/>
      <MyThemeProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/letras' element={<Buscador />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MyThemeProvider>
    </div>
  );
}

export default App
