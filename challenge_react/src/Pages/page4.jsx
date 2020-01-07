import React, { Component } from 'react';

class Page4 extends Component {
    render () {
        return (
            <div className="section_contact">
                <div className="row h-100">
                    <div className="col-md-5">
                        <div className="logo d-flex justify-content-center align-items-center">
                            <div className="background"></div>
                            <img src={require("../assets/img/logo-ALTA-v2.png")}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="form">
                            <h3>Contact Us</h3>
                            <form action="#">
                                <div className="form_group">
                                    <label for="full_name">Full Name<span style={{color:'red'}}>*</span></label><br/>
                                    <input id="full_name" name="full name" type="text" placeholder="alterra academy" required/>
                                </div>
                                <div className="form_group">
                                    <label for="email_address">Email Address<span style={{color:'red'}}>*</span></label><br/>
                                    <input id="email_address" name="email address" type="text" placeholder="example@alterra.id" required/>
                                </div>
                                <div className="form_group">
                                    <label for="phone_number">Phone Number<span style={{color:'red'}}>*</span></label><br/>
                                    <input id="phone_number" name="phone number" type="text" placeholder="085554447900" required/>
                                </div>
                                <div className="form_group">
                                    <span>Role</span><br/>
                                    <select>
                                        <option placeholder="Selected">Selected</option>
                                        <option value="front_end_developer">Front End Developer</option>
                                        <option value="software_engineer">Software Engineer</option>
                                        <option value="quality_engineer">Quality Engineer</option>
                                    </select>
                                </div>
                                <div className="message">
                                    <label for="message">Message</label><br/>
                                    <textarea id="message"></textarea>
                                    <div className="space"></div>
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page4;
