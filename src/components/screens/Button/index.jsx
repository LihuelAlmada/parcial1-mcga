import './style.css';
import React from 'react';

class Button extends React.Component{
    constructor(props) {
      super(props)
      this.state = {}
    }
    render(){
      return (
        <button className="button">{this.props.buttonName}</button>
      )
    }
}
export default Button;