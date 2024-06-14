// src/App.js
import React from 'react';
import logo from '../assets/pn-logo.png'

const Header = () => {
  const batchName = "PNC batch 2024";

  return (
    <div>
      <Header batchName={batchName} />
    </div>
  );
};

export default Header;
