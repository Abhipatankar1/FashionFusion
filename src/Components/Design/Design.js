import React from 'react';
import Collar from '../Collar/Collar'
import Shirt from '../Shirt/Shirt'

const Design = (props) =>{
    return(
        <div>
            <h2>all the designes here</h2>
            <Collar changeCollar={props.changeCollar} />

            <Shirt changeCollar={props.changeShirt} />
        </div>
    )
}

export default Design