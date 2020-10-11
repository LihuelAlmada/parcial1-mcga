import './style.css';
import React from 'react';

class Button extends React.Component{
    constructor(props) {
      super(props)
      this.state = {}
    }
    render(){
      return (
        <button className="button" onClick={() => this.setState({edit: false})}>{this.props.buttonName}</button>
      )
    }
}
export default Button;