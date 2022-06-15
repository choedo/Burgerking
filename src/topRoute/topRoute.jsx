import React, { useState } from "react"
import styled from './topRoute.module.css';
import { Route, Link } from 'react-router-dom';

function TopRoute(props) {
    let [href, setHref] = useState('');
    let [subHref, setSubHref] = useState('');
    let location;

    window.addEventListener('click', function() {
        location = window.location.pathname;
        
        switch(location) {
            case '/Burgerking/login':
                setHref('로그인');
                setSubHref('');
                break;

            case '/Burgerking/join':
                setHref('로그인');
                setSubHref('회원가입');
                break;

            case '/Burgerking/menu/special':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/premium':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/whopper':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/junior':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/allday':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/side':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/drink':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/Burgerking/menu/dogper':
                setHref('메뉴소개');
                setSubHref('');
                break;

            case '/Burgerking/search':
                setHref('매장찾기');
                setSubHref('');
                break;

            case '/Burgerking/event/all':
                setHref('이벤트');
                setSubHref('전체');
                break;
            case '/Burgerking/event/ing':
                setHref('이벤트');
                setSubHref('진행중');
                break;
            case '/Burgerking/event/end':
                setHref('이벤트');
                setSubHref('종료');
                break;

            case '/Burgerking/newstore':
                setHref('신규매장');
                setSubHref('전체');
                break;
            
            case '/Burgerking/searchstore':
                setHref('매장찾기');
                setSubHref('');
                break;

            case '/Burgerking/brandstory/brand/story':
                setHref('브랜드스토리');
                setSubHref('BRAND');
                break;
            case '/Burgerking/brandstory/brand/qsr':
                setHref('브랜드스토리');
                setSubHref('BRAND');
                break;

            case '/Burgerking/brandstory/whopper/real':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
            case '/Burgerking/brandstory/whopper/grilled':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
            case '/Burgerking/brandstory/whopper/ingredient':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
            case '/Burgerking/brandstory/whopper/trust':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;

            case '/Burgerking/brandstory/comm/ad':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/Burgerking/brandstory/comm/awards':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/Burgerking/brandstory/comm/newproduct':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/Burgerking/brandstory/comm/esg':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
        }

    });

    return(
        <div>
            <div className={styled.top_route}>
                <ul>
                    <li><Link to="/" className={styled.menu_link}>HOME</Link></li>
                    {href !== '' && <li>{href}</li>}
                    {subHref !== '' && <li>{subHref}</li>}
                </ul>
            </div>
        </div>
    );
}

export default TopRoute;