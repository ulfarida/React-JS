import React, { Component } from 'react';

class TopArticle extends Component {

    render () {
        return (
            <div className="list-article">
                <div className="list-berita">                
                    <div className="list-berita-border">                              
                        <div className="berita-terkini">
                            <div className="row">
                                <div className="col-md-6">BERITA TERKINI</div>
                                <div className="col-md-6 seeall"><a href="">Lihat Semua</a></div>
                            </div>
                        </div>
                        
                        <div className="berita-terkini">
                            <p>#1</p>
                            <a href={this.props.news[1].url}>{this.props.news[1].title}</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#2</p>
                            <a href={this.props.news[2].url}>{this.props.news[2].title}</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#3</p>
                            <a href={this.props.news[3].url}>{this.props.news[3].title}</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#4</p>
                            <a href={this.props.news[4].url}>{this.props.news[4].title}</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#5</p>
                            <a href={this.props.news[5].url}>{this.props.news[5].title}</a>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default TopArticle;