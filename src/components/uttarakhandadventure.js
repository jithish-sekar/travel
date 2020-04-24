import React, { Component } from 'react';
class Utadventure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showthanjavurfood: false,
            showseedo: false,
            showlifestyle: false,
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

    thanjavurfood() {
        this.setState({
            showseedo: false,
            showthanjavurfood: !this.state.showthanjavurfood,
            showlifestyle: false
        })
    }

    seedo() {
        this.setState({
            showlifestyle: false,
            showseedo: !this.state.showseedo,
            showthanjavurfood: false,
        })
    }

    thanjlifestyle() {
        this.setState({
            showseedo: false,
            showthanjavurfood: false,
            showlifestyle: !this.state.showlifestyle
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
                <h1 className='devotionalh1'>Uttarakhand Adventure</h1>
                <center>
                    <img
                        className='devimg'
                        // src='./../../para.png' />
                        src='para.png' />
                </center>
                <h2 className='tndevotional'>Destinys Adventure Packages</h2>
                <center>
                    <a href=".pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href=".pdf">
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
                            <i class="fa fa-map-marker">Rishikesh</i>
                        </h5>
                        <img
                            className="gallery"
                            src="rishikesh.jpg" /><br />
                        <h1 className='instruction'>
                            Rishikesh, also known as Hrishikesh, is a city governed by Rishikesh Municipal Corporation (since October 2017),and a tehsil in Dehradun district of the Indian state Uttarakhand. Located in the foothills of the Himalayas in northern India, it is known as the "Gateway to the Garhwal Himalayas" and "Yoga Capital of the World"</h1>
                        <div className='adventure'>
                            <h1> Things to do in Rishikesh</h1>
                            <h2>Bungee Jumping in Rishikesh</h2>
                            <img
                                className='adv'
                                src="paragliding.jpg" />
                            <h2>Bungee jumping in Rishikesh @ ₹3413</h2>
                            <a href="https://www.thrillophilia.com/tours/bungy-jump-rishikesh">
                                <button className='enqbook'>Book</button>
                            </a>
                          
                           



                        </div>





                        {this.state.showthanjavurfood ?
                            <div className='popexplore'>
                                <h1 className='foods'>River Trout</h1>
                                <img
                                    className='gallery1'
                                    src="river.jpg" />
                                <h1 className='foods'>Kadhi Chawal</h1>
                                <img
                                    className='gallery1'
                                    src='kadhi.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Solang Valley</h1>
                                <img
                                    className='gallery1'
                                    src="solang.png" />
                                <h1 className='foods'>Rohtang pass</h1>
                                <img
                                    className='gallery1'
                                    src='rohtang.jpg' />
                                <h1 className='foods'>Beas River</h1>
                                <img
                                    className='gallery1'
                                    src='beas.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Wood Carving</h1>
                                <img
                                    className='gallery1'
                                    src="wood.jpg" />
                            </div>
                            : null
                        }

                    </center>
                </div>






            </div >
        )
    }
}
export default Utadventure;