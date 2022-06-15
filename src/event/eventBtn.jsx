import React from "react";
import './event.css';
import { Route, Link } from 'react-router-dom';

function EventBtn() {
    return(
        <div className="event_btn_con">
            <ul>
                <li>
                    <Link to="/event/all" className="btn_link">
                        이벤트
                    </Link>
                </li>
                <li>
                    <Link to="/newstore" className="btn_link">
                        신규매장
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default EventBtn;