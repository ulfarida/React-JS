import React, { Component } from 'react';
import article from '../images/article.jpg';

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
                            <a href="#">Gabung Alpha Tech Academy Sekarang!</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#2</p>
                            <a href="#">Ada apa antara Kobar dan Hasan?</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#3</p>
                            <a href="#">Mengenal Arafat sang Master Python</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#4</p>
                            <a href="#">Belajar reactJs itu seru. Kamu setuju?</a><br/>
                        </div>
                        <div className="berita-terkini">
                            <p>#5</p>
                            <a href="#">Sudahkah kamu sehat mental?</a>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default TopArticle;