import React, { Component } from 'react';
import Header from "../components/header"
import ListArticle from "../components/listArticle"
import TopArticle from "../components/topArticle"

class Index extends Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row content">
                        <div className="col-md-4">
                            <TopArticle/>
                        </div>
                        <div className="col-md-8">
                            <ListArticle />
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Index;