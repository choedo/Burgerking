import React from "react";
import styled from './awards.module.css';
import { Route, Link } from 'react-router-dom';

function Awards() {
    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/ad" className={styled.btn_link}>
                            광고(TV/Digital)
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/awards" className={styled.btn_link}>
                            수상내역
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/newproduct" className={styled.btn_link}>
                            신제품
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/comm/esg" className={styled.btn_link}>
                            ESG
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styled.container}>
                <div><img src={require('./images/awards_title.png')} alt="" /></div>

                <div style={{marginTop: '50px'}} className={styled.awards_box}>
                    <ul>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_f.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2021</h3>
                                <ul>
                                    <li>
                                        <h5>2021 코리아 프랜차이즈 어워즈</h5>
                                        <p>포브스코리아</p>
                                    </li>
                                    <li>
                                        <h5>클로벌 지속가능기업 100</h5>
                                        <p>UN SDGs</p>
                                    </li>
                                    <li>
                                        <h5>프리미엄브랜드지수(KS-PBI) 패스트푸드</h5>
                                        <p>한국표준협회(KSA)</p>
                                    </li>
                                    <li>
                                        <h5>매경 100대 프랜차이즈 브랜드</h5>
                                        <p>매일경제신문사</p>
                                    </li>
                                    <li>
                                        <h5>한국에서 가장 존경받는 기업 1위</h5>
                                        <p>한국능률협회컨성팅(KMAC)</p>
                                    </li>
                                    <li>
                                        <h5>DEVELOPER OF THE YEAR 2021</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_ksa.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2020</h3>
                                <ul>
                                    <li>
                                        <h5>프리미엄브랜드지수(KS-PBI) 패스트푸드 부문 1위</h5>
                                        <p>한국표준협회(KSA)</p>
                                    </li>
                                    <li>
                                        <h5>2020 에피 어워드(Effie Award) 코리아 식품 부문 은상</h5>
                                        <p>Effie</p>
                                    </li>
                                    <li>
                                        <h5>한국에서 가장 존경받는 기업 1위</h5>
                                        <p>한국능률협회컨설팅(KMAC)</p>
                                    </li>
                                    <li>
                                        <h5>2019년 서울영상광고제 TV 부문 동상 수상</h5>
                                        <p>서울영상광고제 집행위원회</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_tro.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2019</h3>
                                <ul>
                                    <li>
                                        <h5>서울 크리에이티브 페스티벌 동상</h5>
                                        <p>서울영상광고제 집행위원회</p>
                                    </li>
                                    <li>
                                        <h5>MARKETER OF THE YEAR 2019</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_kaa.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2018</h3>
                                <ul>
                                    <li>
                                        <h5>제26회 국민이 선택한 좋은 광고상 OOH부문 좋은 광고상</h5>
                                        <p>한국광고주협회</p>
                                    </li>
                                    <li>
                                        <h5>웹어워드 코리아 프로모션 통합 대상</h5>
                                        <p>한국인터넷전문가협회(KIPFA)</p>
                                    </li>
                                    <li>
                                        <h5>MARKETER OF THE YEAR 2018</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_tro.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2017</h3>
                                <ul>
                                    <li>
                                        <h5>2016년 서울영상광고제 TV 부문 동상 수상</h5>
                                        <p>서울영상광고제 집행위원회</p>
                                    </li>
                                    <li>
                                        <h5>2017 칸 국제광고제 미디어부문 은상</h5>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_kaa.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2016</h3>
                                <ul>
                                    <li>
                                        <h5>제24회 국민이 선택한 좋은 광고상 문체부 장관상</h5>
                                        <p>한국광고주협회</p>
                                    </li>
                                    <li>
                                        <h5>MARKETER OF THE YEAR 2016</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_kmac.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2015</h3>
                                <ul>
                                    <li>
                                        <h5>한국 산업 서비스 품질지수 고객접점 부문 1위</h5>
                                        <p>한국능률협회컨설팅(KMAC)</p>
                                    </li>
                                    <li>
                                        <h5>DEVELOPER OF THE YEAR 2015</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_bkr.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2014</h3>
                                <ul>
                                    <li>
                                        <h5>FRANCHISEE OF THE YEAR 2014</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_bkr.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2012</h3>
                                <ul>
                                    <li>
                                        <h5>DEVELOPER OF THE YEAR 2012</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_kmac.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2011</h3>
                                <ul>
                                    <li>
                                        <h5>한국서비스품질지수 패스트푸드 부문 1위</h5>
                                        <p>한국능률협회컨설팅(KMAC)</p>
                                    </li>
                                    <li>
                                        <h5>DEVELOPER OF THE YEAR 2011</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                    <li>
                                        <h5>FRANCHISEE OF THE YEAR 2011</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styled.img_box}><img src={require('./images/awards_bkr.png')} alt="" /></div>
                            <div className={styled.text_box}>
                                <h3>2010</h3>
                                <ul>
                                    <li>
                                        <h5>FRANCHISEE OF THE YEAR 2010</h5>
                                        <p>BURGER KING GLOBAL</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Awards;