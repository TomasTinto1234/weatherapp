import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({cities, onClose}) {

  document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1601383124525-9772976a8b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2llbG8lMjBmb25kbyUyMGRlJTIwcGFudGFsbGF8ZW58MHx8MHx8&w=1000&q=80')"

  if (cities){
    return (
      <div className={s.cards}>
      {
        cities.map (c => { return (< Card 
          id={c.id}
          key= {c.id}
          name={c.name}
          country={c.country}
          img={c.img}
          temp={c.temp}
          lat={c.lat}
          lon={c.lon}
          onClose={onClose}
        />)})
      }
      </div>)
  } 
  else {
    return(
      <div>
         {
        cities.map (c => { return (< Card 
          id={c.id}
          key= {c.id}
          name={c.name}
          country={c.country}
          img={c.img}
          temp={c.temp}
          lat={c.lat}
          lon={c.lon}
          onClose={onClose}
        />)})
      }
      </div>
    )
  }
}
