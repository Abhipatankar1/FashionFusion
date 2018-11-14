import React from 'react';
import Collar from '../Collar/Collar'
import Shirt from '../Shirt/Shirt';
import './Design.css';
// import Sidebars from '../Sidebar/Sidebar'

const Design = (props) => {
    
    // const props.display = 'style';
    return (
        <div className='design_wrap'>
            <h2>all the designes here</h2>
            {/* <Sidebars /> */}
            {
                props.display &&
                    (props.display === 'fabrics') ?
                    <div>
                        <span>White Shirt</span>
                    </div> : null
            }
            {
                props.display && (props.display === 'style') ?
                    <div>
                        <Collar changeCollar={props.changeCollar} />
                        <Shirt changeCollar={props.changeShirt} />
                    </div> : null
            }
        </div>
    )
}

export default Design