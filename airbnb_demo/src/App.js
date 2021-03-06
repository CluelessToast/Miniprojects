import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';
import FrontLayout from './components/FrontLayout';


function App() {

  const cards= Data.map(item=>{
    return(
      <Card
      key={item.id}
      {...item}
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      <FrontLayout />
      <Hero />
      <section className='card-list'>
      {cards}
      </section>
    </div>
  );
}

export default App;
