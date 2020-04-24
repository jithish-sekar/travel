
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
                <h1 className='devotionalh1'>Kerala Hills Station</h1>
                <center>
                    <img
                        className='devimg'
                        src='hills.png' />
                </center>
                <h2 className='tndevotional'>Destinys Hills Station Packages</h2>
                <center>
                    <a href="kerala1.pdf">
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
                            <i class="fa fa-map-marker"></i>Munnar
                        </h5>
                        <img
                            className="gallery"
                            src="munnar.jpg" /><br />
                        <h1 className='instruction'>
                        Munnar is a town and hill station located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,[2] in the Western Ghats mountain range. 
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
                                <h1 className='foods'>Nool Appam</h1>
                                <img
                                    className='gallery1'
                                    src="noolappam.jpg" />
                                <h1 className='foods'>Appam with Stew</h1>                                <img
                                    className='gallery1'
                                    src='appam.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Eravikulam National Park</h1>
                                <img
                                    className='gallery1'
                                    src="eravikulam.jpg" />
                                <h1 className='foods'>Mattuppetty Dam</h1>
                                <img
                                    className='gallery1'
                                    src='mattupety.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showlifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Tea Plantation</h1>
                                <img
                                    className='gallery1'
                                    src="teaplant.jpg" />
                                <h1 className='foods'>Herbs</h1>
                                <img
                                    className='gallery1'
                                    src="herbs.jpg" />
                            </div>
                            : null
                        }





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLiiPUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLiiPUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Munnar%2C+Kerala%2C+India&is_ski_area=&ssne=Thanj%C4%81v%C5%ABr&ssne_untouched=Thanj%C4%81v%C5%ABr&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=munnar&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2105113&dest_type=city&place_id_lat=10.0872&place_id_lon=77.060501&search_pageview_id=69ca02b16957004c&search_selected=true&search_pageview_id=69ca02b16957004c&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Vagamon
                        </h5>
                        <img
                            className='gallery'
                            src="vagamon.jpg" />
                        <h1 className='instruction'>
                            Vagamon is a hill station located in Kottayam- Idukki border of Kerala. It has a cool climate with the temperature between 10-23°C during a summer midday. It is situated 1,100 metres above sea level.
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
                                <h1 className='foods'>Red Rice</h1>
                                <img
                                    className='gallery1'
                                    src="redrice.jpg" />
                                <h1 className='foods'>Kadala Curry</h1>
                                <img
                                    className='gallery1'
                                    src='kadala.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>Marmala Water Falls
</h1>
                                <img
                                    className='gallery1'
                                    src="marmala.jpg" />
                                <h1 className='foods'>Barren Hills</h1>
                                <img
                                    className='gallery1'
                                    src='barren.jpg' />
                                <h1 className='foods'>Mundakayam Ghat</h1>
                                <img
                                    className='gallery1'
                                    src='mudu.jpg' />
                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>Paragliding</h1>
                                <img
                                    className='gallery1'
                                    src="paragli.jpg" />

                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArfsiPUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4ArfsiPUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Btmpl%3Dsearchresults%3Bac_click_type%3Db%3Bac_position%3D0%3Bclass_interval%3D1%3Bdest_id%3D900048594%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dindex%3Bsrc_elem%3Dsb%3Bsrpvid%3D679e051e219b008b%3Bss%3DVagator%252C%2520Goa%252C%2520India%3Bss_all%3D0%3Bss_raw%3Dvaga%3Bssb%3Dempty%3Bsshis%3D0%3Btop_ufis%3D1%26%3B&ss=Vagamon%2C+Kerala%2C+India&is_ski_area=&ssne=Vagator&ssne_untouched=Vagator&city=900048594&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&from_sf=1&search_pageview_id=679e051e219b008b&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=900049821&dest_type=city&place_id_lat=9.69076&place_id_lon=76.90599&search_pageview_id=679e051e219b008b&search_selected=true&ss_raw=Vagamon">
                            <button className='enqbook'>Book</button>
                        </a>




                    </center>
                </div>






            </div>
        )
    }
}
export default Utadventure;