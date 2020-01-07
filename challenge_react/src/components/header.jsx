import React, { Component } from 'react';
import logo from '../logo.svg';
import search from '../images/search.png'

class Header extends Component {
    render () {
        return (
             <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <ul className="list-unstyled home-header-nav__list">
                                <li className="logo"><img src={logo} alt=""/></li>
                                <li><h6 style={{ marginTop:'8px'}}>KabarKabar</h6></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li><a href="#" onClick={() => this.props.setCategory('soccer')}><h6>Sepakbola</h6></a></li>
                                    <li><a href="#" onClick={() => this.props.setCategory('economy')}><h6>Ekonomi</h6></a></li>
                                    <li><a href="#" onClick={() => this.props.setCategory('politic')}><h6>Politik</h6></a></li>
                                    <li><a href="#" onClick={() => this.props.setCategory('soccer')}><h6>Hiburan</h6></a></li>
                                    <li><a href="#" onClick={() => this.props.setCategory('other')}><h6>Lainnya</h6></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="search-container">
                                <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search"/>
                                <button type="submit"><img className="search" src={search} alt=""/></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li><a href="#"><h6>Masuk</h6></a></li>
                                    <li><a href="#"><h6>Daftar</h6></a></li>
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