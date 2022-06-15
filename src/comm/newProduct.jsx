import React from "react";
import styled from './newProduct.module.css';
import './newProduct.css';
import { Route, Link } from 'react-router-dom';

import menuDB from '../db/menu.json';

function NewProduct() {
    const menuList = menuDB.menu.filter(menu => (
        menu.newproduct == true
    ));

    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/ad" className={styled.btn_link}>
                            광고(TV/Digital)
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/awards" className={styled.btn_link}>
                            수상내역
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/newproduct" className={styled.btn_link}>
                            신제품
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/esg" className={styled.btn_link}>
                            ESG
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="container">
                <ul>
                    {menuList.map((menu) => (
                        <li>
                            <Link to={menu.url}>
                                <div className="menuImg">
                                    <img src={menu.img} alt={menu.name} />
                                </div>
                                <div className="menuCon">
                                    <div className="menuName">
                                        <p>{menu.name}</p>   
                                    </div>
                                    <div className="menuExplain">
                                        <p>{menu.explain}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NewProduct;