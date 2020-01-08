import React from "react"
import { Redirect } from "react-router-dom"
import Header from "../components/header"
import { connect } from "unistore/react";
import { actions } from "../store";

const Profile = (props) => {
    if (props.auth===false) {
        return <Redirect to={{ pathname: '/auth'}} />
    } else {
        return (
            <div>
                <Header {...props} />
                <div className="auth text-center">
                    <h1>Profile</h1>
                    <h5>Username: {props.username}</h5>
                    <h5>Email: {props.email}</h5>
                </div>
            </div>
        )}
}

export default connect("auth, username, email", actions)(Profile);