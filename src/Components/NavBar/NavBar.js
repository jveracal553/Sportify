import "./NavBar.css";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./Search";
import filter from "../../images/filter-solid.svg";
import map from "../../images/location-dot-solid.svg";
import { UserContext } from "../../context/userContext";
import SearchBar from "./Search";

export default function NavBar() {
  const { user, ClearTokenState } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();
  const login = () => {
    history.push("/login");
  };

  const gridowner = () => {
    console.log("estamos aqui");
    history.push("/gridowner");
  };

  const logoff = () => {
    // localStorage.clear();
    ClearTokenState();
    //window.location.reload(false);
    history.push("/login");
  };
  const reservas = () => {
    if (localStorage.getItem("type") === "user") {
      history.push("/reservauser");
    }
    if (localStorage.getItem("type") === "owner") {
      history.push("/reservaowner");
    }
  };

  return (
    <div className="navbar">
      <div className="topnav">
        <div className="topnav__logo">
          <i className="fas fa-futbol"></i>
          <Link to={"/"} className="topnav__logo">
            Sportify
          </Link>
        </div>
        {location.pathname == "/" && <SearchBar />}

        {user.name !== "" ? (
          <div className="group">
            <button
              type="button"
              className="topnav__singin"
              // onClick={gridowner}
            >
              <Link to={"/gridowner"}>{user.name}</Link>

              {/* {user.name} */}
            </button>
            <button
              type="button"
              className="topnav__reservas"
              onClick={reservas}
            >
              Ver Reservas
            </button>
            <button type="button" className="topnav__singoff" onClick={logoff}>
              Cerrar Sesion
            </button>
          </div>
        ) : (
          <button type="button" className="topnav__singin" onClick={login}>
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  );
}
