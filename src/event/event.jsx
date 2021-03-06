import React from "react";
import './event.css';
import { Route, Link } from 'react-router-dom';

import EventBtn from "./eventBtn";
import EventList from "./eventList";

function Event() {
    let location;

    window.addEventListener('click', function() {
        location = window.location.pathname;

        let tab = document.querySelectorAll('.eventTopBtn li');

        switch(location) {
            case '/Burgerking/event/all':
                tab[0].classList.add("on");
                tab[1].classList.remove("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/event/ing':
                tab[0].classList.remove("on");
                tab[1].classList.add("on");
                tab[2].classList.remove("on");
                break;
            case '/Burgerking/event/end':
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
                    <h2>이벤트</h2>

                    <ul className="eventTopBtn">
                        <li className="on"><Link to="/Burgerking/event/all" className="category">전체</Link></li> 
                        <li><Link to="/Burgerking/event/ing" className="category">진행중</Link></li>
                        <li><Link to="/Burgerking/event/end" className="category">종료</Link></li>
                    </ul>
                </div>
            </div>

            <EventBtn />
            <Route path="/Burgerking/event/:category" component={EventList} />
        </div>
    );
}

export default Event;