import React, { Component } from 'react';
class Footerpage extends Component {
    footerhome() {
        this.props.history.push('/home')
    }
    footerabout() {
        this.props.history.push('/aboutus')
    }
    footerdevelopers() {
        this.props.history.push('/developers')
    }
    render() {
        return (

            <div className='footer'>
                <img
                    className='bgimgfooter1'
                    src='bag (2).png' />
                <center>
                    <br />
                    <div className='linkfb'>
                        <a href='https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank"' > <i class="fa fa-facebook-square"></i></a><span></span>
                        <a href='https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" ' > <i class="fa fa-linkedin-square"></i></a><span></span>
                        <a href='https://twitter.com/JithuSekar " rel="noopener noreferrer" target="_blank"'><i class="fa fa-twitter-square"></i></a>
                        <a href='https://github.com/jithish-sekar'><i class="fa fa-github-square"></i></a>
                        <a href='https://www.behance.net/dhanushs1'><i class='fa fa-behance-square " rel="noopener noreferrer" target="_blank"'></i></a>
                    </div>
                    <br />
                    <span
                        onClick={() => this.footerhome()}
                        className='ftrp'>Home</span>
                    <span
                        onClick={() => this.footerabout()}
                        className='ftrp'>About</span>
                    {/* <span
                        onClick={() => this.footerdevelopers()}
                        className='ftrp'>Developers</span><br /> */}<br/>
                    <span className='copyryt'>&#169; 2020 copyright:<a href="https://www.destinys.org.in/">Destinys.org.in</a></span>
                </center>
            </div>

        )
    }
}
export default Footerpage;