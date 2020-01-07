import React, { Component } from 'react';
import Header from "../Components/header"

class Page1 extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="home-content">
                    <div className="container">
                        <div className="items">
                            <div className="row align-items-center items">
                                <div className="col-md-5 image-1">
                                    <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="name">
                                            <h5>Hi, my name is</h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="sullivan">
                                            <h1>Anne Sullivan</h1>
                                        </div>
                                    </div>
                                        <div className="for-the-web">
                                            <h4>I build things for the web</h4>
                                        </div>
                                    <div className="row">
                                        <div className="get-in-touch d-flex align-items-center">
                                            <div className="button-1">
                                                <a href="#">Get in touch</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Page1;
