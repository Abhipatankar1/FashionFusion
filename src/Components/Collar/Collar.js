import React from 'react';
import Collar1 from '../Assets/collarButton.png';
import Collar2 from '../Assets/collarPlain.png';
import Collar3 from '../Assets/collarRev.png'

export default function Collar(props) {
  return (
    <div>
        <div onClick={() => props.changeCollar(<img style={{width: '45%'}} src={Collar1} alt='collar' />)}>
            <img src={Collar1} alt='collar' />
        </div>
        <div onClick={() => props.changeCollar(<img style={{width: '45%'}} src={Collar2} alt='collar' />)}>
            <img src={Collar2} alt='collar' />
        </div>
        <div onClick={() => props.changeCollar( <img style={{width: '45%'}} src={Collar3} alt='collar' />)}>
            <img src={Collar3} alt='collar' />
        </div>
    </div>
  )
}
