import React, { Component } from 'react';
class Tndevotional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showthanjavurfood: false,
            showseedo: false,
            showlifestyle: false,
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


    render() {
        return (

            <div>
                <h1 className='devotionalh1'>Tamilnadu Devotional</h1>
                <center>
                    <img
                        className='devimg'
                        src='pray.png' />
                </center>
                <h2 className='tndevotional'>Destinys Devotional Packages</h2>
                <center>
                    <a href="tamilnadu devotional 5 days(1).pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="2tamilnadu package.pdf">
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


                        <h4 className='tndevotional'>Explore</h4>
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Tanjore
                        </h5>
                        <img
                            className="gallery"
                            src="tamildevo1.jpg" /><br />
                        <h1 className='instruction'>
                            Cauvery Delta is a region of Tamil Nadu state in southern India. It encompasses the lower reaches of the Kaveri River and its delta, and formed the cultural homeland and political base of the Chola Dynasty which ruled most of South India and parts of Sri Lanka and South-East Asia between the 9th and 13th centuries AD.
                        </h1>
                        <button
                            onClick={() => this.thanjavurfood()}
                            className='btnquatation'>Food & Drink</button>
                        <button
                            onClick={() => this.seedo()}
                            className='btnquatation'>See & Do</button>
                        <button
                            onClick={() => this.thanjlifestyle()}
                            className='btnquatation '>Lifestyle</button>



                        {this.state.showthanjavurfood ?
                            <div className='popexplore'>
                                <h1 className='foods'>Ashoka Halwa</h1>
                                <img
                                    className='gallery1'
                                    src="ashokahalwa.jpg" />
                                <h1 className='foods'>Thavala Adai</h1>
                                <img
                                    className='gallery1'
                                    src='thavalaadai.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Brihadeeswara Temple</h1>
                                <img
                                    className='gallery1'
                                    src="thanjavurbigtemple.jpg" />
                                <h1 className='foods'>Thanjavur Thalayatti Bommai</h1>
                                <img
                                    className='gallery1'
                                    src='thalaiattibomai.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Big Temple Consecration</h1>
                                <img
                                    className='gallery1'
                                    src="bigtemplecon.jpg" />
                                <h1 className='foods'>Thanjavur Thalayatti Bommai</h1>
                                <img
                                    className='gallery1'
                                    
                                    src='thalaiattibomai.jpg' />
                            </div>
                            : null
                        }





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <button className='enqbook'>Book</button>
                        <hr />




                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Madurai
                        </h5>
                        <img
                            className='gallery'
                            src="tamildevo2.jpg" />
                        <h1 className='instruction'>
                            Madurai is closely associated with the Tamil language, and the third Tamil Sangam, a major congregation of Tamil scholars said to have been held in the city. The recorded history of the city goes back to the 3rd century BCE, being mentioned by Megasthenes, the Greek ambassador to the Maurya empire, and Kautilya, a minister of the Mauryan emperor Chandragupta Maurya. Signs of human settlements and Roman trade links dating back to 300 BC are evident from excavations by Archeological Survey of India in Manal
                        </h1>
                        <button className='btnquatation'>Food & Drink</button>
                        <button className='btnquatation'>See & Do</button>
                        <button className='btnquatation '>Lifestyle</button>
                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <button className='enqbook'>Book</button>
                        <hr />




                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Kumbakonam
                        </h5>
                        <img
                            className='gallery'
                            src="tamildevo3.jpg" />
                        <h1 className='instruction'>
                            Kumbakonam dates back to the Sangam period and was ruled by the Early Cholas, Pallavas, Medieval Cholas, Later Cholas, Pandyas, the Vijayanagara Empire, Madurai Nayaks, Thanjavur Nayaks and the Thanjavur Marathas. I
                        </h1>
                        <button className='btnquatation'>Food & Drink</button>
                        <button className='btnquatation'>See & Do</button>
                        <button className='btnquatation '>Lifestyle</button>
                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <button className='enqbook'>Book</button>






                    </center>
                </div>






            </div>
        )
    }
}
export default Tndevotional;