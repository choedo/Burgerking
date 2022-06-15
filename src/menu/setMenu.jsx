import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menuDetail.module.css';

import menuDB from '../db/menu.json';

function SetMenu({ match }) {
    const { category, key } = match.params;
    const menuCategory = menuDB.menu.filter(cate => (
        cate.packageName == category
    ));
    const menuDetail = menuDB.menu.filter(menu => (
        menu.id == key
    ));

    return(
        <div className={styled.set_con}>
            <ul>
                {
                    menuCategory[0].packageName == "drink" || menuCategory[0].packageName == "side" || menuCategory[0].packageName == "special" ?
                    menuDetail.map((menu) => (
                        <li>
                            <div className={styled.setImg}><img src={menu.img} alt="이미지" /></div>
                            <div className={styled.setInfo}>
                                <h4>{menu.name}</h4>
                                <p>{menu.composition}</p>
                            </div>
                        </li>
                    ))
                    :
                    menuDetail.map((menu) => (
                        <>
                            <li>
                                <div className={styled.setImg}><img src={menu.largeImg} alt="라지세트" /></div>
                                <div className={styled.setInfo}>
                                    <h4>{menu.name} 라지세트</h4>
                                    <p>{menu.name}+프렌치프라이L+콜라L</p>
                                </div>
                            </li>
                            <li>
                                <div className={styled.setImg}><img src={menu.setImg} alt="세트" /></div>
                                <div className={styled.setInfo}>
                                    <h4>{menu.name} 세트</h4>
                                    <p>{menu.name}+프렌치프라이R+콜라R</p>
                                </div>
                            </li>
                            <li>
                                <div className={styled.setImg}><img src={menu.img} alt="단품" /></div>
                                <div className={styled.setInfo}>
                                    <h4>{menu.name}</h4>
                                    <p>단품</p>
                                </div>
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    );
}

export default SetMenu;