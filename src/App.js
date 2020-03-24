import React from 'react';

import Banner from './components/Banner';
import Card from './components/Card';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import PreFooter from './components/PreFooter';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Card />
      <Benefits />
      <Offer />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
