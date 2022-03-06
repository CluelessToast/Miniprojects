import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './components/Data';
import TableImg from './components/TableImg';


function App() {

  const cards= Data.map(item=>{
    return(
      <Card
      key={item.id}
      image={item.profileImg}
      rating={item.stats.rating}
      reviews={item.stats.reviews}
      country={item.location}
      p={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
    )
  })
  
  return (
    <div>
      <Navbar />
      <TableImg />
      {/* <Hero /> */}
      <section className='card-list'>
      {cards}
      </section>
    </div>
  );
}

export default App;
