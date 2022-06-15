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
            case '/Burgerking/brandstory/brand/story':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/brandstory/brand/qsr':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                break;
        
            case '/Burgerking/brandstory/whopper/real':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/brandstory/whopper/grilled':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/brandstory/whopper/ingredient':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/brandstory/whopper/trust':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
        
            case '/Burgerking/brandstory/comm/ad':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/Burgerking/brandstory/comm/awards':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/Burgerking/brandstory/comm/newproduct':
                tab[0].classList.remove("on");
                tab[1].classList.remove("on");
                tab[2].classList.add("on");
                break;
            case '/Burgerking/brandstory/comm/esg':
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
                        <li className="on"><Link to="/Burgerking/brandstory/brand/story" className="category">BRAND</Link></li> 
                        <li><Link to="/Burgerking/brandstory/whopper/real" className="category">WHOPPER</Link></li>
                        <li><Link to="/Burgerking/brandstory/comm/ad" className="category">COMM.</Link></li>
                    </ul>
                </div>
            </div>

            <div>
                <Route path="/Burgerking/brandstory/brand/story" component={Story} />
                <Route path="/Burgerking/brandstory/brand/qsr" component={QSR} />
                <Route path="/Burgerking/brandstory/whopper/real" component={Real} />
                <Route path="/Burgerking/brandstory/whopper/grilled" component={Grilled} />
                <Route path="/Burgerking/brandstory/whopper/ingredient" component={Ingredient} />
                <Route path="/Burgerking/brandstory/whopper/trust" component={Trust} />
                <Route path="/Burgerking/brandstory/comm/ad" component={Ad} />
                <Route path="/Burgerking/brandstory/comm/awards" component={Awards} />
                <Route path="/Burgerking/brandstory/comm/newproduct" component={NewProduct} />
                <Route path="/Burgerking/brandstory/comm/esg" component={ESG} />
            </div>
        </div>
    );
}

export default BrandStory;