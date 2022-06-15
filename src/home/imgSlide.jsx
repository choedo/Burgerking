import React, { Component } from "react";

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
            <div style={{height: "480px"}}>
                <Slider {...settings}>
                    <div style={{width: "100%", height: "480px"}}>
                        <img src={require('./images/main01.png')} alt="메인이미지1" />
                    </div>
                    <div style={{width: "100%", height: "480px"}}>
                        <img src={require('./images/main02.png')} alt="메인이미지1" />
                    </div>
                    <div style={{width: "100%", height: "480px"}}>
                        <img src={require('./images/main03.png')} alt="메인이미지1" />
                    </div>
                </Slider>
            </div>
        );
    }
}