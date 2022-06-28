import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./contexts/CartContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { AppContextProvider } from "./contexts/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CartContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </CartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
