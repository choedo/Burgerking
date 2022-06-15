import React, { useState } from "react";
import './login.css';
import { Route, Link, useHistory } from 'react-router-dom';

function Login() {
    const [userId, setUserId] = useState('');
    const [userNum, setUserNum] = useState('');

    const onChangeId = (e) => {
        setUserId(e.target.value);
    }
    const onChangeNum = (e) => {
        setUserNum(e.target.value);
    }

    // 아이디 입력 값 초기화
    const onResetId = () => {
        setUserId('');
    }
    // 비회원 주문번호 입력 값 초기화
    const onResetNum = () => {
        setUserNum('');
    }

    
    // 비밀번호 값 보이게
    const [pwStatus, setPwStatus] = useState("password");
    const onChangPw = () => {
        if(pwStatus == "password") {
            setPwStatus("text");
        }else {
            setPwStatus("password");
        }
    }
    // 주문비밀번호 값 보이게
    const [numStatus, setNumPwStatus] = useState("password");
    const onChangNum = () => {
        if(numStatus == "password") {
            setNumPwStatus("text");
        }else {
            setNumPwStatus("password");
        }
    }

    // 비회원 주문 선택 이벤트
    
    const showOrder = () => {
        const box1 = document.querySelector('.guest_order');
        const box2 = document.querySelector('.guest_order_history');
        const guestBtn = document.querySelectorAll('.guest_btn ul li');
        
        box1.style.display = "block";
        box2.style.display = "none";

        guestBtn[0].classList.add("on");
        guestBtn[1].classList.remove("on");
    }
    const showOrderHistory = () => {
        const box1 = document.querySelector('.guest_order');
        const box2 = document.querySelector('.guest_order_history');
        const guestBtn = document.querySelectorAll('.guest_btn ul li');

        box1.style.display = "none";
        box2.style.display = "block";

        guestBtn[0].classList.remove("on");
        guestBtn[1].classList.add("on");
    }

    // 체크박스 체크
    const [saveId, setSaveId] = useState(true);
    const [autoLogin, setAutoLogin] = useState(true);
    const onIdSave = e => {
        e.preventDefault();
        
        if(saveId == false) {
            document.querySelectorAll('.check label')[0].classList.remove('on');
        }else {
            document.querySelectorAll('.check label')[0].classList.add('on');
        }
        setSaveId(!saveId);
    }
    const onAutoLogin = e => {
        e.preventDefault();
        
        if(autoLogin == false) {
            document.querySelectorAll('.check label')[1].classList.remove('on');
        }else {
            document.querySelectorAll('.check label')[1].classList.add('on');
        }
        setAutoLogin(!autoLogin);
    }


    const ready = () => {
        alert('준비중입니다.');
    }

    return(
        <div>
            {/* 회원 */}
            <div className="member">
                <div className="member_in">
                    <div className="member_title">
                        <em>YOUR WAY</em><br/>
                        <strong>어서오세요! 버거킹입니다.</strong>
                    </div>
                    <div className="input_form">
                        {/* 일반로그인 */}
                        <div className="normal_login">
                            <p>일반 로그인</p>
                            <div className="login_input">
                                <div className="input_box">
                                    <input type="text" name="id" value={userId} onChange={onChangeId} placeholder="아이디 (이메일)" />
                                    <button className="input_x" onClick={onResetId}></button>
                                </div>
                                <div className="input_box">
                                    <input type={pwStatus} name="pw" placeholder="비밀번호" />
                                    <button className="input_view" onClick={onChangPw}></button>
                                </div>
                                <div className="check">
                                    <label onClick={onIdSave}><input type="checkbox" /><span>아이디 저장</span></label>
                                    <label onClick={onAutoLogin}><input type="checkbox" /><span>자동 로그인</span></label>
                                </div>
                                <div className="btn">
                                    <div><button onClick={ready}>로그인</button></div>
                                    <div><Link to="/join" className="join_btn">회원가입</Link></div>
                                </div>
                                <div className="search">
                                    <ul>
                                        <li onClick={ready}><Link to="/login" className="searchBtn">아이디 찾기</Link></li>
                                        <li onClick={ready}><Link to="/login" className="searchBtn">비밀번호 찾기</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* 간편 로그인 */}
                        <div className="easy_login">
                            <p>간편로그인</p>
                            <ul>
                                <li onClick={ready}><a href="#"><span>네이버 로그인</span></a></li>
                                <li onClick={ready}><a href="#"><span>카카오 로그인</span></a></li>
                                <li onClick={ready}><a href="#"><span>애플 로그인</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 비회원 */}
            <div className="guest">
                <div className="guest_in">
                    <div className="guest_btn">
                        <ul>
                            <li className="on"><button onClick={showOrder}><span>비회원 주문</span></button></li>
                            <li><button onClick={showOrderHistory}><span>비회원 주문내역</span></button></li>
                        </ul>
                    </div>

                    <div>
                        {/* 비회원 주문 */}
                        <div className="guest_order">
                            <div className="guest_box">
                                <p>회원가입 없이 비회원으로 주문이 가능합니다.</p>
                            </div>

                            <div className="guest_box_btn">
                                <p onClick={ready}><Link to="/login" className="guestBtn">비회원 주문</Link></p>
                            </div>
                        </div>
                        {/* 비회원 주문내역 */}
                        <div className="guest_order_history" style={{display: "none"}}>
                            <div className="guest_box">
                                <div className="guest_input_box">
                                    <p>주문번호</p>
                                    <div>
                                        <input type="text" placeholder="주문번호 입력" value={userNum} onChange={onChangeNum} />
                                        <button className="input_x" onClick={onResetNum}></button>
                                    </div>
                                </div>
                                <div className="guest_input_box">
                                    <p>비밀번호</p>
                                    <div>
                                        <input type={numStatus} placeholder="비밀번호" />
                                        <button className="input_view" onClick={onChangNum}></button>
                                    </div>
                                </div>
                            </div>

                            <div className="guest_box_btn">
                                <p onClick={ready}><Link to="/login" className="guestBtn">조회하기</Link></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;