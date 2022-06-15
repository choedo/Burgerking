import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menuDetail.module.css';

import menuDB from '../db/menu.json';

function MenuDetailImg({ match }) {
    const { key } = match.params;
    const menuDetail = menuDB.menu.filter(menu => (
        menu.id == key
    ));

    return(
        <div className={styled.detailBg}>
            <div className={styled.detail_in}>
                {menuDetail.map((menu) => (
                    <>
                        <div className={styled.detailName}>
                            <h4>{menu.name}</h4>
                            <p>{menu.explain}</p>
                        </div>

                        <div className={styled.detailImg}>
                            <img src={menu.img} alt={menu.name} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default MenuDetailImg;