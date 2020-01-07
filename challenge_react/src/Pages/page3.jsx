import React, { Component } from 'react';
import Header from "../Components/header"
import Footer from "../Components/footer"

class Page3 extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="about-content">
                    <div className="container">
                        <div className="about-items">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h1>EXPERIENCE</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-2">
                                <div className="symbol">
                                    <span className="symbol1">&#8226;</span><br/>
                                    <span className="symbol2">&#8226;</span><br/>
                                    <span className="symbol3">&#8226;</span><br/>
                                </div>
                            </div>
                            <div className="col-md-10 col-10">
                                <div className="job_desk">
                                    <div className="job_desk_atas">
                                        <h3>FULL-STACK ENGINEER - ALTERRA ACADEMY</h3>
                                        <span className="tanggal">May, 2019 - Present</span>
                                        <div className="point">
                                            <span>-</span> 
                                            <p>
                                                Write modern, performant, maintainable code for a diverse array of client and internal projects<br/>
                                            </p>
                                        </div>
                                        <div className="point">
                                            <span>-</span>
                                            <p>
                                                Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify
                                            </p>
                                        </div>    
                                    </div>
                                    <div className="job_desk_tengah">
                                        <h3>FRONTEND ENGINEER - APPLE</h3>
                                        <span className="tanggal">May, 2018 - May, 2019</span>
                                        <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript</p>
                                    </div>
                                    <div className="job_desk_bawah">
                                        <h3>UI/UX DESIGN - SCOUT</h3>
                                        <span className="tanggal">Januari, 2018 - April, 2018</span>
                                        <div className="point">
                                            <span>-</span>
                                            <p>
                                            Developed and shipped highly interactive web applications for Apple Music using Ember.js<br/>
                                            </p>
                                        </div>
                                        <div className="point">
                                            <span>-</span> 
                                            <p>
                                                Architected and implemented the front-end of Apple Music’s embeddable web player widget, which lets users log in and listen to full songs in the browse
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div> 
        );
    }
}

export default Page3;
