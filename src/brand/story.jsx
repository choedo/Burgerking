import React from "react";
import styled from './story.module.css';
import { Route, Link } from 'react-router-dom';

function Story() {
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
                <div className={styled.story_con01}>
                    <div className={styled.story_img}>
                        <img src={require('./images/img_story01.jpg')} alt="스토리 이미지1" />
                    </div>
                    <p>
                        세계 최대 QSR(Quick Service Restaurant) 브랜드 중 하나인 버거킹은 1954년 미국 마이애미에서 
                        James W.McLamore와 David Edgerton에 의해 설립되었습니다. 버거킹은 현재 100개 이상의 국가에서 
                        15,000개 이상의 매장을 운영하고 있습니다. 고기를 팬에 굽는 일반 QSR과는 달리, 
                        버거킹은 고기를 직접 불에 구워 조리하는 직화 방식 (Flame-Broiling)으로 담백하고 풍부한 맛과 향, 
                        그리고 정통 햄버거의 풍미를 선보이고 있습니다. 
                        버거킹의 대표 제품인 와퍼(Whopper)는 100% 순 쇠고기 패티와 함께 양상추, 토마토, 양파, 피클 등 
                        4가지 신선한 야채가 어우러진 풍부한 맛으로 전세계 고객에게 사랑 받고 있습니다.
                    </p>
                </div>

                <div className={styled.story_con02}>
                    <div className={styled.story_img}>
                        <img src={require('./images/img_story02.jpg')} alt="스토리 이미지2" />
                    </div>
                    <div className={styled.story_con02_text}>
                        <h3>버거킹 KOREA</h3>
                        <p>
                            버거킹은 지난 1984년 종로점을 오픈하며 한국에 진출한 이래, 
                            차별화된 제품과 개성 있는 매장 인테리어로 지난 38년간 한국 소비자의 사랑을 받아오고 있습니다. 
                            “가장 맛있는 햄버거를 제공하는 프리미엄 QSR 브랜드”로 자리매김한 버거킹은 현재 전국 440개
                            (2021년 12월 기준) 매장을 운영하고 있습니다. 좋은 품질의 제품(Quality)과 친절한 서비스 (Service) 
                            그리고 청결한 매장(Cleanliness)은 고객 여러분께 더 큰 만족을 드리고자 노력하는 버거킹의 약속이자 
                            가치입니다. 더욱 풍성하고 맛있는 제품과 정성을 다하는 고객 서비스로 여러분께 더욱 가까이 다가가도록 
                            하겠습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Story;