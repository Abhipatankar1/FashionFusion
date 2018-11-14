import React, { Component } from 'react';
// import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Collar1 from '../Assets/collarButton.png';
import Collar2 from '../Assets/collarPlain.png';
import Collar3 from '../Assets/collarRev.png'

class Collar extends Component {
    state = {
        visible: false
    }

    toggleCollar = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
    return (
        <div>
            <div >
                <img onClick={this.toggleCollar} style={{ width: '15%' }} src={Collar1} alt='collar' />
            </div>

            {
                this.state.visible &&
                <div>
                    <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar1} alt='collar' />)}>
                        <img style={{ width: '15%' }} src={Collar1} alt='collar' />
                    </div>
                    <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar2} alt='collar' />)}>
                        <img style={{ width: '15%' }} src={Collar2} alt='collar' />
                    </div>
                    <div onClick={() => this.props.changeCollar(<img style={{ width: '45%' }} src={Collar3} alt='collar' />)}>
                        <img style={{ width: '15%' }} src={Collar3} alt='collar' />
                    </div>
                </div>
            }

        </div>
    )
        }
}

export default Collar;