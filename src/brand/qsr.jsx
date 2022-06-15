import React from "react";
import styled from './qsr.module.css';
import { Route, Link } from 'react-router-dom';

function QSR() {
    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/brandstory/brand/story" className={styled.btn_link}>
                            BRAND philosophy
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/brand/qsr" className={styled.btn_link}>
                            SMART QSR
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styled.container}>
                <div className={styled.qsr_con01}>
                    <p>
                        프리미엄 QSR 브랜드 버거킹은 ‘가장 스마트한 QSR(Smartest QSR) 브랜드’를 목표로 
                        주문과 결제, 멤버십 프로그램 등 다양한 고객 혜택 제공을 위한 디지털 채널 경쟁력을 바탕으로 
                        현재 한국에서 가장 빠르게 성장하고 있습니다.
                    </p>
                </div>

                <div className={styled.qsr_con02}>
                    <h3>APP</h3>
                    <div style={{width: '760px', margin: 'auto'}}>
                        <iframe width="760" height="426" src="https://www.youtube.com/embed/WGrYm1jb09k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <p>
                        편리한 배달 메뉴의 주문과 결제 서비스인 ‘딜리버리’, 매장 방문 전 주문이 가능한 ‘킹오더’와 
                        멤버십 프로그램을 통하여 최상의 고객 경험을 제공하고 있습니다. 누적 다운로드 수 약 750만명(2021년 12월 기준)을 달성하였으며, 
                        월간 앱 활성이용자수 140만명(2021년 12월 기준)을 기록하는 등 동종QSR업계에서 압도적으로 높은 수준을 유지하고 있습니다.
                    </p>
                </div>

                <div className={styled.qsr_con03}>
                    <h3>MEMBERSHIP</h3>
                    <div>
                        <img src={require('./images/img_qsr01.jpg')} alt="qsr 이미지1" style={{width: '100%'}} />
                    </div>
                    <p>
                        2021년 맞춤화된 고객 혜택 제공을 목표로 ‘버거킹 멤버십’을 런칭하였습니다. 
                        약 240만 명(2021년 12월 기준)의 버거킹 회원을 모두 만족시킬 수 있도록 고객 편의성과 혜택, 
                        맞춤형 정보 제공 서비스를 제공하고 있습니다.
                    </p>
                </div>

                <div className={styled.qsr_con04}>
                    <h3>KIOSK</h3>
                    <div>
                        <img src={require('./images/img_qsr02.png')} alt="qsr 이미지2" style={{width: '100%'}} />
                    </div>
                    <p>
                        22016년 처음 무인 단말 시스템인 키오스크를 도입 하였으며, 현재는 전국 버거킹 매장의 95%가 키오스크를 보유하고 있습니다 
                        이는 전세계 버거킹 진출국 중에서도 최상위 수준에 해당하는 수준으로 길었던 매장 주문 대기 시간을 대폭 단축시켰습니다. 
                        많은 고객들이 더욱 빠르고 편리하게 버거킹의 프리미엄 가치를 경험할 수 있도록 키오스크는 지속적으로 업데이트 되고 있습니다.
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default QSR;