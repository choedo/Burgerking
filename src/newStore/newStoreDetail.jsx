import React from "react";
import './newStore.css';
import { Route, Link, useHistory } from 'react-router-dom';

import NewstoreDB from '../db/newstore.json';

function NewStoreDetail({ match }) {
    const { key } = match.params;
    const newStoreList = NewstoreDB.newstore.filter(newstore => (
        newstore.id == key
    ));

    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return(
        <div>
            <div className="menu_link">
                <div>
                    <h2>신규매장</h2>
                </div>
            </div>

            <div className="newStore_detail">
                {newStoreList.map((newstore) => (
                    <>
                        <div className="newStore_detail_header">
                            <h4>{newstore.title}</h4>
                            <p>{newstore.term}</p>
                        </div>
                        <div className="newStore_detail_contents">
                            <div className="event_detail_img">
                                <img src={newstore.detail} alt={newstore.title} />
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

export default NewStoreDetail;