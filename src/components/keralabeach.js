import React, { Component } from 'react';
import { Route } from 'react-router-dom';
class Keralabeach extends Component {

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
                <h1 className='devotionalh1'>Kerala Beach</h1>
                <center>
                    <img
                        className='devimg'
                        src='beach.png' />
                </center>
                <h2 className='tndevotional'>Destinys Kerala Packages</h2>
                <center>
                    <a href="kerala1.pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="kerala1.pdf">
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
                            <i class="fa fa-map-marker"></i>Varkala
                        </h5>
                        <img
                            className="gallery"
                            src="varkala.jpg" /><br />
                        <h1 className='instruction'>
                        Varkala is a town in the south Indian state of Kerala. It’s on the Arabian Sea and known for Varkala Beach, backed by palm-covered red cliffs. Just south, Papanasam Beach is believed to have holy waters. On a nearby hill, the ancient Janardanaswamy Temple is a Hindu pilgrimage site dedicated to Vishnu. Farther inland, the Sivagiri Mutt monument memorializes the social reformer Sree Narayana Guru, who is buried here.                        </h1>

                        <div className='adventure'>
                            <h1> Things to do in Varkala</h1>
                            <h2>1.Varkala Cliff: Relish the view</h2>
                            <img
                                className='adv'
                                src="varkala.jpg" />
                           

                        <br/><br/><br/>
                            <h2>2.Night life at Elements of Varkala</h2>
                            <img
                                className='adv'
                                src="elements.jpg" />
                            
                            <h2>3.Ponnumthuruthu Island: Explore Wildlife</h2>
                            <img
                                className='adv'
                                src="ponnu.jpg" />
                            


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
export default Keralabeach;