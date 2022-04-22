import { useState } from "react";
import soccer from '../../images/soccer.jpg';
import { Link } from "react-router-dom";


export default function RegistrarCanchita() {
  const [userState, setUser] = useState({});
  const [img, setImg] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...userState, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = async() => {
        await fetch('http://localhost:3001/api/soccerField/create', {
            method: 'POST',
            body: JSON.stringify({ image: reader.result, data: userState }),
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json',
            },
          });
    };
  };

  return (
    <div className="login">
      <div className="login-text">
        <div className="login-text__logo">
          <i className="fas fa-futbol"></i>
          <Link to={"/"} className="login-text__logo-name color">
            Sportify
          </Link>
        </div>
        <div className="login-text__info">
          <p className="login-text__info-title">
            Bienvenido a <br /> Sportify
          </p>
          <form className="login-text__info-form">
             <input
              name="name"
              className="login-text__info-form-email"
              type='text'
              placeholder="Nombre de la canchita"
              onChange={handleChange}
            ></input>
            <input
              name="start"
              className="login-text__info-form-email"
              type='number'
              placeholder="Hora de apertura"
              onChange={handleChange}
            ></input>
            <input
              name="end"
              className="login-text__info-form-email"
              type='number'
              placeholder="Hora de cierre"
              onChange={handleChange}
            ></input>
            <input
              type='number'
              name="number"
              placeholder="Ingresa el número de cancha actual"
              onChange={handleChange}
            ></input>
            <input
              type='price'
              name="number"
              placeholder="Ingresa el Precio en S/ ."
              onChange={handleChange}
            ></input>

              <input
                type="file"
                placeholder="Ingresa tu imagen"
                onChange={(e) => setImg(e.target.files[0])}
              ></input>

          </form>
        </div>
        <div>
        <button className="login-text__button" type="submit" onClick={submit}>
          Agregar Cancha
        </button>
        </div>
      </div>
      <div className="login-image">
        <img className="soccer" src={soccer} alt="" />
      </div>
    </div>
  );
}