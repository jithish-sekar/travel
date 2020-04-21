import React, { Component } from 'react';
class HeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    Home = () => {
        this.props.history.push('/home')
    }
    Aboutus = () => {
        this.props.history.push('/aboutus')
    }

    Developers = () => {
        this.props.history.push('/developers')
    }
    render() {
        return (

            <div>
                <nav className='headernav'>
                    <span className='headernavspan'
                        onClick={() => this.Home()}
                    >Home</span>
                    <span className='headernavspan'
                        onClick={() => this.Aboutus()}
                    >About</span>
                    <span className='headernavspan'
                        onClick={() => this.Developers()}
                    >Developers</span>

                </nav>
            </div>
        )
    }
}
export default HeaderComponent;