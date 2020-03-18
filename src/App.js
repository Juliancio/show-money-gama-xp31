import React from 'react';
import Banner from './components/Banner'
import Card from './components/Card'
import Nav from './components/Nav'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Card />
      <Footer />

    </div>
  );
}

export default App;
