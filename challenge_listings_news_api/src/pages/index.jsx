import React, { Component } from 'react';
import Header from "../components/header"
import News from "../components/news"
import TopNews from "../components/topNews"

class Index extends Component {
    state = {
        category : ''
    }

    setCategory = (value) => {
        const self = this;
        self.setState({category : value})
    }

    render () {
        return (
            <div>
                <Header setCategory={this.setCategory} />
                <div className="container">
                    <div className="row content">
                        <div className="col-md-4 list-news">
                            <TopNews/>
                        </div>
                        <div className="col-md-8 list-news">
                            <News category={this.state.category}/>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Index;