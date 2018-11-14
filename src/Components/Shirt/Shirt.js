import React from 'react';
import Shirt1 from '../Assets/shirtYesBtn.png';
import Shirt2 from '../Assets/shirtNoBtn.png';

export default function Shirt(props) {
  return (
    <div>
    <div onClick={() => props.changeCollar(<img style={{width: '45%'}}  src={Shirt1} alt='shirt' />)}>
            <img style={{width: '10%'}} src={Shirt1} alt='shirt' />
        </div>
        <div onClick={() => props.changeCollar(<img style={{width: '43%'}}  src={Shirt2} alt='shirt' />)}>
            <img style={{width: '10%'}} src={Shirt2} alt='shirt' />
        </div>
    </div>
  )
}
