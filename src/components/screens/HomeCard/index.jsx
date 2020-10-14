import './style.css';
import React from 'react';

const HomeCard = (props) => (
  <>
  <div className="homeCard">
      <div>Nombre: {props.name}</div>
      <div>Año: {props.year}</div>
      <button className="button" onClick={props.changeEdit}>editar informacion</button>
  </div>
  </>
)
export default HomeCard;