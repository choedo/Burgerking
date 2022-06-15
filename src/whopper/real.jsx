import React from "react";
import styled from './real.module.css';
import { Route, Link } from 'react-router-dom';

function Real() {
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
                <div>
                    <img src={require('./images/realwhopper_title.png')} alt="" style={{width: '100%'}} />
                </div>
                <div style={{paddingTop: '10px'}}>
                    <img src={require('./images/realwhopper_list.png')} alt="" style={{width: '100%'}} />
                </div>
                <div style={{paddingBottom: '30px'}}>
                    <p>
                        버거킹은 지난 5년간 끊임없이<br/>
                        더 건강하고 믿을 수 있는 와퍼를 만들기 위해 노력했습니다!
                    </p>

                    <p>
                        와퍼의 모든 재료에 대해 지난 5년간<br/>
                        향료, 색소, 보존제, 첨가제 등의 제품 성분 개선 활동을 통해<br/>
                        더욱 믿을 수 있고, 더욱 맛있는 리얼 와퍼가 탄생하였습니다!
                    </p>

                    <p>
                        직화로 구운 불맛 100% 순쇠고기 패티에<br/>
                        보다 신선한 채소와<br/>
                        믿을 수 있는 재료, 성분들로 완성된<br/>
                        버거킹의 대표 메뉴 와퍼의 변신!
                    </p>

                    <p>
                        지금 버거킹에서 리얼와퍼를 만나보세요!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Real;