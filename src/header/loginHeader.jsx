import React from "react";
import styled from './loginHeader.module.css';
import { Route, Link } from 'react-router-dom';

function LoginHeader() {
    return(
        <div className={styled.login_header}>
            <div className={styled.login_header_in}>
                <div className={styled.login_top}>
                    <ul>
                        <li><Link to="/Burgerking" className={styled.topLink}>브랜드홈</Link></li>
                        <li><Link to="/Burgerking/login" className={styled.topLink}>로그인</Link></li>
                        <li><Link to="/Burgerking" className={styled.topLink}>고객센터</Link></li>
                    </ul>
                </div>

                <div className={styled.login_menu}>
                    <div className={styled.login_logo}>
                        <Link to="/Burgerking"><h2>버거킹</h2></Link>
                    </div>
                    <div className={styled.login_btn}>
                        <p><Link to="/Burgerking/join" className={styled.joinBtn}>회원가입</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginHeader;