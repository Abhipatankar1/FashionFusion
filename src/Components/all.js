import React, { Component } from 'react';
import Design from './Design/Design';
import Clothes from './Clothes/Clothes';
import Collar1 from '../Components/Assets/collarRev.png';
import Shirt1 from '../Components/Assets/shirtYesBtn.png';
import Navbar from '../Components/Navbar/Navbar'


class All extends Component {
    state = {
        collarImg:  <img style={{width: '45%'}} src={Collar1} alt='collar' />,
        shirtImg:   <img style={{width: '43%'}} src={Shirt1} alt='shirt' />
    }

    changeCollar = (collarImg) => {
        this.setState({collarImg})
    }

    changeShirt = (shirtImg) =>{
        this.setState({shirtImg})
    }

  render() {
    return (
      <div>
          <Navbar />
          <div style={{display: 'inline-flex', width: '100vw', height: '100vh'}}>
        <Design changeCollar={this.changeCollar} changeShirt={this.changeShirt}/>
        <Clothes collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} />

          </div>
      </div>
    )
  }
}

export default All;