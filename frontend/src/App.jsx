import MainPage from "./main_page/MainPage";
import "typeface-roboto";
import "./App.css";
import "./base/header.css";
import "./base/chat.css";

//import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CoinFlip from "./coinflip/CoinFlip";
import JackPot from "./components/jackpot/JackPot";
import Contact from "./components/contact/Contact";
import Faq from "./components/faq/Faq";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="coinflip" element={<CoinFlip />} />
          <Route path="jackpot" element={<JackPot />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
