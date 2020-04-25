import React, { Component } from 'react';
class Tnhills extends Component {

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
                <h1 className='devotionalh1'>Tamilnadu Hills Station</h1>
                <center>
                    <img
                        className='devimg1'
                        src='hills.png' />
                </center>
                <h2 className='tndevotional'>Destinys Hills Station Packages</h2>
                <center>
                    <a href="tnhills.pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="tnhills2.pdf">
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
                            <i class="fa fa-map-marker"></i>Ooty
                        </h5>
                        <img
                            className="gallery"
                            src="ooty1.jpg" /><br />
                        <h1 className='instruction'>
                            Ooty (About this soundlisten (help·info)), officially known as Udagamandalam (also known as Ootacamund About this soundlisten (help·info); abbreviated as Udhagai), is a town and a municipality in the Niligiris District of the Indian state of Tamil Nadu.
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
                                <h1 className='foods'>Tea Dust</h1>
                                <img
                                    className='gallery1'
                                    src="teadust.jpg" />
                                <h1 className='foods'>Home made Choclates</h1>                                <img
                                    className='gallery1'
                                    src='homemade.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Pykara Falls</h1>
                                <img
                                    className='gallery1'
                                    src="pykara.jpg" />
                                <h1 className='foods'>Catherine Falls</h1>
                                <img
                                    className='gallery1'
                                    src='catherine.jpg' />
                                <h1 className='foods'>Lamb's Rock</h1>
                                <img
                                    className='gallery1'
                                    src='lambs.jpg' />



                            </div>
                            : null
                        }

                        {this.state.showlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Tea Plantation</h1>
                                <img
                                    className='gallery1'
                                    src="teaplant.jpg" />
                                <h1 className='foods'>Eucalyptus oil</h1>
                                <img
                                    className='gallery1'
                                    src="oil.jpeg" />
                                <h1 className='foods'>Toda Tribe's</h1>
                                <img
                                    className='gallery1'
                                    src='todatribe.jpg' />
                            </div>
                            : null
                        }





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtDHiPUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AtDHiPUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=ooty&is_ski_area=0&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&dest_id=&dest_type=&search_pageview_id=a6eba4a8d6de0027&search_selected=false&ss_raw=Thanj%C4%81v%C5%AB">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Kodaikanal
                        </h5>
                        <img
                            className='gallery'
                            src="kodai.jpg" />
                        <h1 className='instruction'>
                            Kodaikanal is a city in the hills of the Dindigul district in the state of Tamil Nadu, India.[2] Its name in the Tamil language means "The Gift of the Forest".[3] Kodaikanal is referred to as the "Princess of Hill stations" and has a long history as a retreat and popular tourist destination.
                        </h1>
                        <button
                            onClick={() => this.maduraifood()}
                            className='btnquatation'>Food & Drink</button>
                        <button
                            onClick={() => this.maduraiseedo()}
                            className='btnquatation'>See & Do</button>
                        <button
                            onClick={() => this.madurailifestyle()}
                            className='btnquatation '>Lifestyle</button>


                        {this.state.showmaduraifood ?
                            <div className='popexplore'>
                                <h1 className='foods'>Brown Bread</h1>
                                <img
                                    className='gallery1'
                                    src="bread.jpg" />
                                <h1 className='foods'>Muffins</h1>
                                <img
                                    className='gallery1'
                                    src='muffins.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Silver Cascade Falls
</h1>
                                <img
                                    className='gallery1'
                                    src="kodawater.jpg" />
                                <h1 className='foods'>coakers walk</h1>
                                <img
                                    className='gallery1'
                                    src='coakers.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Kashmir Handicrafts</h1>
                                <img
                                    className='gallery1'
                                    src="kashmir.jpg" />
                                <h1 className='foods'>Spices Corner</h1>
                                <img
                                    className='gallery1'
                                    src='spices.jpg' />
                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArbSiPUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArbSiPUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Kodaik%C4%81n%C4%81l%2C+Tamil+Nadu%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=d84fa75bfe0e0002&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2101138&dest_type=city&place_id_lat=10.238716&place_id_lon=77.487455&search_pageview_id=d84fa75bfe0e0002&search_selected=true&ss_raw=kodai">
                            <button className='enqbook'>Book</button>
                        </a>




                    </center>
                </div>






            </div>
        )
    }
}
export default Tnhills;