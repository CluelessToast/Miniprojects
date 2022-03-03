import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';

function App() {

  const cards= Data.map(item=>{
    return(
      <Card
      image={item.profileImg}
      rating={item.stats.rating}
      reviews={item.stats.reviews}
      country={item.location}
      p={item.title}
      price={item.price}
      
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      <Hero />
    {cards}
    </div>
  );
}

export default App;
