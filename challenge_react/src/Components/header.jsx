import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={require('../assets/img/logo-ALTA.png')} />
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-5">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li><a href="./index.html">HOME</a></li>
                                    <li><a href="./about.html">ABOUT</a></li>
                                    <li><a href="./experience.html">EXPERIENCE</a></li>
                                    <li><a href="./contact.html">CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;