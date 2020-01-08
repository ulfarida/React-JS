import React, { Component } from 'react';
import ListArticle from '../components/listArticle'
import Header from '../components/header'
import TopNews from '../components/topNews'
import { connect } from "unistore/react";
import { actions, store } from "../store";
import { Redirect } from "react-router-dom"

class News extends Component {

    setCategoryNews = async value => {
        const category = value;
        await this.props.history.replace('/news/'+category)
        this.getNews()
    }

    getNews = () => {
        const paramCategory = this.props.match.params.category;
        this.props.getNewsAxios(paramCategory, 'everything');
    }

    setInput = event => {
        const keyword = event.target.value;
        store.setState({ search: keyword });
        if (keyword.length > 2) {
            this.props.getNewsAxios(keyword, 'everything')
        }
    };

    componentDidMount = () => { 
        this.props.getNewsAxios(this.props.category, 'everything')
    };

    render () {
        const listNews = this.props.listNews
        const isLoading = this.props.isLoading
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

        if (this.props.auth===false) {
            return <Redirect to={{ pathname: '/auth'}} /> } 
        else { return (
            <div>
                <Header 
                    doSearch={event => this.setInput(event)}
                    keyword={this.props.search}
                    placeholder="type something"
                    setCategory={e => this.setCategoryNews(e)}
                    isCategoryNews={true} 
                    {...this.props}/>
                <div className="container">
                    <div className="row content">
                        <div className="col-md-4 list-news">
                            <TopNews/>
                        </div>
                        <div className="col-md-8 list-news">
                            { isLoading ? <div className="loading text-center">Loading...</div> : headlineNews }
                        </div>
                    </div>
                </div>
            </div>

        )};
    }
}

export default connect("category, listNews, isLoading, search, auth", actions)(News);