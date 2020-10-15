import './style.css';
import React from 'react';
import { Field } from 'react-final-form';

function HomeForm(props){
  return(
    <form className="homeForm">
      <Field component="input" name="name" onChange={props.setValues} defaultValue={props.name}></Field>
      <Field component="input" name="year" onChange={props.setValues} defaultValue={props.year}></Field>
      <button className="button" onClick={props.changeEdit}>Guardar informacion</button>
    </form>
  )
}
export default HomeForm;

