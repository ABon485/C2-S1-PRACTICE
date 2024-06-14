// src/App.js
import React from 'react';
import pnLogo from "./assets/pn-logo.png";
import Header from './components/Header';
import Scores from './components/Scores';
import { HTML_RESULTS } from "./data";

const App = () => {
  const batchName = "PNC 24"; 
  const courseName = "HTML"; 
  return (
    <>
      <header id="header">
        <Header batchName={batchName} />
      </header>

      <main className="scores-container">
        <div className="scores">
          <Scores courseName={courseName} courseResults={HTML_RESULTS} />
        </div>
      </main>
    </>
  );
};

export default App;
