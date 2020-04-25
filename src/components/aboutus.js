import React, { Component } from 'react';

class Aboutus extends Component {
    render() {
        return (
            <div className="aboutPage">
<br/><br/>
                <center>
                    <img
                        className='board'
                        src='board.png' />
                </center>
                <h1 className='h1about'>"We collaborate with brands and agencies to create memorable experiences."
                 </h1>
                <h2 className='h2about'>
                    Think of us as more of a creative partner than a resource. This means we have shared perspective on how we can work together to achieve your goals. Basically, your new BFF.
                 </h2><br/>
                <div className='strategies'>
                    <div className="p-30px">
                        <span className='span1'>
                            Discover
                        </span>
                        <span>
                            <li className='li1'>Research</li>
                            <li className='li1'>Strategy</li>
                            <li className='li1'>Ideation</li>
                        </span>
                    </div>
                    <div className="p-30px">
                        <span className='span1'>
                            Design
                        </span>
                        <li className='li1'>Ux</li>
                        <li className='li1'>Branding</li>
                        <li className='li1'>Visual Design</li>
                    </div>
                    <div className="p-30px">
                        <span className='span1'>
                            Develop
                        </span>

                        <span>
                            <li className='li1'>Research</li>
                            <li className='li1'>Strategy</li>
                            <li className='li1'>Ideation</li>
                        </span>
                    </div>
                </div><br />


            </div>



        )
    }
}
export default Aboutus;