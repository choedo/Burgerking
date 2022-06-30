import React, { useState } from "react";
import  './home.css';
import { Route, Link } from 'react-router-dom';

import ImgSlide from "./imgSlide";

import youtube from './images/ico_home_sns_youtube1.ff45a855.png';
import facebook from './images/ico_home_sns_facebook.ff45a855.png';
import instagram from './images/ico_home_sns_insta1.5e20069c.png';



function Home() {
    return(
        <div>
            <div className="main">
                <div className="main_in">
                    {/* Main Slide */}
                    <ImgSlide />

                    {/* Video AD */}
                    <div className="main_video">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KUmrD90Q8I8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {/* SNS */}
                    <div className="main_sns">
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured">
                                    <div>
                                        <img src={youtube} alt="유튜브" />
                                    </div>
                                    <div>
                                        <strong>YOUTUBE</strong>
                                        <p>구독 4.9만</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured">
                                    <div>
                                        <img src={facebook} alt="페이스북" />
                                    </div>
                                    <div>
                                        <strong>FACEBOOK</strong>
                                        <p>좋아요 47.8만</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCEKRI0fipK4LEgV98nI2CQA/featured">
                                    <div>
                                        <img src={instagram} alt="인스타그램" />
                                    </div>
                                    <div>
                                        <strong>INSTAGRAM</strong>
                                        <p>팔로워 74.9K</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Maunal */}
                    <div className="main_manual">
                        <div className="maunal_app"><Link to="/" className="maunal_link"></Link></div>
                        <div className="maunal_delivery"><Link to="/" className="maunal_link"></Link></div>
                    </div>

                    {/* Search */}
                    <div className="main_search">
                        <h1>매장찾기</h1>
                        <h2>고객님 주변에 있는 버거킹을 찾아보세요!</h2>
                        <p><Link to="/Burgerking/search" className="search_btn">매장찾기</Link></p>
                        <ul>
                            <li>
                                <div>
                                    <p>집에서 편안하게<br />받을 수 있는</p><br /><span>딜리버리</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>미리 주문하고<br />픽업가능한</p><br /><span>킹오더</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>차안에서 빠르게<br />이용할 수 있는</p><br /><span>드라이브 스루</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>24시간 언제든<br />함께할 수 있는</p><br /><span>24시간</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>든든한<br />아침을 도와줄</p><br /><span>아침메뉴</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>내 차와 함께<br />올 수 있는</p><br /><span>주차공간</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* AD */}
                    <div className="main_ad">
                        <ul>
                            <li>
                                <strong>집에서 만나는 버거킹</strong>
                                <span>딜리버리 전화주문 안내 10:00–22:00 / 연중무휴 (매장별로 상이할 수 있습니다.)</span>
                            </li>
                            <li>
                                <p>1599-0505</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;