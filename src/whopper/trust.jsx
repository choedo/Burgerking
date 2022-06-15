import React from "react";
import styled from './trust.module.css';
import { Route, Link } from 'react-router-dom';

function Trust() {
    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/brandstory/whopper/real" className={styled.btn_link}>
                            Real Whopper
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/whopper/grilled" className={styled.btn_link}>
                            FLAME GRILLED
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/whopper/ingredient" className={styled.btn_link}>
                            신선한 재료
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandstory/whopper/trust" className={styled.btn_link}>
                            Trust in Taste
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styled.container}>
                <div style={{paddingTop: '70px'}}>
                    <strong>
                        Trust in Taste란? 전세계 버거킹의 고객들이 우리 제품에 만족감을 느낄 수 있도록 하는 활동입니다. 
                        버거킹 코리아는 전세계 버거킹의 가치인 Trust in Taste를 시행하며최고의 제품과 서비스를 제공하기 위해 노력하고 있습니다.
                    </strong>
                </div>

                <div>
                    <ul style={{marginTop: '55px'}}>
                        <li>
                            <div>
                                <div><img src={require('./images/img_trust01.jpg')} alt="" /></div>
                                <h4>Trust in Taste1. 최고의 버거</h4>
                                <p>
                                    WHOPPER의 맛과 퀄리티를 개선하여 고객들이 최고의 맛을 느낄 수 있도록 합니다. 
                                    버거킹의 자산인 Flame-Grilling 방식으로 더욱 특별한 맛을 제공합니다. 
                                    버거킹의 소고기 패티는 100% 순쇠고기로 만들어졌으며, 
                                    어떠한 방부제나 첨가물이 들어가지 않습니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div><img src={require('./images/img_trust02.jpg')} alt="" /></div>
                                <h4>Trust in Taste2. 최고의 치킨</h4>
                                <p>
                                    버거킹은 고객에게 가장 맛이 좋은 치킨 제품을 제공합니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div><img src={require('./images/img_trust03.jpg')} alt="" /></div>
                                <h4>Trust in Taste3. 재료</h4>
                                <p>
                                    버거킹은 고객에게 높은 품질의 제품을 제공하기 위해 재료에 대한 내부 정화 정책을 시행합니다.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <div><img src={require('./images/img_trust04.jpg')} alt="" /></div>
                                <h4>Trust in Taste4. 주방</h4>
                                <p>
                                    버거킹의 주방 배치는 고객에게 신선한 준비 과정을 보여주며 품질 인식을 개선합니다.
                                </p>
                            </div>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
    );
}

export default Trust;