import React, { Component } from 'react';
class tndevotional extends Component {

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

                        {/* thanjavur */}
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
                                <h1 className='foods'>Thyagaraja Temple</h1>
                                <img
                                    className='gallery1'
                                    src='thanja2.jpg' />
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
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Btmpl%3Dsearchresults%3Bac_click_type%3Db%3Bac_position%3D0%3Bclass_interval%3D1%3Bdest_id%3D-2113433%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dindex%3Bsrc_elem%3Dsb%3Bsrpvid%3D24e2376496360055%3Bss%3DTrich%25C5%25ABr%252C%2520Kerala%252C%2520India%3Bss_all%3D0%3Bss_raw%3DThriss%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DThanj%25C4%2581v%25C5%25ABr%3Bssne_untouched%3DThanj%25C4%2581v%25C5%25ABr%3Btop_ufis%3D1%26%3B&ss=Thanj%C4%81v%C5%ABr%2C+Tamil+Nadu%2C+India&is_ski_area=&ssne=Trich%C5%ABr&ssne_untouched=Trich%C5%ABr&city=-2113433&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&from_sf=1&search_pageview_id=24e2376496360055&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=1&ac_langcode=en&ac_click_type=b&dest_id=-2112964&dest_type=city&place_id_lat=10.8&place_id_lon=79.150002&search_pageview_id=24e2376496360055&search_selected=true&ss_raw=Than">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Madurai
                        </h5>
                        <img
                            className='gallery'
                            src="tamildevo2.jpg" />
                        <h1 className='instruction'>
                            Madurai is closely associated with the Tamil language, and the third Tamil Sangam, a major congregation of Tamil scholars said to have been held in the city. The recorded history of the city goes back to the 3rd century BCE, being mentioned by Megasthenes, the Greek ambassador to the Maurya empire, and Kautilya, a minister of the Mauryan emperor Chandragupta Maurya.
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
                                <h1 className='foods'>Jigarthanda</h1>
                                <img
                                    className='gallery1'
                                    src="jigarthanda.jpg" />
                                <h1 className='foods'>Bun Parotta</h1>
                                <img
                                    className='gallery1'
                                    src='bunparotta.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Madurai Meenakshi Amman Temple</h1>
                                <img
                                    className='gallery1'
                                    src="maduraimeenakshi.jpg" />
                                <h1 className='foods'>Thirumalai Nayakkar Mahal</h1>
                                <img
                                    className='gallery1'
                                    src='thirumalai.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Vishaal De Mall</h1>
                                <img
                                    className='gallery1'
                                    src="vishaldemal.jpg" />
                                <h1 className='foods'>Royal Auditorium</h1>
                                <img
                                    className='gallery1'
                                    src='royal.jpg' />
                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AriShfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Btmpl%3Dsearchresults%3Bac_click_type%3Db%3Bac_position%3D1%3Bcity%3D-2113433%3Bclass_interval%3D1%3Bdest_id%3D-2112964%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bsrpvid%3D22ed37b5b928015a%3Bss%3DThanj%25C4%2581v%25C5%25ABr%252C%2520Tamil%2520Nadu%252C%2520India%3Bss_all%3D0%3Bss_raw%3DThan%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DTrich%25C5%25ABr%3Bssne_untouched%3DTrich%25C5%25ABr%3Btop_ufis%3D1%26%3B&ss=Madurai%2C+Tamil+Nadu%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&city=-2112964&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&from_sf=1&ss_raw=madu&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2103047&dest_type=city&iata=IXM&place_id_lat=9.92612&place_id_lon=78.1141&search_pageview_id=22ed37b5b928015a&search_selected=true&search_pageview_id=22ed37b5b928015a&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* kumbakonam */}

                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Kumbakonam
                        </h5>
                        <img
                            className='gallery'
                            src="tamildevo3.jpg" />
                        <h1 className='instruction'>
                            Kumbakonam dates back to the Sangam period and was ruled by the Early Cholas, Pallavas, Medieval Cholas, Later Cholas, Pandyas, the Vijayanagara Empire, Madurai Nayaks, Thanjavur Nayaks and the Thanjavur Marathas.
                        </h1>
                        <button
                            onClick={() => this.kumbakonamfood()}
                            className='btnquatation'>Food & Drink</button>
                        <button
                            onClick={() => this.kumbakonamseedo()}
                            className='btnquatation'>See & Do</button>
                        <button
                            onClick={() => this.kumbakonamlifestyle()}
                            className='btnquatation '>Lifestyle</button>



                        {this.state.showmakumbakonamfood ?
                            <div className='popexplore'>
                                <h1 className='foods'>Kumbakonam degree coffee</h1>
                                <img
                                    className='gallery1'
                                    src="degreecoffee.jpg" />
                                <h1 className='foods'>Dry jamun</h1>
                                <img
                                    className='gallery1'
                                    src='dryjamun.png' />
                            </div>
                            : null
                        }




                        {this.state.showkumbakonamseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>kasi viswanathar temple </h1>
                                <img
                                    className='gallery1'
                                    src="kasiviswa.jpg" />
                                <h1 className='foods'>Airavatesvara Templae</h1>
                                <img
                                    className='gallery1'
                                    src='airavatesvara.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showkumbakonamlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Metal Sculpture</h1>
                                <img
                                    className='gallery1'
                                    src="metal.jpg" />
                                <h1 className='foods'>mahamaham tank</h1>
                                <img
                                    className='gallery1'
                                    src='mahatank.jpg' />
                            </div>
                            : null
                        }





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AouVhfUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AouVhfUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Kumbakonam%2C+Tamil+Nadu%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&search_pageview_id=cf1e3805ec61001b&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2101881&dest_type=city&place_id_lat=10.96041&place_id_lon=79.38209&search_pageview_id=cf1e3805ec61001b&search_selected=true&ss_raw=kumba">
                        <button className='enqbook'>Book</button>
                        </a>





                    </center>
                </div>






            </div>
        )
    }
}
export default tndevotional;