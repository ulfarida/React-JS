import React, { Component } from 'react';
import axios from 'axios'
import ListArticle from './listArticle'

const apiKey = "58fecc904b4e40ef920ae5582000d89a";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "everything?language=en&apiKey=" + apiKey;

class News extends Component {
    state = {
        listNews : [],
        isLoading : true,
        category : 'general'
    };

    getNews = (category) => {
        const self = this;
        self.setState({category : category.category})
        axios
            .get(urlHeadline+'&q='+category.category)
            .then(function(response) {
                self.setState({ listNews: response.data.articles, isLoading: false})
            })

            .catch(function(error) {
                self.setState({ isLoading: false })
            })
    }

    componentDidMount = () => {
        const self = this;
        return this.getNews(self.state.category)
    };

    componentWillReceiveProps = (props) => {
        const self = this;
        return this.getNews(props)
    }

    render () {
        const { listNews, isLoading } = this.state;
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.image !== null) {
                return item;
            }
            return false;
        })

        const headlineNews = topHeadlines.map((item, key) => {
            return (
                <ListArticle 
                    key={key} 
                    title={item.title} 
                    img={item.urlToImage} 
                    content={item.description}
                    url={item.url} />
            );
        });

        return (
            <div className="headlineNews">
                { isLoading ? <div className="loading text-center">Loading...</div> : headlineNews }
            </div>
        );
    }
}

export default News;