import React, { Component } from 'react';
class Goaparty extends Component {

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
                <h1 className='devotionalh1'>Goa life</h1>
                <center>
                    <img
                        className='devimg'
                        // src='./../../para.png' />
                        src='party (1).png' />
                </center>
                <h2 className='tndevotional'>Destinys Goa Packages</h2>
                <center>
                    <a href="goa2 (1).pdf">
                        <button
                            className='btnquatation'>
                            Package 1
                            <i class="fa fa-download"></i>
                        </button>
                    </a>
                    <a href="goa1.pdf">
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
                            <i class="fa fa-map-marker">  Goa </i>
                        </h5>
                        <img
                            className="gallery"
                            src="titos.jpg" /><br />
                        <h1 className='instruction'>
                            Club Titos is Goa's most famous and popular nightclub.It is located at Titos Lane in Baga, very close to the beach. One of Goa's first discos, it is now extremely popular and the place to go for everyone looking for music, dancing, and also good food and drinks.
                        </h1>
                        <div className='adventure'>
                            <h1> Things to do in Goa</h1>
                            <h2>1.Titos Party Lane</h2>
                            <img
                                className='adv'
                                src="titos1.jpg" /><br /><br />
                            <a href='https://titosgoa.com/'><button className='enqbook'>Book</button></a>
                            <br /><br />
                            <div className='adventure'>
                                <h2>2.Casino Pride</h2>
                                <img
                                    className='adv'
                                    src="casino.jpg" /><br/><br/>
                                <a href='http://www.bestgoacasino.com/'><button className='enqbook'>Book</button></a>


                            </div><br />
                            <div className='adventure'>
                                <h2>3.Goa Yacht</h2>
                                <img
                                    className='adv'
                                    src="yacht.jpg" /><br/><br/>
                                <a href='https://www.goayacht.com/goa-yacht-bayliner-discovery-2322.html'><button className='enqbook'>Book</button></a>


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
export default Goaparty;