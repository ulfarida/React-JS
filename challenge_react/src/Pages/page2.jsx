import React, { Component } from 'react';
import Header from "../Components/header"
import Footer from "../Components/footer"

class Page2 extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="about-content">
                    <div className="container">
                        <div className="about-items">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h1>About Me.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-main">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                    <div class="desc-about">
                                        <p>Versatile Front-end Developer with 3+ years of experience designing, developing, and managing complex e-commerce sites and internal frameworks. Specializes in AngularJS and responsive design.</p>
                                    </div>
                                    <div class="education">
                                        <h3>Education</h3>
                                    </div>
                                    <ul class="years1">
                                        <li>2014</li>
                                        <li class="no_list">DIPLOMA</li>
                                        <li class="small_list">Computer Engineering - University of Chicago</li>
                                    </ul>
                                    <ul class="years2">
                                        <li>2018</li>
                                        <li class="no_list">BACHELOR DEGREE</li>
                                        <li class="small_list">BS Computer Engineering - University of Chicago</li>
                                    </ul>
                            
                                
                                    <div class="table_title">
                                        <p>Here’s few technologies I’ve been working with recently :</p>
                                    </div>
                            
                                <div class="tabel_about">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td>HTML & CSS</td>
                                            <td>Serverless</td>
                                            <td>Scrum</td>
                                        </tr>
                                        <tr>
                                            <td>Programming</td>
                                            <td>Restful API</td>
                                            <td>Test-Driven Dev</td>
                                        </tr>
                                        <tr>
                                            <td>Database</td>
                                            <td>Javascript</td>
                                            <td>Software Testing</td>
                                        </tr>
                                        <tr>
                                            <td>Git & Github</td>
                                            <td>Sigle Page App</td>
                                            <td>UX/UI Designer</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="about-pict">
                                    <div class="gambar-2-about">
                                        <img src={require("../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg")} />
                                        <div class="gambar-3-about">
                                            <img src={require("../assets/img/img-dot.png")} alt= ""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <Footer />
            </div> 
        );
    }
}

export default Page2;
