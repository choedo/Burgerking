import React from "react";
import styled from './event.module.css';
import { Route, Link } from 'react-router-dom';

import EventDB from '../db/event.json';

function Test({ match }) {
    const { key } = match.params;
    const url = EventDB[key];

    return(
        <div className={styled.list_con}>
            <ul>
                {EventDB.event.map((id) => (
                    <li key={id.id}>
                        <Link to="/event/detail/">
                            <div className={styled.listImg}><img src={id.img} alt={id.title} /></div>
                            <div className={styled.listDate}>
                                <p>{id.term}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Test;