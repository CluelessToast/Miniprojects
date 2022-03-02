import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
      image="images/fez.jpg"
      rating="5.0"
      reviews=" (6)"
      country="USA"
      p="lessons into selling drugs"
      price="420.69"/>
    </div>
  );
}

export default App;
