import React, { Component } from 'react';
class Himachalhills extends Component {

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
                <h1 className='devotionalh1'>Himachal Pradesh Hills Station</h1>
                <center>
                    <img
                        className='devimg'
                        src='hills.png' />
                </center>
                <h2 className='tndevotional'>Destinys Hills Station Packages</h2>
                <center>
                    <a href="himachal1.pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="himachal1.pdf">
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
                            <i class="fa fa-map-marker"> Kullu-Manali </i>
                        </h5>
                        <img
                            className="gallery"
                            src="himachal.jpg" /><br />
                        <h1 className='instruction'>
                            Manali is a resort town nestled in the mountains of the Indian state of Himachal Pradesh near the northern end of the Kullu Valley in the Beas River Valley. It is located in the Kullu district, about 270 km (168 mi) north of the state capital, Shimla, 309 km (192 miles) north east of Chandigarh and 544 km (338 miles) northeast of Delhi, the national capital.
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
                                <h1 className='foods'>River Trout</h1>
                                <img
                                    className='gallery1'
                                    src="river.jpg" />
                                <h1 className='foods'>Kadhi Chawal</h1>                                <img
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





                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuSBifUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuSBifUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Kullu+Manali+Inn%2C+Man%C4%81li%2C+Himachal+Pradesh%2C+India&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=kullu+manali&ac_position=1&ac_langcode=en&ac_click_type=b&dest_id=4314240&dest_type=hotel&place_id_lat=32.218487&place_id_lon=77.185975&search_pageview_id=af250a722d7e00c9&search_selected=true&search_pageview_id=af250a722d7e00c9&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">
                            <button className='enqbook'>Book</button>
                        </a>
                        <hr />



                        {/* madurai */}
                        <h5 className='mapnav'>
                            <i class="fa fa-map-marker"></i>Shimla
                        </h5>
                        <img
                            className='gallery'
                            src="shimla.jpg" />
                        <h1 className='instruction'>
                        Shimla  also known as Simla, is the capital and the largest city of the Indian state of Himachal Pradesh. In 1864, Shimla was declared as the summer capital of British India, succeeding Murree, northeast of Rawalpindi. 
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
                                <h1 className='foods'>meethe chawal </h1>
                                <img
                                    className='gallery1'
                                    src="meethe.jpg" />
                                <h1 className='foods'>chaa gosht</h1>
                                <img
                                    className='gallery1'
                                    src='gosht.jpg' />
                            </div>
                            : null
                        }




                        {this.state.showmaduraiseedo ?
                            <div className='popexplore'>
                                <h1 className='foods'>The Ridge
</h1>
                                <img
                                    className='gallery1'
                                    src="ridge.jpg" />
                                <h1 className='foods'>Jakhu Hill</h1>
                                <img
                                    className='gallery1'
                                    src='jakhu.jpg' />
                               
                            </div>
                            : null
                        }

                        {this.state.showmadurailifestyle ?
                            <div className='popexplore'>
                                <h1 className='foods'>The Mall</h1>
                                <img
                                    className='gallery1'
                                    src="mall.jpg" />

                            </div>
                            : null
                        }






                        <h4 className='tndevotional'> Book Your Stay </h4>
                        <a href="https://www.booking.com/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AryTifUFwAIB&sid=65d2bf4e6932251a1d9f1c041316ca7f&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AryTifUFwAIB%3Bsid%3D65d2bf4e6932251a1d9f1c041316ca7f%3Bsb_price_type%3Dtotal%26%3B&ss=Shimla%2C+Himachal+Pradesh%2C+India&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=shimla&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-2111367&dest_type=city&place_id_lat=31.10415&place_id_lon=77.17097&search_pageview_id=7bbc0ede582d0024&search_selected=true&search_pageview_id=7bbc0ede582d0024&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0">
                        <button className='enqbook'>Book</button>
                        </a>




                    </center>
                </div>






            </div>
        )
    }
}
export default Himachalhills;