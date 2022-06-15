import React from "react";
import styled from './event.css';
import { Route, Link, useHistory } from 'react-router-dom';

import EventDB from '../db/event.json';

function EventDetail({ match }) {
    const { key } = match.params;
    const eventList = EventDB.event.filter(event => (
        event.id == key
    ));

    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }
    return(
        <div>
            <div className="menu_link">
                <div>
                    <h2>이벤트</h2>
                </div>
            </div>

            <div className="event_detail">
                {eventList.map((event) => (
                    <>
                        <div className="event_detail_header">
                            <h4>{event.title}</h4>
                            <p>{event.term}</p>
                        </div>
                        <div className="event_detail_contents">
                            <div className="event_detail_img">
                                <img src={event.detail} alt={event.title} />
                            </div>
                            <div className="event_detail_con">
                                <p>1. 행사명 : {event.title}</p>
                                <p>
                                    2. 행사내용<br/><br/>
                                    {event.content}
                                </p>
                                <p>3. 대상제품 : {event.target}</p>
                                <p>4. 행사 기간 : {event.term}</p>
                                <p>5. 행사 시간 : {event.time}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className="listBtn">
                <button onClick={goBack}><span>목록보기</span></button>
            </div>
        </div>
    );
}

export default EventDetail;