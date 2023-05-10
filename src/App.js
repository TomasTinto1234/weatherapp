import React from 'react';
import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import OneCard from './components/oneCard.jsx';
import { Route } from 'react-router-dom';
import axios from 'axios';


export default function App() {
  const [cities, setCities] = useState ([]);

  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id));
  }

  function onSearch (ciudad, repeat) {
    if (ciudad){
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
      .then(r => r.data)
      .then((search) => {
        if (search.id){
          const searcherCity = {
            lat: search.coord.lat,
            lon: search.coord.lon,
            id: search.id,
            name: search.name,
            country: search.sys.country,
            temp: Math.round (search.main.temp),
            img: search.weather[0].icon
          }
            cities.forEach (c => {if (c.id === searcherCity.id) return (repeat = true, alert ('Ciudad ya seleccionada'))})
            if (!repeat) setCities(oldCities => [...oldCities, searcherCity]);
            }else {
          alert("Ciudad no encontrada");}
        }
      )}
      }
    return (
      <div className='App'>
        <Nav onSearch={onSearch}/>
        <Route exact path='/' >
          <Cards cities={cities} onClose={onClose}/>
        </Route>
        <Route path="/:name/:id/:lat/:lon">
            < OneCard />
        </Route>
      </div>
    );
  }
