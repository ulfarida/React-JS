import React, { Component } from 'react';
import logo from '../logo.svg';
import search from '../images/search.png'
import { Link } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Header extends Component {
    afterSignout = () => {
        store.setState({auth : false})
        this.props.history.push('/auth')
    }

    homeRoute = () => {
        this.props.history.push('/')
        this.props.getNewsAxios('other', 'everything')
    }

    routeCategory = categoryValue => {
        this.props.history.replace("/news/" + categoryValue);
    };

    render () {
        return (
             <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <ul className="list-unstyled home-header-nav__list">
                                <li className="logo"><img src={logo} alt=""/></li>
                                <li><h6><Link onClick={this.homeRoute} className="home">Home</Link></h6></li>
                            </ul>
                        </div>
                        <div className="col-md-5">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li onClick={this.props.isCategoryNews !== undefined ? () => this.props.setCategory('soccer') : () => this.routeCategory('soccer') }><h6>Sepakbola</h6></li>
                                    <li onClick={this.props.isCategoryNews !== undefined ? () => this.props.setCategory('economy') : () => this.routeCategory('economy')}><h6>Ekonomi</h6></li>
                                    <li onClick={this.props.isCategoryNews !== undefined ? () => this.props.setCategory('politic') : () => this.routeCategory('politic')}><h6>Politik</h6></li>
                                    <li onClick={this.props.isCategoryNews !== undefined ? () => this.props.setCategory('entertainment') : () => this.routeCategory('entertainment')}><h6>Hiburan</h6></li>
                                    <li><Link to="/profile"><h6>Profile</h6></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="search-container">
                                <form action="/action_page.php">
                                <input type="text" placeholder={this.props.placeholder} name="search" onChange={this.props.doSearch} value={this.props.keyword} />
                                <button type="submit"><img className="search" src={search} alt=""/></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="home-header-nav">
                                <ul className="list-unstyled home-header-nav__list">
                                    <li><Link to="/auth"><h6>Sign In</h6></Link></li>
                                    <li><Link onClick={this.afterSignout}><h6>Sign Out</h6></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             </header>
        );
    }
}

export default connect("auth", actions)(Header);