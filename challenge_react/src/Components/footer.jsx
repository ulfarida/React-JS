import React, { Component } from 'react';


class Footer extends Component {
    render () {
        return (
            <footer className="d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 col-12">
                            <div className="gambar_footer">
                                <img src={require('../assets/img/logo-ALTA-v2.png')}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="social_media_nav">
                                <span>Social Media</span>
                                <ul className="daftar_social_media">
                                    <li><a href="https://facebook.com"><img src={require('../assets/img/ic_fb.png')}/></a></li>
                                    <li><a href="https://twitter.com"><img src={require('../assets/img/ic-twitter.png')}/></a></li>
                                    <li><a href="https://instagram.com"><img src={require('../assets/img/ic-instagram.png')}/></a></li>
                                    <li><a href="https://linkedin.com"><img src={require('../assets/img/ic-linkedin.png')}/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="boder-bottom">
                                <div className="copyright">
                                    <h5>Copyright &copy; 2019 Alterra</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        );
    }
}

export default Footer;