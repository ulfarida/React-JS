import React, { Component } from 'react';

class TopArticle extends Component {
    
    render () {
        const num = [1, 2, 3, 4, 5]
        const titleTop = num.map((value) => {
            return (
            <div className="berita-terkini">
                    <p>#{value}</p>
                <a href={this.props.news[value].url}>{this.props.news[value].title}</a><br/>
            </div>
            );
        });

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
                        {titleTop}
                    </div>    
                </div>
            </div>
        );
    }
}

export default TopArticle;