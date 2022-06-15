import React from "react";
import './newStore.css';
import { Route, Link } from 'react-router-dom';

function NewStoreBtn() {
    return(
        <div className="newStore_btn_con">
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

export default NewStoreBtn;