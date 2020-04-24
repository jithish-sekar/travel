import React, { Component } from 'react';
class Footerpage extends Component {
    render() {
        return (

            <div className='footer'>
                <img
                    className='bgimgfooter1'
                    src='bag (2).png' />
                <center>
                    <br/>
                    <div className='linkfb'>
                        <a href='https://www.facebook.com/profile.php?id=100012662224779" rel="noopener noreferrer" target="_blank"' > <i class="fa fa-facebook-square"></i></a><span></span>
                        <a href='https://www.linkedin.com/in/jithish-sekar-a46a95157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bh8jOfTQUSlWqq9PhJ2Y2Wg%3D%3D" rel="noopener noreferrer" target="_blank" ' > <i class="fa fa-linkedin-square"></i></a><span></span>
                        <a href='https://twitter.com/JithuSekar " rel="noopener noreferrer" target="_blank"'><i class="fa fa-twitter-square"></i></a>
                        <a href='https://github.com/jithish-sekar'><i class="fa fa-github-square"></i></a>
                        <a href='https://github.com/jithish-sekar'><i class='fa fa-behance-square " rel="noopener noreferrer" target="_blank"'></i></a>
                    </div>
                    <br />
                    <span className='ftrp'>Home</span>
                    <span className='ftrp'>About</span>
                    <span className='ftrp'>Developers</span><br/>
                    <span className='copyryt'>&#169; 2020 copyright:<a href="destiny.org.in">Destinys.org.in</a></span>
                </center>
            </div>

        )
    }
}
export default Footerpage;