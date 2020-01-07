import React, { Component } from 'react';
import article from '../images/article.jpg';
import love from '../images/love.png';
import share from '../images/share.png';
import dislike from '../images/dislike.png';

class ListArticle extends Component {
    render () {
        return (
            <div className="list-article">
                <div className="list-berita">                
                    <div className="list-berita-border">                              
                        <img src={article} alt=""/>
                        <div className="news-content">
                            <h4><a href="#">Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</a></h4>
                            <p className="short-article">Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.</p>
                            <p className="last-updated">Last updated 3 mins ago</p>
                        </div>
                        <div className="berita-terkini share">
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center"><a href="#"><img src={love} alt=""/></a></div>
                                <div className="col-md-4 text-center"><a href="#"><img src={share} alt=""/></a></div>
                                <div className="col-md-4 text-center"><a href="#"><img src={dislike} alt=""/></a></div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default ListArticle;