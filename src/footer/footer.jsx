import React from "react";
import styled from './footer.module.css';
import { Route, Link } from 'react-router-dom';

import logo from './images/f_logo.png';
import facebook from './images/f_facebook.png';
import instagram from './images/f_instagram.png';

function Footer() {
    return(
        <div>
            <footer>
                <div className={styled.footer_in}>
                    {/* 푸터메뉴 */}
                    <div className={styled.f_menu}>
                        <ul className={styled.f_mn}>
                            <li>
                                <p className={styled.f_main_mn_link}>메뉴소개</p>
                                <ul className={styled.f_sub_mn}>
                                    <li><Link to="/menu/special" className={styled.f_sub_mn_link}>스페셜&할인팩</Link></li>
                                    <li><Link to="/menu/premium" className={styled.f_sub_mn_link}>프리미엄</Link></li>
                                    <li><Link to="/menu/whopper" className={styled.f_sub_mn_link}>와퍼</Link></li>
                                    <li><Link to="/menu/junior" className={styled.f_sub_mn_link}>주니어&버거</Link></li>
                                    <li><Link to="/menu/allday" className={styled.f_sub_mn_link}>올데킹&치킨버거</Link></li>
                                    <li><Link to="/menu/side" className={styled.f_sub_mn_link}>사이드</Link></li>
                                    <li><Link to="/menu/drink" className={styled.f_sub_mn_link}>음료&디저트</Link></li>
                                    <li><Link to="/menu/dogper" className={styled.f_sub_mn_link}>독퍼</Link></li>
                                </ul>
                            </li>
                            <li>
                                <p className={styled.f_main_mn_link}>매장소개</p>
                                <ul className={styled.f_sub_mn}>
                                    <li><Link to="/" className={styled.f_sub_mn_link}>매장찾기</Link></li>
                                </ul>
                            </li>
                            <li>
                                <p className={styled.f_main_mn_link}>이벤트</p>
                                <ul className={styled.f_sub_mn}>
                                    <li><Link to="/event/all" className={styled.f_sub_mn_link}>이벤트</Link></li>
                                </ul>
                            </li>
                            <li>
                                <p className={styled.f_main_mn_link}>브랜드스토리</p>
                                <ul className={styled.f_sub_mn}>
                                    <li><Link to="/brandstory/brand/story" className={styled.f_sub_mn_link}>BRAND</Link></li>
                                    <li><Link to="/brandstory/whopper/real" className={styled.f_sub_mn_link}>WHOPPER</Link></li>
                                    <li><Link to="/brandstory/comm/ad" className={styled.f_sub_mn_link}>COMM.</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* copyright 영역 */}
                    <div className={styled.f_copy}>
                        <div className={styled.copyright}>
                            <h2><img src={logo} alt="로고" /></h2>
                            <p>서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알  |  전화주문 1599-0505</p>
                            <p>사업자 등록번호 101-86-76277  | (주)BKR 대표이사 문영주</p>
                            <p>Copyright 2019 BKR Co., Ltd. All right Reserved</p>
                            <div className={styled.f_sns}>
                                <ul>
                                    <li><a href="https://www.facebook.com/burgerkingkorea"><img src={facebook} alt="페이스북" /></a></li>
                                    <li><a href="https://www.instagram.com/accounts/login/?next=/burgerkingkorea/"><img src={instagram} alt="인스타그램" /></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className={styled.termBox}>
                            <div>
                                <ul>
                                    <li><Link to="/" className={styled.f_terms}>이용약관</Link></li>
                                    <li><Link to="/" className={styled.f_terms}>개인정보취급방침</Link></li>
                                    <li><Link to="/" className={styled.f_terms}>법적고지</Link></li>
                                </ul>
                            </div>
                            <div className={styled.recBox}>
                                <p><Link to="/" className={styled.f_recruitment}>인재채용</Link></p>
                                <p><Link to="/" className={styled.f_recruitment}>가맹점모집</Link></p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;