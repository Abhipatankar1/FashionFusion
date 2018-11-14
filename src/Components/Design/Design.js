import React from 'react';
import Collar from '../Collar/Collar'
import Shirt from '../Shirt/Shirt';
import './Design.css';
// import Sidebars from '../Sidebar/Sidebar'

const Design = (props) =>{
    return(
        <div className='design_wrap'>
            <h2>all the designes here</h2>
            {/* <Sidebars /> */}
            <Collar changeCollar={props.changeCollar} />

            <Shirt changeShirt={props.changeShirt} />
        </div>
    )
}

export default Design