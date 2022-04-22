import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import soccer from "../../images/soccer.jpg";
import "./SelecLogin.css";

function SelecLogin() {
  return (
    <div className="register">
      <div className="register-text">
        <div className="register-text__logo">
          <i className="fas fa-futbol"></i>
          <Link to={"/"} className="register-text__logo-name color">
            Sportify
          </Link>
        </div>
        <div>
          {/* <Button color="42A692">
            <Link to={"/login/owner"}>Soy un Propietarios</Link>
          </Button> */}

          <SimpleGrid p={4} spacing={10}>
            <Button color="#42A692">
              <Link to={"/login/owner"}>Propietario</Link>
            </Button>
            <Button color="#42A692">
              <Link to={"/login/user"}>Soy un Usuario</Link>
            </Button>
          </SimpleGrid>
        </div>
        {/* <div>
          <Link to={"/login/user"} className="register-text__logo link color">
            Soy un Usuario
          </Link>
        </div> */}
      </div>
      <div className="register-image">
        <img className="soccer" src={soccer} alt="" />
      </div>
    </div>
  );
}

export default SelecLogin;
