import React from "react";
import styled from './brandStory.css';
import { Route, Link } from 'react-router-dom';

import Story from "../brand/story";
import QSR from "../brand/qsr";

import Real from "../whopper/real";
import Grilled from "../whopper/grilled";
import Ingredient from "../whopper/ingredient";
import Trust from "../whopper/trust";

import Ad from "../comm/ad";
import Awards from "../comm/awards";
import NewProduct from "../comm/newProduct";
import ESG from "../comm/esg";

function BrandStory() {
    let location;

    window.addEventListener('click', function() {
        location = window.location.pathname;

        let tab = document.querySelectorAll('.brandstoryTopBtn li');

        switch(location) {
            case '/brandstory/brand/story':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                break;
            case '/brandstory/brand/qsr':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                break;
        
            case '/brandstory/whopper/real':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/brandstory/whopper/grilled':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/brandstory/whopper/ingredient':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/brandstory/whopper/trust':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
        
            case '/brandstory/comm/ad':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/brandstory/comm/awards':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/brandstory/comm/newproduct':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/brandstory/comm/esg':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
        }
    });

    return(
        <div>
            <div className="menu_link">
                <div>
                    <h2>브랜드 스토리</h2>

                    <ul className="brandstoryTopBtn">
                        <li className="on"><Link to="/brandstory/brand/story" className="category">BRAND</Link></li> 
                        <li><Link to="/brandstory/whopper/real" className="category">WHOPPER</Link></li>
                        <li><Link to="/brandstory/comm/ad" className="category">COMM.</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <Route path="/brandstory/brand/story" component={Story} />
                <Route path="/brandstory/brand/qsr" component={QSR} />
                <Route path="/brandstory/whopper/real" component={Real} />
                <Route path="/brandstory/whopper/grilled" component={Grilled} />
                <Route path="/brandstory/whopper/ingredient" component={Ingredient} />
                <Route path="/brandstory/whopper/trust" component={Trust} />
                <Route path="/brandstory/comm/ad" component={Ad} />
                <Route path="/brandstory/comm/awards" component={Awards} />
                <Route path="/brandstory/comm/newproduct" component={NewProduct} />
                <Route path="/brandstory/comm/esg" component={ESG} />
            </div>
        </div>
    );
}

export default BrandStory;