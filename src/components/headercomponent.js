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

            <div className='head'>

                <nav className='headernav'>
                    <div className='log'>
                    <img
                        className='logo'
                        src='logo1.png' />   
                   </div>
                        <div className='head1'>
                    <span className='headernavspan'
                        onClick={() => this.Home()}
                    >Home</span>
                    <span className='headernavspan'
                        onClick={() => this.Aboutus()}
                    >About</span>
                    <span className='headernavspan'
                        onClick={() => this.Developers()}
                    >Developers</span>
                    </div>       
                </nav>
            </div>
        )
    }
}
export default HeaderComponent;