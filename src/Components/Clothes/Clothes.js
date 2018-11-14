import React from 'react';
import Person from '../Avatar/Avatar';
import './Clothes.css';

const Clothes = (props) =>{
    return(
        <div>
            <h1>design here</h1>
            <div className='collar_wrap'>{props.collarImg}</div>

             <div className='shirt_wrap'>{props.shirtImg}</div>
            <div>
                <Person />
            </div>
        </div>
    )
}

export default Clothes