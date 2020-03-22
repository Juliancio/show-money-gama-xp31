import React from 'react';

import Banner from './components/Banner';
import Card from './components/Card';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import './App.css';


function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <Card />
      <Benefits />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
