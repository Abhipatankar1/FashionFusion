import React, { Component, useState } from 'react';
import Collar1 from '../Assets/collarButton.png';
import Collar2 from '../Assets/collarPlain.png';
import Collar3 from '../Assets/collarRev.png';
import Collar4 from '../Assets/collar_formal.png';
import Shirt1 from '../Assets/shirtYesBtn.png';
import Shirt2 from '../Assets/shirtNoBtn.png';
import Shirt3 from '../Assets/formal_1.png';
import top1 from './Assets/top1.png';

import Sleeve from './Assets/shortSleeves.png';
import './App.css';

// Avatar Component

export default function Avatar() {
  return (
    <div className='manq_wrap'>
      <img src={Person} alt='' />
    </div>
  )
}


// Clothes Component
function Clothes({ collarImg, shirtImg }) {
  return (
    <div style={{ outline: '2px solid', width: '100%' }}>
      <h1>Design here</h1>
      <div className='collar_wrap'>{collarImg}</div>
      <div className='shirt_wrap'>{shirtImg}</div>
      <div>
        <Avatar />
      </div>
    </div>
  );
}

// Collar Component
const Collar = ({ changeCollar }) => {
  return (
    <div className='collar-toggle'>
      <img src={Collar1} alt='Collar 1' onClick={() => changeCollar(Collar1)} />
      <img src={Collar2} alt='Collar 2' onClick={() => changeCollar(Collar2)} />
      <img src={Collar3} alt='Collar 3' onClick={() => changeCollar(Collar3)} />
      <img src={Collar4} alt='Collar 4' onClick={() => changeCollar(Collar4)} />
    </div>
  );
};

  toggleCollar = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  class All extends Component {
    state = {
      selectedComponent: null,
      collarImg: null,
      shirtImg: null,
    };
  
    handleSelectComponent = (component) => {
      this.setState({ selectedComponent: component });
    };
  
    changeCollar = (collarImg) => {
      this.setState({ collarImg });
    };
  
    changeShirt = (shirtImg) => {
      this.setState({ shirtImg });
    };
  
    render() {
      return (
        <div>
          <Navbar onSelectComponent={this.handleSelectComponent} />
          <div className='app-container'>
            {this.state.selectedComponent === 'collar' && (
              <Collar changeCollar={this.changeCollar} />
            )}
            {this.state.selectedComponent === 'shirts' && (
              <Shirt changeShirt={this.changeShirt} />
            )}
            <div className='manq_wrap'>
              <h2>Your Design</h2>
              {this.state.collarImg && <img src={this.state.collarImg} alt='Selected Collar' />}
              {this.state.shirtImg && <img src={this.state.shirtImg} alt='Selected Shirt' />}
            </div>
          </div>
        </div>
      );
    }
  }

// Shirt Component
function Shirt({ changeShirt }) {
  return (
    <div>
      <div onClick={() => changeShirt(<img style={{ width: '45%', height: 'auto', objectFit: 'contain' }} src={Shirt1} alt='shirt 1' />)}>
    <img style={{ width: '10%' }} src={Shirt1} alt='shirt 1' />
</div>
<div onClick={() => changeShirt(<img style={{ width: '45%', height: 'auto', objectFit: 'contain' }} src={Shirt2} alt='shirt 2' />)}>
    <img style={{ width: '10%' }} src={Shirt2} alt='shirt 2' />
</div>
<div onClick={() => changeShirt(<img style={{ width: '100%', height: 'auto', objectFit: 'contain' }} src={Shirt3} alt='shirt 3' />)}>
    <img style={{ width: '10%' }} src={Shirt3} alt='shirt 3' />
</div>
<div onClick={() => changeShirt(<img style={{ width: '100%', height: 'auto', objectFit: 'contain' }} src={top1} alt='top1' />)}>
    <img style={{ width: '10%' }} src={top1} alt='top1' />
</div>
</div>
  );
}

// Sleeve Component
// Sleeve Component
const Sleeve = ({ changeSleeve }) => {
  return (
    <div className='sleeve-toggle'>
      <div onClick={() => changeSleeve(<img style={{width: '40%'}} src={Sleeve} alt='Sleeve'/>)}>
        <img style={{ width: '10%' }} src={Sleeve} alt='Sleeves' />
      </div>
    </div>
  );
};



// Design Component
function Design({ changeCollar, changeShirt }) {
  return (
    <div className='design_wrap'>
      <h2>All the designs here</h2>
      <Collar changeCollar={changeCollar} />
      <Shirt changeShirt={changeShirt} />
    </div>
  );
}

// Navbar Component
// Navbar Component
const Navbar = ({ onSelectComponent }) => {
  return (
    <div className="navbar">
      <div className="navbar-section women-section">
        <h2>Women</h2>
        <p onClick={() => onSelectComponent('collar')}>Collars</p>
        <p onClick={() => onSelectComponent('shirts')}>Shirts</p>
        {/* Add more options for women's clothing here */}
      </div>
      <div className="navbar-section men-section">
        <h2>Men</h2>
        <p onClick={() => onSelectComponent('collar')}>Collars</p>
        <p onClick={() => onSelectComponent('shirts')}>Shirts</p>
        <p onClick={() => onSelectComponent('sleevs')}>Sleeve</p>
        {/* Add more options for men's clothing here */}
      </div>
    </div>
  );
};



// Sidebar Component
function Sidebar({ setCurrentComponent }) {
  return (
    <div className='sidebar'>
      <h3>Components</h3>
      <button onClick={() => setCurrentComponent('collar')}>Collars</button>
      <button onClick={() => setCurrentComponent('shirt')}>Shirts</button>
      <button onClick={() => setCurrentComponent('cuffs')}>Cuffs</button>
      {/* Add more buttons for different components here */}
    </div>
  );
}

// Cuffs Component
function Cuffs() {
  return (
    <div>
      <h2>All the cuffs</h2>
    </div>
  );
}

// Main App Component
export default function App() {
  const [collarImg, setCollarImg] = useState(null);
  const [shirtImg, setShirtImg] = useState(null);
  const [currentComponent, setCurrentComponent] = useState('collar'); // State to manage selected component

  return (
    <div className="app-container">
      <Sidebar setCurrentComponent={setCurrentComponent} />
      <div className="main-content">
        <Navbar />
        <Design changeCollar={setCollarImg} changeShirt={setShirtImg} />
        <Clothes collarImg={collarImg} shirtImg={shirtImg} />
        {currentComponent === 'cuffs' && <Cuffs />}
      </div>
    </div>
  );
}
