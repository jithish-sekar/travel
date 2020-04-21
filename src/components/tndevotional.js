import React, { Component } from 'react';
class Tndevotional extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    enquiry() {
        this.props.history.push('/enquiry')
    }
    render() {
        return (

            <div>
                <h1 className='devotionalh1'>Tamilnadu Devotional</h1>
                <center>
                    <img
                        className='devimg'
                        src='dev.png' />
                </center>
                <h2 className='tndevotional'>Destinys Devotional Package</h2>
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
                        <h4 className='tndevotional'>Explore</h4>
                        <button className='btnquatation'>Food & Drink</button>
                        <button className='btnquatation'>See & Do</button>
                        <button className='btnquatation '>Lifestyle</button>



                    </center>
                </div>






            </div>
        )
    }
}
export default Tndevotional;