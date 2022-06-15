import React from "react";
import './newStore.css';
import { Route, Link } from 'react-router-dom';

import NewStoreBtn from "./newStoreBtn";
import NewStoreList from "./newStoreList";

function NewStore() {
    return(
        <div>
            <div className="menu_link">
                <div>
                    <h2>신규매장</h2>
                </div>
            </div>

            <NewStoreBtn />
            <NewStoreList />
        </div>
    );
}

export default NewStore;