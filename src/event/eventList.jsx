import React from "react";
import styled from './event.css';
import { Route, Link } from 'react-router-dom';

import EventDB from '../db/event.json';

function EventList({ match }) {
    const { category } = match.params;
    let status;
    if(category == "ing") {
        status = true;
    }else if(category == "end") {
        status = false;
    }
    const eventList = EventDB.event.filter(event => (
        event.ing == status
    ));

    return(
        <div className="list_con">
            <ul>
                {category == "all" ? 
                    EventDB.event.map((id) => (
                        <li>
                            <Link to={id.url}  key={id.id}>
                                <div className="listImg"><img src={id.img} alt={id.title} /></div>
                                <div className="listDate">
                                    <p>{id.term}</p>
                                </div>
                            </Link>
                        </li>
                    )) :
                    eventList.map((event) => (
                        <li>
                            <Link to={event.id}  key={event.id}>
                                <div className="listImg"><img src={event.img} alt={event.title} /></div>
                                <div className="listDate">
                                    <p>{event.term}</p>
                                </div>
                            </Link>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;