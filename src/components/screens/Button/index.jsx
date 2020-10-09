import './style.css';
import React from 'react';

const Button = (props) => (
    <>
    <button className="button" color="red">{props.buttonName}</button>
    </>
)
export default Button;