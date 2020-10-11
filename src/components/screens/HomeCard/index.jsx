import './style.css';
import React from 'react';

const HomeCard = (props) => (
  <>
  <div className="homeCard">
      <div>{props.name}</div>
      <div>{props.year}</div>
  </div>
  </>
)
export default HomeCard;