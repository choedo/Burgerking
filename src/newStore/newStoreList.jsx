import React from "react";
import { Route, Link } from "react-router-dom";
import './newStore.css';

import NewstoreDB from '../db/newstore.json';

function NewStoreList() {
    return(
        <div className="list_con">
            <ul>
                {NewstoreDB.newstore.map((id) => (
                    <li key={id.id}>
                        <Link to={id.url}>
                            <div className="listImg"><img src={id.img} alt={id.title} /></div>
                            <div className="listDate">
                                <p>{id.term}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewStoreList;