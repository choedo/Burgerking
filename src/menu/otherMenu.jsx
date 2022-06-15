import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menuDetail.module.css';

import menuDB from '../db/menu.json';

function OtherMenu({ match }) {
    const { category, key } = match.params;
    const menuCategory = menuDB.menu.filter(cate => (
        cate.packageName == category
    ));
    
    return(
        <div className={styled.other_con}>
            <div className={styled.other_in}>
                <h3>카테고리의 다른 메뉴</h3>
                <div className={styled.other_menu}>
                {menuCategory.map((menu) => (
                    
                        <div>
                            <Link to={menu.url}>
                                <div className={styled.otherImg}><img src={menu.img} alt={menu.name} /></div>
                                <div className={styled.otherName}>
                                    <p>{menu.name}</p>
                                </div>
                            </Link>
                        </div>
                   
                ))}
                </div>
                
                {/* <div className={styled.other_menu}>
                    <div>
                        <Link to="/menuDetail/menu2">
                            <div className={styled.otherImg}>이미지</div>
                            <div className={styled.otherName}>
                                <p>메뉴이름</p>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <div className={styled.otherImg}>이미지</div>
                        <div className={styled.otherName}>
                            <p>메뉴이름</p>
                        </div>
                    </div>
                    <div>
                        <div className={styled.otherImg}>이미지</div>
                        <div className={styled.otherName}>
                            <p>메뉴이름</p>
                        </div>
                    </div>
                    <div>
                        <div className={styled.otherImg}>이미지</div>
                        <div className={styled.otherName}>
                            <p>메뉴이름</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default OtherMenu;