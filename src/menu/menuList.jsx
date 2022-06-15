import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menu.css';

import menuDB from '../db/menu.json';

function MenuList({ match }) {
    const { category } = match.params;
    const menuList = menuDB.menu.filter(menu => (
        menu.packageName == category
    ));

    if(!menuList) {
        return <div>메뉴가 없습니다.</div>
    }

    return(
        <div>
            <div className="list">
                <ul>
                    {menuList.map((menu) => (
                        <li>
                            <Link to={menu.url}>
                                <div className="menuImg">
                                    <img src={menu.img} alt={menu.name} />
                                </div>
                                <div className="menuName">
                                    <p>{menu.name}</p>   
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MenuList;