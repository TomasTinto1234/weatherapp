import React from 'react';
import s from './Card.module.css';
import {Link} from 'react-router-dom';

export default function Card ({name, country, img, onClose, id, temp, lat, lon}) {
    return (
      <div key={id} className={s.contenedor} >
        <button onClick={() => onClose(id)} className={s.closeButton}>x</button>
        <Link to={`/${name}/${id}/${lat}/${lon}`} className={s.link}>
          <h1 className={s.h1}>{name} <span className= {s.pais}>{country}</span></h1>
        </Link>
        <div className={s.todo} >
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen del clima' className={s.imagen}/>
          <div className={s.text} >
            <div>
              <h2 className={s.h2}>{temp}°</h2>      
            </div> 
          </div>
        </div>
      </div>
    )
};
