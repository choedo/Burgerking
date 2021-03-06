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
            case '/Burgerking/menu/special':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/premium':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                    break;
            case '/Burgerking/menu/whopper':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/junior':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.add("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/allday':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.add("on");
                tab[5].classList.remove("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/side':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.add("on");
                tab[6].classList.remove("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/drink':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                tab[3].classList.remove("on");
                tab[4].classList.remove("on");
                tab[5].classList.remove("on");
                tab[6].classList.add("on");
                tab[7].classList.remove("on");
                break;
            case '/Burgerking/menu/dogper':
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
                    <h2>????????????</h2>

                    <ul className="menuTopBtn">
                        <li><Link to="/Burgerking/menu/special" className="category">?????????&?????????</Link></li> 
                        <li><Link to="/Burgerking/menu/premium" className="category">????????????</Link></li>
                        <li><Link to="/Burgerking/menu/whopper" className="category">??????</Link></li>
                        <li><Link to="/Burgerking/menu/junior" className="category">?????????&??????</Link></li>
                        <li><Link to="/Burgerking/menu/allday" className="category">?????????&????????????</Link></li>
                        <li><Link to="/Burgerking/menu/side" className="category">?????????</Link></li>
                        <li><Link to="/Burgerking/menu/drink" className="category">??????&?????????</Link></li>
                        <li><Link to="/Burgerking/menu/dogper" className="category">??????</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <Route path="/Burgerking/menu/:category" component={MenuList} />
            </div>
        </div>
    );
}

export default Menu;