import React, { Component } from 'react';
class Kaparty extends Component {

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
                <h1 className='devotionalh1'>Karnataka life</h1>
                <center>
                    <img
                        className='devimg'
                        // src='./../../para.png' />
                        src='party (1).png' />
                </center>
                <h2 className='tndevotional'>Destinys Karnataka Packages</h2>
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
                            <i class="fa fa-map-marker">  Bangalore </i>
                        </h5>
                        <img
                            className="gallery"
                            src="blore.jpg" /><br />
                        <h1 className='instruction'>

                            Bengaluru is sometimes referred to as the "Silicon Valley of India" (or "IT capital of India") because of its role as the nation's leading information technology (IT) exporter. Indian technological organisations ISRO, Infosys, Wipro and HAL are headquartered in the city.
                        </h1>
                        <div className='adventure'>
                            <h1> Things to do in Bangalore</h1>
                            <h2>1.Toit Bangalore</h2>
                            <img
                                className='adv'
                                src="toit.jpg" /><br /><br />
                            <a href='https://www.bookeventz.com/banquets/bangalore/indiranagar/toit'><button className='enqbook'>Book</button></a>
                            <br /><br />
                            <div className='adventure'>
                                <h2>2.NoLimits</h2>
                                <img
                                    className='adv'
                                    src="NoLimmits.jpg" /><br /><br />
                                <a href='https://nolimmits.in/'><button className='enqbook'>Book</button></a>
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
export default Kaparty;