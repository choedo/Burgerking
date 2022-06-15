import React from "react";
import styled from './grilled.module.css';
import { Route, Link } from 'react-router-dom';

function Grilled() {
    return(
        <div>
            <div className={styled.btn_con}>
                <ul>
                    <li>
                        <Link to="/Burgerking/brandstory/whopper/real" className={styled.btn_link}>
                            Real Whopper
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/whopper/grilled" className={styled.btn_link}>
                            FLAME GRILLED
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/whopper/ingredient" className={styled.btn_link}>
                            신선한 재료
                        </Link>
                    </li>
                    <li>
                        <Link to="/Burgerking/brandstory/whopper/trust" className={styled.btn_link}>
                            Trust in Taste
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styled.container}>
                <div className={styled.grilled_in}>
                    <div><img src={require('./images/txt_whopper.gif')} alt="" /></div>
                    <p>
                        전 세계적으로 사랑 받는 WHOPPER는 불에 직접 구운 100% 순쇠고기 패티 위에 
                        신선한 토마토, 양상추, 양파, 마요네즈, 케첩, 상큼한 피클을 올린 버거킹의 대표 제품입니다.
                    </p>
                </div>
            </div>

            <div className={styled.grilled_bottom}>
                <div className={styled.grilled_bottom_in}>
                    <div><img src={require('./images/txt_flame_grilled.png')} alt="" /></div>
                    <p>
                        신선한 토마토, 양상추, 양파, 마요네즈, 케첩, 상큼한 피클을 올린 버거킹의 대표 제품입니다.
                        버거킹은 1954년 이후로 고기를 팬에 굽는 일반 QSR과는 달리 고기를 직접 불에 구워 조리하는 직화 방식(Flame-Grilled) 으로 
                        담백하고 풍부한 맛과 향, 그리고 정통 햄버거의 풍미를 선보이고 있습니다. 이 과정에서 불필요한 기름기는 제거되고 
                        고기의 육즙은 그대로 보존되어, 고기의 독특한 맛과 향을 느낄 수 있습니다. 불에 직접 구워 담백하고 풍부한 맛! 
                        버거킹의 햄버거만이 드릴 수 있는 특별한 맛입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Grilled;