import React, { Component } from "react";

import "./home.css";
import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";

export default class ImgSlide extends Component{
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            draggable : false,
            autoplaySpeed: 3000,
            slideToShow: 1,
            slideToScroll: 1
        };


        return(
            <div>
                <Slider {...settings}>
                    <div className="mainImg mainImg01"></div>
                    <div className="mainImg mainImg02"></div>
                    <div className="mainImg mainImg03"></div>
                </Slider>
            </div>
        );
    }
}