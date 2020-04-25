import React, { Component } from 'react';
import { Route } from 'react-router-dom';
class Goa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showtrivandrumfood: false,
            showtrivandrumseedo: false,
            showtrivandrumlifestyle: false,
            showmaduraifood: false,
            showmaduraiseedo: false,
            showmadurailifestyle: false,
            showkumbakonamlifestyle: false,
            showkumbakonamseedo: false,
            showmakumbakonamfood: false
        }
    }

    enquiry() {
        this.props.history.push('/enquiry')
    }

    trivandrumfood() {
        this.setState({
            showtrivandrumseedo: false,
            showtrivandrumfood: !this.state.showtrivandrumfood,
            showtrivandrumlifestyle: false
        })
    }

    trivandrumseedo() {
        this.setState({
            showtrivandrumlifestyle: false,
            showtrivandrumseedo: !this.state.showtrivandrumseedo,
            showtrivandrumfood: false,
        })
    }

    trivandrumlifestyle() {
        this.setState({
            showtrivandrumseedo: false,
            showtrivandrumfood: false,
            showtrivandrumlifestyle: !this.state.showtrivandrumlifestyle
        })
    }

    maduraifood() {
        this.setState({
            showmaduraifood: !this.state.showmaduraifood,
            showmaduraiseedo: false,
            showmadurailifestyle: false
        })
    }

    maduraiseedo() {
        this.setState({
            showmaduraiseedo: !this.state.showmaduraiseedo,
            showmaduraifood: false,
            showmadurailifestyle: false
        })
    }
    madurailifestyle() {
        this.setState({
            showmaduraiseedo: false,
            showmaduraifood: false,
            showmadurailifestyle: !this.state.showmadurailifestyle
        })
    }

    kumbakonamfood() {
        this.setState({
            showmakumbakonamfood: !this.state.showmakumbakonamfood,
            showkumbakonamseedo: false,
            showkumbakonamlifestyle: false
        })
    }

    kumbakonamseedo() {
        this.setState({
            showmakumbakonamfood: false,
            showkumbakonamseedo: !this.state.showkumbakonamseedo,
            showkumbakonamlifestyle: false
        })
    }
    kumbakonamlifestyle() {
        this.setState({
            showmakumbakonamfood: false,
            showkumbakonamseedo: false,
            showkumbakonamlifestyle: !this.state.showkumbakonamlifestyle
        })
    }


    render() {
        return (

            <div>
                <h1 className='devotionalh1'>Goa Beach</h1>
                <center>
                    <img
                        className='devimg1'
                        src='beach.png' />
                </center>
                <h2 className='tndevotional'>Destinys Goa Packages</h2>
                <center>
                    <a href="goa1.pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="goa1.pdf">
                        <button className='btnquatation'>
                            Package 2
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                </center>
                <div><br />
                    <center>
                        <button
                            onClick={() => this.enquiry()}
                            className='enqbook'>
                            Enquiry
                        </button>
                        <br /><hr />

                        {/* thanjavur */}
                        <h4 className='tndevotional'>Explore</h4>
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>North Goa
                        </h5>
                        <img
                            className="gallery"
                            src="goai.jpg" /><br />
                        <h1 className='instruction'>
                            North Goa is one of the two districts that make up the state of Goa in India. The district has an area of 1736 km², and is bounded by Sindhudurg district of Maharashtra state to the north and by Belgaum district of Karnataka to the east, by South Goa District to the south, and by the Arabian Sea to the west.
                        </h1>

                        <div className='adventure'>
                            <h1> Things to do in North Goa</h1>
                            <h2>1.Grand Island Scuba Diving & Water Sports Combo In Goa</h2>
                            <img
                                className='adv'
                                src="scuba.jpg" />
                            <h2>Scuba diving in North Goa @ ₹1599</h2>
                            <a href="https://www.thrillophilia.com/tours/grande-island-trip-water-sports-combo-goa">
                                <button className='enqbook'>Book</button>
                            </a>

                            <br /><br /><br />
                            <h2>2.Flyboarding In Goa At Morjim Beach</h2>
                            <img
                                className='adv'
                                src="flyboarding.jpg" />
                            <h2>Flyboarding @ ₹1999</h2>
                            <a href="https://www.thrillophilia.com/tours/flyboarding-at-morjim-goa">
                                <button className='enqbook'>Book</button>
                            </a>


                            {this.state.showtrivandrumfood ?
                                <div className='popexplore'>
                                    <h1 className='foods'>Banana Chips</h1>
                                    <img
                                        className='gallery1'
                                        src="bananachips.png" />
                                    <h1 className='foods'>Malabar Fish Curry</h1>
                                    <img
                                        className='gallery1'
                                        src='malabarfish.jpg' />
                                </div>
                                : null
                            }




                            {this.state.showtrivandrumseedo ?
                                <div className='popexplore'>
                                    <h1 className='foods'> Padmanabhaswamy Temple</h1>
                                    <img
                                        className='gallery1'
                                        src="trivand.jpg" />
                                    <h1 className='foods'>Attukal Bhagavathy Temple</h1>
                                    <img
                                        className='gallery1'
                                        src='attukal.jpg' />
                                </div>
                                : null
                            }

                            {this.state.showtrivandrumlifestyle ?
                                <div className='popexplore'>
                                    <h1 className='foods'>Jatayu Earth's Center</h1>
                                    <img
                                        className='gallery1'
                                        src="jatayu.jpg" />
                                    <h1 className='foods'>  Mall of Travancore </h1>
                                    <img
                                        className='gallery1'
                                        src='trivanmall.jpg' />
                                </div>
                                : null
                            }
                        </div>
                    </center>
                </div>






            </div>
        )
    }
}
export default Goa;