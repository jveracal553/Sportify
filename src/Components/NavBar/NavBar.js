import './NavBar.css';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Search from './Search';
import filter from '../../images/filter-solid.svg';
import map from '../../images/location-dot-solid.svg';
import { UserContext } from '../../context/userContext';

export default function NavBar() {
  const { user } = useContext(UserContext);
  const history = useHistory()
  const login = () =>{
    history.push('/login')
  }
  return (
    <div className='navbar'>
      <div className='topnav'>
        <div className='topnav__logo'>
          <i className='fas fa-futbol'></i>
          <Link to={'/'} className='topnav__logo'>Sportify</Link>
        </div>
        <div className='topnav__search'>
          <Search />
          <button
            type='button'
            className='topnav__search-filter topnav__center'
          >
            <img src={filter} className='topnav__search-filter-img' alt='' />
            Filtrar
          </button>
          <button type='button' className='topnav__search-map topnav__center'>
            <img src={map} className='' alt='' />
            Ver mapa
          </button>
        </div>
        {
          user.name!==''?
          <button type='button' className='topnav__singin'>
            {user.name}
          </button>
          :
          <button type='button' className='topnav__singin' onClick={login}>
           Iniciar sesión
          </button>
        }
      </div>
    </div>
  );
}
