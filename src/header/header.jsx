import React from "react";
import styled from './header.module.css';
import { Route, Link } from 'react-router-dom';

import { BiChevronDown } from "react-icons/bi"; // 화살표 아이콘

function Header() {

    const header = document.getElementsByTagName('header');

    const mouseOver = (e) => {
        header[0].style.height = '400px'
    }

    const mouseLeave = (e) => {
        header[0].style.height = '120px'
    }

    return(
        <div>
            <header onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                <div className={styled.header_in}>
                    <div className={styled.menu_ico}>
                        <button></button>
                    </div>

                    <div className={styled.logo}>
                        <Link to="/Burgerking"><img src={require("./images/logo.gif")} alt="로고" /></Link>
                    </div>

                    <div className={styled.nav}>
                        <ul className={styled.main_mn}>
                            <li>
                                <p className={styled.main_mn_link}>메뉴소개<span><BiChevronDown /></span></p>
                                <ul className={styled.sub_mn}>
                                    <li><Link to="/Burgerking/menu/special" className={styled.sub_mn_link}>스페셜&할인팩</Link></li> 
                                    <li><Link to="/Burgerking/menu/premium" className={styled.sub_mn_link}>프리미엄</Link></li>
                                    <li><Link to="/Burgerking/menu/whopper" className={styled.sub_mn_link}>와퍼</Link></li>
                                    <li><Link to="/Burgerking/menu/junior" className={styled.sub_mn_link}>주니어&버거</Link></li>
                                    <li><Link to="/Burgerking/menu/allday" className={styled.sub_mn_link}>올데킹&치킨버거</Link></li>
                                    <li><Link to="/Burgerking/menu/side" className={styled.sub_mn_link}>사이드</Link></li>
                                    <li><Link to="/Burgerking/menu/drink" className={styled.sub_mn_link}>음료&디저트</Link></li>
                                    <li><Link to="/Burgerking/menu/dogper" className={styled.sub_mn_link}>독퍼</Link></li>
                                </ul>
                            </li>

                            <li>
                                <p className={styled.main_mn_link}>매장소개<span><BiChevronDown /></span></p>
                                <ul className={styled.sub_mn}>
                                    <li><Link to="/Burgerking/search" className={styled.sub_mn_link}>매장찾기</Link></li>
                                </ul>
                            </li>

                            <li>
                                <p className={styled.main_mn_link}>이벤트<span><BiChevronDown /></span></p>
                                <ul className={styled.sub_mn}>
                                    <li><Link to="/Burgerking/event/all" className={styled.sub_mn_link}>이벤트</Link></li>
                                </ul>
                            </li>

                            <li>
                                <p className={styled.main_mn_link}>브랜드스토리<span><BiChevronDown /></span></p>
                                <ul className={styled.sub_mn}>
                                    <li><Link to="/Burgerking/brandstory/brand/story" className={styled.sub_mn_link}>BRAND</Link></li>
                                    <li><Link to="/Burgerking/brandstory/whopper/real" className={styled.sub_mn_link}>WHOPPER</Link></li>
                                    <li><Link to="/Burgerking/brandstory/comm/ad" className={styled.sub_mn_link}>COMM.</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className={styled.order}>
                        <Link to="/Burgerking/login" className={styled.order_btn}>딜리버리 주문</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;