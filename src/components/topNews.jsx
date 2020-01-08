import React, { Component } from 'react';
import TopArticle from './topArticle'
import { connect } from "unistore/react";
import { actions } from "../store";


class TopNews extends Component {
    componentDidMount = () => {
        this.props.getNewsAxios('general', 'top-headlines')
    };

    render () {
        const listNews = this.props.listNews;
        const isLoading = this.props.isLoading;
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

export default connect("listNews, isLoading, search", actions)(TopNews);