import React from "react";
import styled from './esg.module.css';
import { Route, Link } from 'react-router-dom';

function ESG() {
    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/brandstory/comm/ad" className={styled.btn_link}>
                            광고(TV/Digital)
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/comm/awards" className={styled.btn_link}>
                            수상내역
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/comm/newproduct" className={styled.btn_link}>
                            신제품
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/comm/esg" className={styled.btn_link}>
                            ESG
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styled.container}>
                <div>
                    <p>버거킹은 친환경 캠페인에서부터 고용 창출, 농가 상생에 이르기까지 지속 가능한 사회를 위해 노력합니다,</p>
                </div>
                <div>
                    <h3>환경 보호</h3>
                    <div className={styled.campaign}>
                        <div>
                            <h4>RA(Rainforest Alliance) 인증 커피 원두</h4>
                            <div><img src={require('./images/img_esg01.png')} alt="" /></div>
                            <p>환경을 위한 작은 실천에 동참해주세요!</p>
                        </div>
                        <div>
                            <h4>일회용 컵 사용 줄이기 캠페인</h4>
                            <div><img src={require('./images/img_esg02.png')} alt="" /></div>
                            <p>환경 및 커피 노동자의 안전까지 고려하는 생산하는 커피 원두를 사용하고 있습니다</p>
                        </div>
                    </div>
                    <div style={{paddingBottom: '100px'}}>
                        <h3>사회 공헌</h3>
                        <h4>지역 농가 상생</h4>
                        <p>농가 상생 도모를 위하여 양파, 양상추, 토마토 등의 주 재료를 국내 농가에서 연간 각 1,000t 이상 수급 받아 사용하고 있습니다</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ESG;