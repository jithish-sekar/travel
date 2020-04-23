import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showdevotional: false,
            showhills: false,
            showadventure: false,
            showbeachside: false,
            showpartytown: false,
        }
    }


    devotional() {
        this.setState({
            showbeachside: false,
            showadventure: false,
            showpartytown: false,
            showhills: false,
            showdevotional: !this.state.showdevotional
        })
    }

    hills() {
        this.setState({
            showpartytown: false,
            showbeachside: false,
            showdevotional: false,
            showadventure: false,
            showhills: !this.state.showhills
        })
    }

    adventure() {
        this.setState({
            showpartytown: false,
            showbeachside: false,
            showdevotional: false,
            showhills: false,
            showadventure: !this.state.showadventure
        })
    }

    beachside() {
        this.setState({
            showpartytown: false,
            showdevotional: false,
            showhills: false,
            showadventure: false,
            showbeachside: !this.state.showbeachside
        })
    }

    partytown() {
        this.setState({
            showbeachside: false,
            showdevotional: false,
            showhills: false,
            showadventure: false,
            showpartytown: !this.state.showpartytown
        })
    }


    tndevotional() {
        this.props.history.push('/tamilnadudevotional')
    }

    kldevotional() {
        this.props.history.push('/keraladevotional')
    }

    kadevotional() {
        this.props.history.push('/karnatakadevotional')
    }


    himachaldevotional() {
        this.props.history.push('/himachaldevotional')
    }
    learn() {
        this.props.history.push('/aboutus')
    }
    tnhills() {
        this.props.history.push('/tamilnaduhills')
    }

    render() {
        return (

            <div>
                <div className='home'>
                    <img
                        className='bgimg'
                        src='destiny3.png' />

                    <div className="container">
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

                {/* button */}
                <div>
                    <h1 className='planquatation'>We Plan Your Quotation</h1>
                    <h4 className='culturetrip'>"Culture Trip"</h4>
                    <br />
                    <center>
                        <button
                            onClick={() => this.devotional()}
                            className='btnquatation'>Devotional</button>
                        <button
                            onClick={() => this.hills()}
                            className='btnquatation'>Hills Station</button>
                        <button
                            onClick={() => this.adventure()}
                            className='btnquatation'>Adventure</button>
                        <button
                            onClick={() => this.beachside()}
                            className='btnquatation'>Beach Side</button>
                        <button
                            onClick={() => this.partytown()}
                            className='btnquatation'>Party Town</button>
                    </center>
                </div><br /><br />


                {/* devotional*/}

                <div>
                    {this.state.showdevotional ?
                        <div>
                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='tntemple.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Tamilnadu</h4>
                                        <button
                                            className='btntamilnadudevotional'
                                            onClick={() => this.tndevotional()}
                                        >Tamilnadu devotional</button>                                    </div>
                                </div>
                            </div></center><br />



                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='keralatemple.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Kerala </h4>
                                        <button
                                            onClick={() => this.kldevotional()}
                                            className='btntamilnadudevotional'
                                        >Kerala devotional</button>
                                    </div>
                                </div>
                            </div></center><br />

                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='katemple.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Karnataka</h4>
                                        <button
                                            onClick={() => this.kadevotional()}
                                            className='btntamilnadudevotional'
                                        >Karnataka devotional</button>
                                    </div>
                                </div>
                            </div></center><br />

                            <center>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                className='tamilnaduimg'
                                                src='templehimachal.jpg' alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Himachal Pradesh</h4>
                                            <button
                                                onClick={() => this.himachaldevotional()}
                                                className='btntamilnadudevotional'
                                            >Himachal devotional</button>
                                        </div>
                                    </div>
                                </div>
                            </center><br />

                        </div>
                        : null
                    }

                </div>

                {/* hills Station */}

                <div>
                    {this.state.showhills ?
                        <div>
                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='tamilnaduhills.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4></h4>
                                        <button
                                            onClick={()=>this.tnhills()}
                                            className='btntamilnadudevotional'
                                        >Tamilnadu Hills</button>
                                    </div>
                                </div>
                            </div></center><br />



                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='keralahills.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Kerala</h4>
                                        <button
                                            className='btntamilnadudevotional'
                                        >Kerala hills</button>
                                    </div>
                                </div>
                            </div></center><br />

                            <center><div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img
                                            className='tamilnaduimg'
                                            src='kahills.jpg' alt="Avatar" />
                                    </div>
                                    <div className="flip-card-back">
                                        <h4>Karnataka</h4>
                                        <button
                                            className='btntamilnadudevotional'
                                        >Karnataka hills</button>
                                    </div>
                                </div>
                            </div></center><br />

                            <center>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                className='tamilnaduimg'
                                                src='himachalhills.jpeg' alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Himachal Pradesh</h4>
                                            <button
                                                className='btntamilnadudevotional'
                                            >Himachal hills</button>
                                        </div>
                                    </div>
                                </div>
                            </center><br />

                        </div>
                        : null
                    }

                    {/* adventure */}
                    <div>
                        {this.state.showadventure ?
                            <div>
                                <center><div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                className='tamilnaduimg'
                                                src='himachaladventure.jpg' alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>HimachalPradesh
                                            </h4>
                                            <button
                                                className='btntamilnadudevotional'
                                            >Himachal Adventure</button>
                                        </div>
                                    </div>
                                </div></center><br />



                                <center><div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                className='tamilnaduimg'
                                                src='uttarakhandadventure.jpg' alt="Avatar" />
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Uttarakhand</h4>
                                            <button
                                                className='btntamilnadudevotional'
                                            >Uttarakhand Adventure</button>
                                        </div>
                                    </div>
                                </div></center>
                            </div>
                            : null
                        }

                        {/* beachside */}

                        <div>
                            {this.state.showbeachside ?
                                <div>
                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='beachgoa.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Goa</h4>
                                                <button className='btntamilnadudevotional'
                                                >Goa beachside</button>
                                            </div>
                                        </div>
                                    </div></center><br />



                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='beachka.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Karnataka</h4>
                                                <button className='btntamilnadudevotional'
                                                >Karnataka beachside</button>
                                            </div>
                                        </div>
                                    </div></center><br />

                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='beachkl.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Kerala</h4>
                                                <button className='btntamilnadudevotional'
                                                >Kerala beachside</button>
                                            </div>
                                        </div>
                                    </div></center>


                                </div>
                                : null
                            }
                        </div>

                        {/* partytown     */}

                        <div>
                            {this.state.showpartytown ?
                                <div>
                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='partygoa.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Goa</h4>
                                                <button className='btntamilnadudevotional'
                                                >Goa Party Town</button>
                                            </div>
                                        </div>
                                    </div></center><br />



                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='partyka.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Karnataka</h4>
                                                <button className='btntamilnadudevotional'
                                                >Karnataka Party Town</button>
                                            </div>
                                        </div>
                                    </div></center><br />

                                    <center><div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <img
                                                    className='tamilnaduimg'
                                                    src='partykl.jpg' alt="Avatar" />
                                            </div>
                                            <div className="flip-card-back">
                                                <h4>Kerala</h4>
                                                <button className='btntamilnadudevotional'
                                                >Kerala Party Town</button>
                                            </div>
                                        </div>
                                    </div></center>


                                </div>
                                : null
                            }
                        </div>
                        
                        <h2 className='exceptionalquality'>ECXEPTIONAL QUALITY</h2>
                        <h1 className='crafting'>Crafting exceptional experiences in the
                        world's most memorable places.
                        </h1>
                        <center>
                        <button
                            onClick={() => this.learn()}
                            className='learnbtn'>Learn More
                        </button>
                        </center>


                    </div >

                </div>

            </div>
        )
    }
}
export default Home;