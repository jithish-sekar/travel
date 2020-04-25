import React, { Component } from 'react';
class Kadevotional extends Component {

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
             showmadurailifestyle: !this.state.showmadurailifestyle,
            showmaduraiseedo: false,
            showmaduraifood: false
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
                <h1 className='devotionalh1'>Karnataka Devotional</h1>
                <center>
                    <img
                        className='devimg'
                        src='pray.png' />
                </center>
                <h2 className='tndevotional'>Destinys Devotional Packages</h2>
                <center>
                    <a href="karnatakadevotional1.pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="karnatakadevotional2.pdf">
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
                            <i class="fa fa-map-marker"></i>Uttara Kannada
                        </h5>
                        <img
                            className="gallery"
                            src="murudesh.jpg" /><br />
                        <h1 className='instruction'>
                            Uttara Kannada, formerly known as North Canara, is a district in the Indian state of Karnataka. It is bordered by the state of Goa and Belagavi District to the north, Dharwad District and Haveri District to the east, Shivamogga District, and Udupi District to the south.
                        </h1>
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
                                <h1 className='foods'>Chiroti</h1>
                                <img
                                    className='gallery1'
                                    src="Chiroti.jpg" />
                                <h1 className='foods'>Neer Dosa</h1>
                                <img
                                    className='gallery1'
                                    src='neerdosa.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showtrivandrumseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'> Murdeshwar Temple</h1>
                                <img
                                    className='gallery1'
                                    src="murudesh.jpg" />
                                <h1 className='foods'>Manjunatha Temple</h1>
                                <img
                                    className='gallery1'
                                    src='manjunatha.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showtrivandrumlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Syntheri Rock</h1>
                                <img
                                    className='gallery1'
                                    src="syntheri.jpg" />
                                <h1 className='foods'>  Dandeli </h1>
                                <img
                                    className='gallery1'
                                    src='dandeli.jpg' />
                            </div>
                            : null
                        }





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLmhfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLmhfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Btmpl%3Dsearchresults%3Bclass_interval%3D1%3Bdest_id%3D-2099545%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_pageview_id%3Db9c14c7164cc012c%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dindex%3Bsrc_elem%3Dsb%3Bsrpvid%3D56674c7516800172%3Bss%3Duttar%2520kannada%3Bss_all%3D0%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DThanj%25C4%2581v%25C5%25ABr%3Bssne_untouched%3DThanj%25C4%2581v%25C5%25ABr%3Btop_ufis%3D1%26%3B&ss=Murudeshwar+Temple%2C+Karnataka%2C+India&is_ski_area=&ssne=Kannauj&ssne_untouched=Kannauj&city=-2099545&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&from_sf=1&ac_position=1&ac_click_type=g&dest_id=ChIJ61U4JKqDvjsRVgNW09abb2o&dest_type=landmark&place_id=ChIJ61U4JKqDvjsRVgNW09abb2o&place_id_lat=14.5499212&place_id_lon=74.3567882&place_types=premise%2Cgeocode&search_pageview_id=56674c7516800172&search_selected=true&ss_raw=murudeshwarar">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Udupi
                        </h5>
                        <img
                            className='gallery'
                            src="srikrishna.jpg" />
                        <h1 className='instruction'>
                        Udupi, otherwise spelt Udipi and also known as Odipu, is a city in the Indian state of Karnataka. It is the administrative headquarters of Udupi District. It is one of the fastest growing cities in Karnataka and has various educational institutions. 
                        </h1>
                        <button
                            onClick={() => this.maduraifood()}
                            className='btnquatation'>Food & Drink</button>
                        <button
                            onClick={() => this.maduraiseedo()}
                            className='btnquatation'>See & Do</button>
                        <button
                            onClick={() => this.madurailifestyle()}
                            className='btnquatation'>Lifestyle</button>


                        {this.state.showmaduraifood ?
                            <div className='popexplore'>
                                <h1 className='foods'>Kosambari</h1>
                                <img
                                    className='gallery1'
                                    src="kosambari.jpg" />
                                <h1 className='foods'>Avalakki Upkaari (red chilli poha)</h1>
                                <img
                                    className='gallery1'
                                    src='aval.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Sri Krishna Temple</h1>
                                <img
                                    className='gallery1'
                                    src="udupi.jpg" />
                                <h1 className='foods'>Chandramoulishwar Temple</h1>
                                <img
                                    className='gallery1'
                                    src='keshava.jpg' />

                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>St Mary's Island</h1>
                                <img
                                    className='gallery1'
                                    src="marys.jpg" />
                                {/* <h1 className='foods'>HiLite</h1>
                                <img
                                    className='gallery1'
                                    src='hilite.jpg' /> */}
                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLmhfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLmhfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Btmpl%3Dsearchresults%3Bac_click_type%3Dg%3Bclass_interval%3D1%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bplace_id%3DChIJ61U4JKqDvjsRVgNW09abb2o%3Bplace_id_lat%3D14.5499212%3Bplace_id_lon%3D74.3567882%3Bpostcard%3D0%3Braw_dest_type%3Dlandmark%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bsrpvid%3Dc13b4c8c16bb0035%3Bss%3DMurudeshwar%2520Temple%252C%2520Karnataka%252C%2520India%3Bss_all%3D0%3Bss_raw%3Dmurudeshwarar%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DKannauj%3Bssne_untouched%3DKannauj%3Btop_ufis%3D1%26%3B&ss=Udupi%2C+Karnataka%2C+India&is_ski_area=&ssne=Murudeshwar+Temple%2C+Karnataka%2C+India&ssne_untouched=Murudeshwar+Temple%2C+Karnataka%2C+India&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&from_sf=1&search_pageview_id=c13b4c8c16bb0035&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2113669&dest_type=city&place_id_lat=13.34192&place_id_lon=74.74732&search_pageview_id=c13b4c8c16bb0035&search_selected=true&ss_raw=udupi">
                            <button className='enqbook'>Book</button>
                        </a>



                        {/* kumbakonam */}







                    </center>
                </div>






            </div>
        )
    }
}
export default Kadevotional;