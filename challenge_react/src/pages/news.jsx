import React, { Component } from 'react';
import axios from 'axios'
import ListArticle from '../components/listArticle'
import Header from '../components/header'
import TopNews from '../components/topNews'

const apiKey = "58fecc904b4e40ef920ae5582000d89a";
const baseUrl = "https://newsapi.org/v2/";
const urlHeadline = baseUrl + "everything?language=en&apiKey=" + apiKey;

class News extends Component {
    state = {
        listNews : [],
        isLoading : true,
        category : 'general',
        search : ''
    };

    setCategoryNews = async value => {
        const category = value;
        await this.props.history.replace('/news/'+category)
        this.getNews()
    }

    getNews = () => {
        const self = this;
        const paramCategory = this.props.match.params.category
        axios
            .get(urlHeadline+'&q='+paramCategory)
            .then(function(response) {
                self.setState({ listNews: response.data.articles, isLoading: false})
            })

            .catch(function(error) {
                self.setState({ isLoading: false })
            })
    }


    setInput = event => {
        console.warn("cek e pada handle input change", event.target);
        console.warn("event", event.target.value);
        const keyword = event.target.value;
        this.setState({ search: keyword });
        this.searchNews(keyword);
    };

    searchNews = async keyword => {
        console.log("searchNews", keyword);
        const self = this;
        if (keyword.length > 2) {
          try {
            const response = await axios.get(
                urlHeadline+'&q='+keyword
            );
            console.log(response);
            self.setState({ listNews: response.data.articles });
          } catch (error) {
            console.error(error);
          }
        }
      };

    componentDidMount = () => { 
        const self = this;
        this.getNews(self.state.category)
    };

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
            <div>
                <Header 
                    doSearch={event => this.setInput(event)}
                    keyword={this.state.search}
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

        );
    }
}

export default News;