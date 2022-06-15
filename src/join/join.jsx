import React from "react";
import styled from './join.module.css';
import { Route, Link } from 'react-router-dom';

function Join() {
    const ready = () => {
        alert('준비중입니다.');
    }

    return(
        <div>
            {/* 회원 */}
            <div className={styled.member}>
                <div className={styled.member_in}>
                    <div className={styled.member_title}>
                        <h3>어서오세요! 버거킹입니다.</h3>
                        <div style={{marginTop: '30px'}}>
                            <p className={styled.title_wel}><strong>이메일 주소</strong> 혹은 <strong>SNS 계정</strong>으로 간편하게 <span>회원가입</span> 하세요!</p>
                            <p className={styled.title_info}>버거킹 서비스는 만 14세 이상부터 이용 하실 수 있습니다.</p>
                        </div>
                    </div>
                    <div className={styled.input_form}>
                        {/* 일반 회원가입 */}
                        <div className={styled.normal_login}>
                            <p>이메일 회원가입</p>
                            <div>
                                <Link to="/join" className={styled.joinBtn} onClick={ready}>버거킹 회원가입</Link>
                            </div>
                        </div>
                        {/* 간편 회원가입 */}
                        <div className={styled.easy_login}>
                            <p>간편 회원가입</p>
                            <ul>
                                <li onClick={ready}><a href="#"><span>네이버</span></a></li>
                                <li onClick={ready}><a href="#"><span>카카오</span></a></li>
                                <li onClick={ready}><a href="#"><span>애플</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;