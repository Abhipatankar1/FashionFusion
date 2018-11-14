import React, { Component } from 'react';
import './Navbar.css';
import Design from '../Design/Design';


export default class Navbar extends Component {

  handleFabric = () => {
    // return 'fabrics';
    console.log('i am here')
    return <Design props='fabrics' />
    
  }


  render() {
    return (
      <div className='navbar_wrapper'>
        <p onClick={this.handleFabric}>Fabrics</p>
        <p onClick={this.handleStyles}>Styles</p>
      </div>
    )
  }
}
