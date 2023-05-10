import React from 'react';
import { useState} from 'react';
import s from './oneCard.module.css';
import Humedad from '../Images/humedad.png';
import st from '../Images/sterm.png';
import DailyCard from './DailyCard';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";

const apikey = "6d9c5e3d16e6e7279c0062c00dda8c8e"

function OneCard () {
    const {name} = useParams ()
    const {id} = useParams ();
    const {lat} = useParams ();
    const {lon} = useParams ();
    const [city, setCity] = useState (undefined)
    React.useEffect (() => {
        fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=-34.6132&lon=-58.3772&exclude=hourly,minutely,alerts&lang=apikey=${apikey}&units=metric%20401%20(U`)
        .then(res => res.json())
        .then(recurso => {
            console.log(recurso)
            if(recurso.current){
                const ciudad = [{
                    min: Math.round(recurso.daily[0].temp.min),
                    max: Math.round(recurso.daily[0].temp.max),
                    img: recurso.current.weather[0].icon,
                    description: recurso.current.weather[0].description,
                    id: id,
                    temp: Math.round (recurso.current.temp),
                    sTerm: Math.round (recurso.current.feels_like),
                    name: name,
                    humidity: recurso.current.humidity,
                    hora: recurso.current.dt,
                    amanecer: recurso.current.sunrise,
                    atardecer: recurso.current.sunset 
                },
                [{
                    min: Math.round(recurso.daily[1].temp.min),
                    max: Math.round(recurso.daily[1].temp.max),
                    img: recurso.daily[1].weather[0].icon,
                }, 
                {
                    min: Math.round(recurso.daily[2].temp.min),
                    max: Math.round(recurso.daily[2].temp.max),
                    img: recurso.daily[2].weather[0].icon,
                },
                {
                    min: Math.round(recurso.daily[3].temp.min),
                    max: Math.round(recurso.daily[3].temp.max),
                    img: recurso.daily[3].weather[0].icon,
                },
                {
                    min: Math.round(recurso.daily[4].temp.min),
                    max: Math.round(recurso.daily[4].temp.max),
                    img: recurso.daily[4].weather[0].icon,
                },
                {
                    min: Math.round(recurso.daily[5].temp.min),
                    max: Math.round(recurso.daily[5].temp.max),
                    img: recurso.daily[5].weather[0].icon,
                }]
            ];
            setCity(ciudad);
        } else {
            setCity (null)
        }
    })
    }, [lat,lon,name,id])
if (city===undefined){

const override = {
  display: "block",
  paddingTop: '50vh',
  margin: "0 auto",
  borderColor: "black",
};

  return (
    <div className="sweet-loading">
      <SyncLoader loading={true} cssOverride={override} size={15} margin={7}/>
    </div>
  )
}

else {
    var x = 1
    var diaSemana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Mañana'
    ]
    var dia = new Date ().getDay()


    // if (city[0].hora > city[0].amanecer && city[0].hora < city[0].atardecer){
    //     document.querySelector('body').style.backgroundImage = "url('https://radiofonica.com/wp-content/uploads/2020/12/clima2.jpg')"
    // } else {
    //     document.querySelector('body').style.backgroundImage = "url('https://s1.1zoom.me/big0/638/Milky_Way_Sky_Night_447884.jpg')"
    // }

    
    return (
        <div key={id} className={s.contenedor}>
            <Link to='/'>
                <button className={s.closeButton}>x</button>
            </Link>
            <p className={s.h1}> {name}</p>
            {/* <div className={s.info}>        
                <p className={s.h2}>{city[0].temp}°</p>
                    <div >
                        <img src={`http://openweathermap.org/img/wn/${city[0].img}@2x.png`} alt='imagen del clima' className={s.imagen}/>        
                        <p className={s.time}> {city[0].description} </p>
                    </div>
                    <div className={s.elementos}>
                        <div className={s.temp}> 
                            <div>
                                <h4 className={s.h4}>Min</h4>
                                <h3 className={s.h3}>{city[0].min}°</h3>
                            </div>
                            <div>
                                <h4 className={s.h4}>Max</h4>
                                <h3 className={s.h3}>{city[0].max}°</h3>
                            </div>
                        </div>
                        <div className={s.temp}>
                            <div>
                                <img src={Humedad} alt='Humedad' className={s.humedad} />
                                <p className={s.h4}>{city[0].humidity}%</p>
                            </div>
                            <div>
                                <img src={st} alt='Sens term' className={s.humedad}/>
                                <p className={s.h4}>{city[0].sTerm}°</p>
                            </div>
                        </div>
                    </div>
        </div> */}
        {/* <div className={s.cards}>
            {city[1].map (c => {return (
                < DailyCard 
                    key= {c.id} 
                    min={c.min} 
                    date= {diaSemana[x === 1? 7: dia+x > 6? dia-(7-x) : dia+x]}
                    img={c.img}
                    max={c.max}
                    x= {x = x+1} 
                />
            )})}
        </div> */}
        </div>)
    }
}

export default OneCard;