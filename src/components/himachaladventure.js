import React, { Component } from 'react';
class Himachaladventure extends Component {

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
                <h1 className='devotionalh1'>Himachal Pradesh Adventure</h1>
                <center>
                    <img
                        className='devimg'
                        // src='./../../para.png' />
                        src='para.png' />
                </center>
                <h2 className='tndevotional'>Destinys Adventure Packages</h2>
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
                            <i class="fa fa-map-marker">  Bir-Billing </i>
                        </h5>
                        <img
                            className="gallery"
                            src="birbilling.jpg" /><br />
                        <h1 className='instruction'>
                            Bir is a village located in the west of Joginder Nagar Valley in the state of Himachal Pradesh in northern India.Bir is a noted centre for ecotourism, spiritual studies, and meditation.Bir is also home to a Tibetan refugee settlement with several Buddhist monasteries and a large stupa.                        </h1>

                        <div className='adventure'>
                            <h1> Things to do in Bir Billing</h1>
                            <h2>1.Paragliding in Bir Billing</h2>
                            <img
                                className='adv'
                                src="paragliding.jpg" />
                            <h2>Paragliding in Bir Billing book @  ₹1480</h2>
                            <a href="https://www.thrillophilia.com/tours/paragliding-in-bir-billing">
                                <button className='enqbook'>Book</button>
                            </a>
                            <div className='adventure'>
                                <h2>2.Camping</h2>
                                <img
                                    className='adv'
                                    src="camping.jpg" />
                                <h2>Paragliding short trekking and camping in Bir Valley @ ₹4500</h2>
                                <a href="https://www.thrillophilia.com/tours/paraglinding-short-trekking-camping">
                                    <button className='enqbook'>Book</button>
                                </a>

                            </div>
                            <div className='adventure'>
                                <h2>3.Trekking</h2>
                                <img
                                    className='adv'
                                    src="trekking.jpg" />
                                <h2> Paragliding in Bir Billing with Trekking  @ ₹1149</h2>
                                <a href=" https://www.thrillophilia.com/tours/paraglinding-short-trekking-camping">
                                <button className='enqbook'>Book</button>
                                </a>

                        </div>



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
export default Himachaladventure;