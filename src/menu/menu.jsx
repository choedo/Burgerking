import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menu.css';

import MenuList from "./menuList";

function Menu() {
    let location;

    window.addEventListener('click', function() {
        location = window.location.pathname;

        let tab = document.querySelectorAll('.menuTopBtn li');

        switch(location) {
            case '/menu/special':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/premium':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                    break;
            case '/menu/whopper':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/junior':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.add("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/allday':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.add("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/side':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.add("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/drink':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.add("on");
                tab[7].classList.remove("on");
                break;
            case '/menu/dogper':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.add("on");
                break;
        }
    });

    return(
        <div>
            <div className="menu_link">
                <div>
                    <h2>메뉴소개</h2>

                    <ul className="menuTopBtn">
                        <li><Link to="/menu/special" className="category">스페셜&할인팩</Link></li> 
                        <li><Link to="/menu/premium" className="category">프리미엄</Link></li>
                        <li><Link to="/menu/whopper" className="category">와퍼</Link></li>
                        <li><Link to="/menu/junior" className="category">주니어&버거</Link></li>
                        <li><Link to="/menu/allday" className="category">올데킹&치킨버거</Link></li>
                        <li><Link to="/menu/side" className="category">사이드</Link></li>
                        <li><Link to="/menu/drink" className="category">음료&디저트</Link></li>
                        <li><Link to="/menu/dogper" className="category">독퍼</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <Route path="/menu/:category" component={MenuList} />
            </div>
        </div>
    );
}

export default Menu;