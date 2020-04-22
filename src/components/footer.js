import React, { Component } from 'react';
class Footerpage extends Component {
    render() {
        return (

            <div className='footer'>
                <img
                    className='bgimgfooter1'
                    src='bag.png' />
                <center>
                <span className='ftrp'>Home</span>
                <span className='ftrp'>About</span>
                <span className='ftrp'>Developers</span>
                </center>
            </div>

        )
    }
}
export default Footerpage;