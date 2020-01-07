import React from "react"
import { Redirect } from "react-router-dom"
import Header from "../components/header"

const Profile = (props) => {
    const auth = localStorage.getItem("auth")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")

    if (auth===null) {
        return <Redirect to={{ pathname: '/auth'}} />
    } else {
        return (
            <div>
                <Header {...props} />
                <div className="auth text-center">
                    <h1>Profile</h1>
                    <h5>Username: {username}</h5>
                    <h5>Email: {email}</h5>
                </div>
            </div>
        )}
}

export default Profile