import React, { Component } from 'react';
import Draggable from 'react-draggable'; 
import Collar1 from './Assets/collarRev.png';
import Collar2 from './Assets/collarPlain.png';
import Collar3 from './Assets/collarButton.png';
import Collar4 from './Assets/collar_formal.png';
import Shirt1 from './Assets/shirtYesBtn.png';
import Shirt2 from './Assets/shirtNoBtn.png';
import Shirt3 from './Assets/formal_1.png';
import Pants1 from './Assets/pant1.png';
import Pants2 from './Assets/pant2.png';
import Top1 from './Assets/top1.png'; // Updated for gender
import './Avatar.css';

// Navbar Component for Gender & Category Selection
const Navbar = ({ onSelectComponent }) => {
  return (
    <div className='navbar_wrapper'>
      <h1>Clothing Designer</h1>
      <div className='menu'>
        <div className='menu_section'>
          <h3>Men</h3>
          <p onClick={() => onSelectComponent('collars')}>Collars</p>
          <p onClick={() => onSelectComponent('shirts')}>Shirts</p>
          <p onClick={() => onSelectComponent('pants')}>Pants</p>
        </div>
        <div className='menu_section'>
          <h3>Women</h3>
          <p onClick={() => onSelectComponent('tops')}>Tops</p>
          <p onClick={() => onSelectComponent('pants')}>Pants</p>
        </div>
      </div>
    </div>
  );
};

// Generic Image Selector Component
const ImageSelector = ({ images, onSelect, itemType }) => {
  return (
    <div className={`${itemType}-wrap`}>
      {images.map((image, index) => (
        <div key={index} onClick={() => onSelect(image)}>
          <img style={{ width: '15%' }} src={image} alt={`${itemType}-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

// Clothes Component Rendering Based on Gender
const Clothes = ({ collarImg, shirtImg, pantsImg, topImg, gender }) => {

  return (
    <div style={{ outline: '2px solid', width: '80%', height: '700px', position: 'relative', margin: '0 auto' }}>
      <h1>Design here</h1>
      {/* Adding a fixed boundary box for the user to drag within */}
      <div style={{ width: '500px', height: '600px', border: '2px solid black', position: 'relative', margin: '0 auto' }}>
        <Draggable bounds="parent">
          <div className='shirt_wrap'>
            <img src={shirtImg || topImg} alt='clothing' style={{ width: '100%', position: 'relative', zIndex: 1 }} />
          </div>
        </Draggable>
        <Draggable bounds="parent">
          <div className='collar_wrap'>
            <img src={collarImg} alt='collar' style={{ width: '70px', position: 'absolute', zIndex: 2 }} />
          </div>
        </Draggable>
        <Draggable bounds="parent">
          <div className='pants_wrap'>
            <img src={pantsImg} alt='pants' style={{ width: '100%', position: 'absolute', zIndex: 3 }} />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

// Main Component to Manage State and Selections
class All extends Component {
  state = {
    collarImg: Collar1,
    shirtImg: Shirt1,
    pantsImg: Pants1,
    topImg: null,
    gender: 'male',
    selectedComponent: 'collars',
  };

  // Methods to Update State
  changeCollar = (collarImg) => this.setState({ collarImg });
  changeShirt = (shirtImg) => this.setState({ shirtImg });
  changeTop = (topImg) => this.setState({ topImg });
  changePants = (pantsImg) => this.setState({ pantsImg });
  changeGender = (gender) => this.setState({ gender });
  handleSelectComponent = (component) => this.setState({ selectedComponent: component });

  render() {
    const { collarImg, shirtImg, pantsImg, topImg, gender, selectedComponent } = this.state;

    // Image arrays for different clothing items
    const collars = [Collar1, Collar2, Collar3, Collar4];
    const shirts = [Shirt1, Shirt2, Shirt3];
    const pants = [Pants1, Pants2];
    const tops = [Top1];

    return (
      <div>
        <Navbar onSelectComponent={this.handleSelectComponent} />
        <div className='app-container'>
          {/* Conditionally render ImageSelector based on selectedComponent */}
          {selectedComponent === 'collars' && (
            <ImageSelector images={collars} onSelect={this.changeCollar} itemType="collar" />
          )}
          {selectedComponent === 'shirts' && (
            <ImageSelector images={shirts} onSelect={this.changeShirt} itemType="shirt" />
          )}
          {selectedComponent === 'pants' && (
            <ImageSelector images={pants} onSelect={this.changePants} itemType="pants" />
          )}
          {selectedComponent === 'tops' && gender === 'female' && (
            <ImageSelector images={tops} onSelect={this.changeTop} itemType="top" />
          )}

          <Clothes
            collarImg={collarImg}
            shirtImg={shirtImg}
            pantsImg={pantsImg}
            topImg={topImg}
            gender={gender}
          />
        </div>
      </div>
    );
  }
}

export default All;
