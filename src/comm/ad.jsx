import React from "react";
import './ad.css';
import { Route, Link } from 'react-router-dom';

function Ad() {
    return(
        <div>
            <div className="btn_con">
                <ul>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/ad" className="btn_link">
                            광고(TV/Digital)
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/awards" className="btn_link">
                            수상내역
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/newproduct" className="btn_link">
                            신제품
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/esg" className="btn_link">
                            ESG
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="container">
                <h2>크리스피 도넛 치킨버거</h2>
                <div>
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/nmx2OiWEJBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className="movie_list">
                    {/* <div className="movie_tab">
                        <ul>
                            <li className="on"><Link to="/brandstory/comm/ad/all" className="tab">ALL</Link></li>
                            <li><Link to="/brandstory/comm/ad/1" className="tab">2022~2020</Link></li>
                            <li><Link to="/brandstory/comm/ad/2" className="tab">2019~2015</Link></li>
                            <li><Link to="/brandstory/comm/ad/3" className="tab">2014~</Link></li>
                        </ul>
                    </div> */}

                    {/* <Route path="/brandstory/comm/ad/:tab" component={AdList} /> */}
                    {/* <ul className="movie_list_con">
                        {
                            AdDB.ad.map((id) => (
                                <li>
                                    <div><img src={id.img} alt={id.title} /></div>
                                    <p>{id.title}</p>
                                </li>  
                            ))
                        }
                    </ul> */}
                </div>
            </div>
        </div>
    );
}

export default Ad;