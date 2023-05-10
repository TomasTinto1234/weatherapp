import React from 'react';
import Logo from '../Images/129023.png';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import {Link} from 'react-router-dom';
// import './pruebaOnOff.css';

function Nav({onSearch}) {

  return (
    <nav className={s.nav}>
      <Link to='/' className={s.link}>
        <div>
          <img src={Logo} alt="imagen del clima" id={s.logoClima}/>
          <span >Weather App</span>
        </div>
      </Link>
        {/* <div className='container'>
            <button className='btn' onClick={modeOnOff}></button>
            <button className='ball' ></button> 
        </div> */}
      <SearchBar onSearch={onSearch}/> 
    </nav>
  );
};

export default Nav;
