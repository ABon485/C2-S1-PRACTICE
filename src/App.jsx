import React from 'react';
import pnLogo from "./assets/pn-logo.png";
import Header from './components/Header';
import Scores from './components/Scores';
import { HTML_RESULTS } from "./data";

const App = () => {
  return (
    <div>
      <header id="header">
        <Header batchName={batchName} />
      </header>
      <main className="scores-container">
        <div className="scores">
          <Scores courseName={courseName} courseResults={HTML_RESULTS} />
        </div>
      </main>
    </div>
  );
};

export default App;
