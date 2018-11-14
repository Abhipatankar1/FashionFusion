import React from 'react';
import Person from '../Assets/manq.png';
import './Avatar.css';

export default function Avatar() {
  return (
    <div className='manq_wrap'>
      <img src={Person} alt='' />
    </div>
  )
}
