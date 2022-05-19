import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/Context";

import "./App.css";
import AboutScreen from "./pages/AboutScreen";
import ErrorScreen from "./pages/ErrorScreen";
import HomeScreen from "./pages/HomeScreen";
import MenuPrincipal from "./components/MenuPrincipal";

function App() {
  const [usuario, setUsuario] = useState({
    id: new Date().getTime(),
    username: "RollingCode",
    email: "rollingcode@gmail.com",
    cart: ["234", "235"],
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ usuario, setUsuario }}>
        <MenuPrincipal />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
