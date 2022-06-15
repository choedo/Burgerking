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
            case '/login':
                setHref('로그인');
                setSubHref('');
                break;

            case '/join':
                setHref('로그인');
                setSubHref('회원가입');
                break;

            case '/menu/special':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/premium':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/whopper':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/junior':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/allday':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/side':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/drink':
                setHref('메뉴소개');
                setSubHref('');
                break;
            case '/menu/dogper':
                setHref('메뉴소개');
                setSubHref('');
                break;

            case '/search':
                setHref('매장찾기');
                setSubHref('');
                break;

            case '/event/all':
                setHref('이벤트');
                setSubHref('전체');
                break;
            case '/event/ing':
                setHref('이벤트');
                setSubHref('진행중');
                break;
            case '/event/end':
                setHref('이벤트');
                setSubHref('종료');
                break;

            case '/newstore':
                setHref('신규매장');
                setSubHref('전체');
                break;
            
            case '/searchstore':
                setHref('매장찾기');
                setSubHref('');
                break;

            case '/brandstory/brand/story':
                setHref('브랜드스토리');
                setSubHref('BRAND');
                break;
            case '/brandstory/brand/qsr':
                setHref('브랜드스토리');
                setSubHref('BRAND');
                break;

            case '/brandstory/whopper/real':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
                case '/brandstory/whopper/grilled':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
                case '/brandstory/whopper/ingredient':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;
                case '/brandstory/whopper/trust':
                setHref('브랜드스토리');
                setSubHref('WHOPPER');
                break;

            case '/brandstory/comm/ad':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/brandstory/comm/awards':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/brandstory/comm/newproduct':
                setHref('브랜드스토리');
                setSubHref('COMM.');
                break;
            case '/brandstory/comm/esg':
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