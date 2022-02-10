import "./NavBar.css";
import Search from "./Search";
import filter from "../images/filter-solid.svg";
import map from "../images/location-dot-solid.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="topnav">
        <div className="topnav__logo">
          <i className="fas fa-futbol"></i>
          <button className="topnav__logo">Sportify</button>
        </div>
        <div className="topnav__search">
          <Search />
          <button
            type="button"
            className="topnav__search-filter topnav__center"
          >
            <img src={filter} className="" alt="" />
            Filtrar
          </button>
          <button type="button" className="topnav__search-map topnav__center">
            <img src={map} className="" alt="" />
            Ver mapa
          </button>
        </div>
        <button type="button" className="topnav__singin">
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
