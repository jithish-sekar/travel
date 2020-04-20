import React, { Component } from 'react';
class Home extends Component {
    render() {
        return (

            <div>
                <div className='home'>
                    <img
                        className='bgimg'
                        src='destiny1.png' />

                    <div className="container">
                        {/* <h4 className="leavefoot">
                        "culture trip"
                     </h4> */}
                        <img
                            className='travelpng'
                            src='travel.png' />
                        <div className="circle-container">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-container">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-container">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='planquatation'>We Plan Your Quatation</h1>
                   <center> <button className='btnquatation'>Food & Drink</button>
                    <button className='btnquatation'>See & Do</button>
                    <button className='btnquatation'>Places To Stay</button>
                    <button className='btnquatation'>Guides & Stay</button></center>


                </div>


                {/* lip card */}

                {/* <div class="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    className='tamilnaduimg'
                                    src='Brihadisvara-Temple.jpg' alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <h1>Tamilnadu</h1>
                                <p>Architect & Engineer</p>
                                <p>We love that place</p>
                            </div>
                        </div>
                    </div> */}



            </div >




        )
    }
}
export default Home;