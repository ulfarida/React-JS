import React, { Component } from 'react';
import axios from 'axios'
import TopArticle from './topArticle'

const apiKey = "58fecc904b4e40ef920ae5582000d89a";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "top-headlines?country=us&q=IT&apiKey=" + apiKey;

class TopNews extends Component {
    state = {
        listNews : [],
        isLoading : true
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response) {
                self.setState({ listNews: response.data.articles, isLoading: false})
            })

            .catch(function(error) {
                self.setState({ isLoading: false })
            })
    };

    render () {
        const { listNews, isLoading } = this.state;
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        })

        return (
            <div className="headlineNews">
                { isLoading ? <div className="loading text-center">Loading...</div> : <TopArticle news={topHeadlines}/> }
            </div>
        );
    }
}

export default TopNews;