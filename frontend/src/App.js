import MainPage from "./main_page/MainPage";
import { useEffect, useState } from "react";
import 'typeface-roboto';
import './App.css';
import './base/header.css';
import './base/chat.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SteamLogin from './SteamLoginButton';

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainPage></MainPage>
      </div>
    </Router>
  );
};

export default App;
