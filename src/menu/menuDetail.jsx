import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './menuDetail.module.css';

import MenuDetailImg from "./menuDetailImg";
import MenuDetailInfo from "./menuDetailInfo";
import SetMenu from "./setMenu";
import OtherMenu from "./otherMenu";

function MenuDetail() {
    return(
        <div>
            <Route path="/Burgerking/menudetail/:category/:key" component={MenuDetailImg} />
            <MenuDetailInfo />
            <Route path="/Burgerking/menudetail/:category/:key" component={SetMenu} />
            <Route path="/Burgerking/menudetail/:category/:key" component={OtherMenu} />
        </div>
    );
}

export default MenuDetail;