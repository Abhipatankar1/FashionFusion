import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Collar1 from './Assets/collarRev.png';
import Collar2 from './Assets/collarPlain.png';
import Collar3 from './Assets/collarButton.png';
import Collar4 from './Assets/collar_formal.png';
import github from './Assets/github.png';
import linkedin from './Assets/linkedin.png';
import './Avatar.css';

const All = () => {
  const [selectedOutfit, setSelectedOutfit] = useState({
    collar: { image: null, width: 300, height: 300 },
    shirt: { image: null, width: 300, height: 300 },
    pants: { image: null, width: 300, height: 300 },
    top: { image: null, width: 300, height: 300 },
    girlPants: { image: null, width: 300, height: 300 },
    menShirt: { image: null, width: 300, height: 300 },
  });

  const [showCollars, setShowCollars] = useState(false);
  const [showPants, setShowPants] = useState(false);
  const [showTops, setShowTops] = useState(false);
  const [showGirlPants, setShowGirlPants] = useState(false);
  const [showMenShirts, setShowMenShirts] = useState(false);

  const [aspectRatioLocked, setAspectRatioLocked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDrop = (e) => {
    const type = e.dataTransfer.getData('type');
    const image = e.dataTransfer.getData('image');
    setSelectedOutfit((prev) => ({
      ...prev,
      [type]: { ...prev[type], image },
    }));
    setSelectedItem(type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSelect = (type, value) => {
    setSelectedOutfit((prev) => ({
      ...prev,
      [type]: { ...prev[type], image: value },
    }));
    setSelectedItem(type);
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedOutfit((prev) => ({
          ...prev,
          [type]: { ...prev[type], image: reader.result },
        }));
        setSelectedItem(type);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleAspectRatio = () => {
    setAspectRatioLocked(!aspectRatioLocked);
  };

  const resetSize = () => {
    setSelectedOutfit((prev) => ({
      ...prev,
      [selectedItem]: { ...prev[selectedItem], width: 300, height: 300 },
    }));
  };

  const handleWidthChange = (e) => {
    const newWidth = e.target.value;
    setSelectedOutfit((prev) => ({
      ...prev,
      [selectedItem]: {
        ...prev[selectedItem],
        width: newWidth,
        height: aspectRatioLocked ? newWidth : prev[selectedItem].height,
      },
    }));
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    setSelectedOutfit((prev) => ({
      ...prev,
      [selectedItem]: {
        ...prev[selectedItem],
        height: newHeight,
        width: aspectRatioLocked ? newHeight : prev[selectedItem].width,
      },
    }));
  };

  const handleDeleteItem = (type) => {
    setSelectedOutfit((prev) => ({
      ...prev,
      [type]: { ...prev[type], image: null },
    }));
    setSelectedItem(null);
  };

  const renderDraggableImages = (items, type) => (
    items.map((item, index) => (
      <div
        key={index}
        style={{ display: 'inline-block', margin: '5px', cursor: 'pointer' }}
        onClick={() => handleSelect(type, item)}
      >
        <img
          src={item}
          alt={`${type} ${index + 1}`}
          style={{ width: '100px', height: 'auto' }}
        />
      </div>
    ))
  );

  const renderDroppedImage = (item, type) => {
    if (!item.image) return null;

    const sizeStyle = {
      width: `${item.width}px`,
      height: `${item.height}px`,
      cursor: 'move',
      position: 'absolute',
      border: selectedItem === type ? '2px solid blue' : 'none',
    };

    return (
      <Draggable key={type} bounds=".design-area">
        <div
          style={{ zIndex: 10 }}
          onClick={() => setSelectedItem(type)}
        >
          <img src={item.image} alt={type} style={sizeStyle} />
        </div>
      </Draggable>
    );
  };

  const toggleCollars = () => setShowCollars(!showCollars);
  const togglePants = () => setShowPants(!showPants);
  const toggleTops = () => setShowTops(!showTops);
  const toggleGirlPants = () => setShowGirlPants(!showGirlPants);
  const toggleMenShirts = () => setShowMenShirts(!showMenShirts);

  const girlTops = Array.from({ length: 18 }, (_, i) => require(`./Assets/girl_top${i + 1}.png`));
  const girlPants = Array.from({ length: 4 }, (_, i) => require(`./Assets/girl_pant${i + 1}.png`));
  const menPants = Array.from({ length: 9 }, (_, i) => require(`./Assets/men_pant${i + 1}.png`));
  const menShirts = Array.from({ length: 6 }, (_, i) => require(`./Assets/men_shirt${i + 1}.png`));
  const collars = [Collar1, Collar2, Collar3, Collar4];

  return (
    <div className="container">
      <div className="navbar">
        <h2>Select Components</h2>

        <h3 onClick={toggleCollars} style={{ cursor: 'pointer' }}>Collars {showCollars ? '▼' : '▲'}</h3>
        {showCollars && (
          <div>
            <div>{renderDraggableImages(collars, 'collar')}</div>
            <input type="file" onChange={(e) => handleImageUpload(e, 'collar')} />
          </div>
        )}

        <h3 onClick={toggleMenShirts} style={{ cursor: 'pointer' }}>Men's Shirts {showMenShirts ? '▼' : '▲'}</h3>
        {showMenShirts && (
          <div>
            <div>{renderDraggableImages(menShirts, 'menShirt')}</div>
            <input type="file" onChange={(e) => handleImageUpload(e, 'menShirt')} />
          </div>
        )}

        <h3 onClick={togglePants} style={{ cursor: 'pointer' }}>Men Pants {showPants ? '▼' : '▲'}</h3>
        {showPants && (
          <div>
            <div>{renderDraggableImages(menPants, 'pants')}</div>
            <input type="file" onChange={(e) => handleImageUpload(e, 'pants')} />
          </div>
        )}

        <h3 onClick={toggleTops} style={{ cursor: 'pointer' }}>Tops {showTops ? '▼' : '▲'}</h3>
        {showTops && (
          <div>
            <div>{renderDraggableImages(girlTops, 'top')}</div>
            <input type="file" onChange={(e) => handleImageUpload(e, 'top')} />
          </div>
        )}

        <h3 onClick={toggleGirlPants} style={{ cursor: 'pointer' }}>Girl Pants {showGirlPants ? '▼' : '▲'}</h3>
        {showGirlPants && (
          <div>
            <div>{renderDraggableImages(girlPants, 'girlPants')}</div>
            <input type="file" onChange={(e) => handleImageUpload(e, 'girlPants')} />
          </div>
        )}
      </div>

      <div
        className="design-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ width: '100%', height: '1500px', border: '1px solid black', position: 'relative' }}
      >
        {Object.entries(selectedOutfit).map(([key, value]) => (
          renderDroppedImage(value, key)
        ))}
      </div>

      {selectedItem && (
        <div className="adjustments">
          <div>
            <button onClick={toggleAspectRatio}>
              {aspectRatioLocked ? 'Unlock Aspect Ratio' : 'Lock Aspect Ratio'}
            </button>
            <button onClick={resetSize}>Reset Size</button>
            <button onClick={() => handleDeleteItem(selectedItem)}>Delete {selectedItem}</button>
          </div>
          <div>
            <label>
              Width:
              <input
                type="range"
                min="100"
                max="600"
                value={selectedOutfit[selectedItem].width}
                onChange={handleWidthChange}
              />
            </label>
            <label>
              Height:
              <input
                type="range"
                min="100"
                max="600"
                value={selectedOutfit[selectedItem].height}
                onChange={handleHeightChange}
              />
            </label>
          </div>
        </div>
      )}

<div className="developer-section">
  <div className="contact-info">
    <h3>Contact Us</h3>
    <p>Phone: +91-8956889077</p>
    <p>Email: harshshrivastav46@gmail.com</p>
  </div>

  <div className="project-name">
    <h1>Welcome to FashionFusion</h1> {/* Replace "Project Name" with the actual name of your project */}
  </div>

  <div className="social-icons">
    <a href="https://github.com/harshshri11" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <img src={github} alt="GitHub" className="social-icon" />
    </a>
    <a href="https://linkedin.com/in/harsh-shrivastav-30614825b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <img src={linkedin} alt="LinkedIn" className="social-icon" />
    </a>
  </div>
</div>
    </div>
  );
};

export default All;
