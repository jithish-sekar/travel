import React, { Component } from 'react';
class Kldevotional extends Component {

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
            showlifestyle: false
        })
    }

    maduraiseedo() {
        this.setState({
            showmaduraiseedo: !this.state.showmaduraiseedo,
            showmaduraifood: false,
            showlifestyle: false
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
                <h1 className='devotionalh1'>Kerala Devotional</h1>
                <center>
                    <img
                        className='devimg'
                        src='pray.png' />
                </center>
                <h2 className='tndevotional'>Destinys Devotional Packages</h2>
                <center>
                    <a href="keraladevotional1 (1).pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="keraladevotional2.pdf">
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
                            <i class="fa fa-map-marker"></i>Trivandrum
                        </h5>
                        <img
                            className="gallery"
                            src="trivandrum.jpg" /><br />
                        <h1 className='instruction'>
                            The encompassing urban agglomeration population is around 1.68 million. Located on the west coast of India near the extreme south of the mainland, Thiruvananthapuram is a major Information Technology hub in Kerala and contributes 55% of the state's software exports as of 2016. Referred to by Mahatma Gandhi as the "Evergreen city of India",the city is characterised by its undulating terrain of low coastal hills.                        </h1>
                        <button
                            onClick={() => this.trivandrumfood()}
                            className='btnquatation'>Food & Drink</button>
                        <button
                            onClick={() => this.trivandrumseedo()}
                            className='btnquatation'>See & Do</button>
                        <button
                            onClick={() => this.trivandrumlifestyle()}
                            className='btnquatation '>Lifestyle</button>



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





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ap6RhfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ap6RhfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Trivandrum%2C+Kerala%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=6de2370f08010096&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2113457&dest_type=city&iata=TRV&place_id_lat=8.48333&place_id_lon=76.916702&search_pageview_id=6de2370f08010096&search_selected=true&ss_raw=tri">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Thrissur
                        </h5>
                        <img
                            className='gallery'
                            src="guruvayur.jpg" />
                        <h1 className='instruction'>
                        Thrissur also known by its former name Trichur, is a city and the headquarters of the Thrissur district in Kerala, India. Known as “God’s Own Town”, it is famous for the Pooram festival, one of the most celebrated festivals in the world. It is the third largest urban agglomeration in Kerala after Kochi and Calicut urban areas and the 20th largest in India.
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
                                <h1 className='foods'>Puttu</h1>
                                <img
                                    className='gallery1'
                                    src="puttu.jpg" />
                                <h1 className='foods'>Vellayappam</h1>
                                <img
                                    className='gallery1'
                                    src='Vellayappam.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Guruvayur Temple</h1>
                                <img
                                    className='gallery1'
                                    src="guru.jpg" />
                                <h1 className='foods'>Vadakkunnathan Temple</h1>
                                <img
                                    className='gallery1'
                                    src='vadakunathan.jpg' />
                                <h1 className='foods'>Paramekkavu Bagavathi Temple
</h1>
                                <img
                                    className='gallery1'
                                    src='paramaveku.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Archaeological Museum</h1>
                                <img
                                    className='gallery1'
                                    src="mueseum.jpg" />
                                <h1 className='foods'>HiLite</h1>
                                <img
                                    className='gallery1'
                                    src='hilite.jpg' />
                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Trich%C5%ABr%2C+Kerala%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=4a37375cdf1f00f7&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2113433&dest_type=city&place_id_lat=10.5167&place_id_lon=76.216698&search_pageview_id=4a37375cdf1f00f7&search_selected=true&ss_raw=Thriss">
                            <button className='enqbook'>Book</button>
                         </a>   
                    


                        {/* kumbakonam */}

                      





                    </center>
                </div>






            </div>
        )
    }
}
export default Kldevotional;