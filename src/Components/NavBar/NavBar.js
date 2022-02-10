import './NavBar.css';
import Search from './Search';
import filter from '../images/filter-solid.svg';
import map from '../images/location-dot-solid.svg';

export default function NavBar() {
  return (
    <div class='navbar'>
      <div class='topnav'>
        <div class='topnav__logo'>
          <i class='fas fa-futbol'></i>
          <button class='topnav__logo'>Sportify</button>
        </div>
        <div class='topnav__search'>
          <Search />
          <button type='button' class='topnav__search-filter topnav__center'>
            <img src={filter} class='' alt='' />
            Filtrar
          </button>
          <button type='button' class='topnav__search-map topnav__center'>
            <img src={map} class='' alt='' />
            Ver mapa
          </button>
        </div>
        <button type='button' class='topnav__singin'>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
