import React from "react";
import { Route, Link } from "react-router-dom";
import styled from './modal.module.css';

import { BsXLg } from "react-icons/bs";

function Modal(props) {
    const { open, close } = props;

    return (
        <div>
            {open ? (
                <div>
                    <div className={styled.modal_bg}></div>
                    <section className={styled.modal}>
                        <header className={styled.modal_header}>
                            <h1>원산지, 영양성분, 알레르기 유발성분</h1><button className="close" onClick={close}><BsXLg className={styled.closeBtn} /></button>
                        </header>

                        <div className={styled.modal_body}>
                            <div className={styled.origin}>
                                <h6>원산지</h6>
                                <ul>
                                    <li>
                                        <strong>쇠고기</strong>
                                        <p>패티 : 뉴질랜드산과 호주산 섞음</p>
                                        <p>소불고기패티 : 호주산과 국내산(한우) 섞음<br />(직화소불고기버거, 직화버섯소불고기버거)</p>
                                    </li>
                                    <li>
                                        <strong>돼지고기</strong>
                                        <p>베이컨 : 미국산</p>
                                    </li>
                                    <li>
                                        <strong>닭고기</strong>
                                        <p>
                                            국내산 : BBQ몬스터, 너겟킹, 디아블로얼티밋도넛킹, (불고기)<br/>
                                            롱치킨버거, 몬스터와퍼, 몬스터X, 불고기몬스터,<br />
                                            스파이시도넛치킨버거, 앵그리너겟킹, 치킨도넛,<br />
                                            크리스피도넛치킨버거, (바비큐)킹치킨버거, 피넛버터비프&<br />
                                            치킨
                                        </p>
                                        <p>외국산 : 바삭킹</p>
                                    </li>
                                </ul>
                            </div>

                            <div className={styled.notify}>
                                <h6>안내사항</h6>
                                <ul>
                                    <li>1. 각 제품은 원재료의 수급 상황에 따라 구성성분이 다소 변경될 수도 있습니다.</li>
                                    <li>2. 표시된 영양성분표는 매장에서 판매되고 있는 모든 제품의 영양성분을 포함하지 못할 수도 있습니다.(신제품/ 특정계정 한시판매 제품/ 일부 매장 특별 판매 제품)</li>
                                    <li>3. 표시된 영양 구성성분은 실험방법 등에 따라 차이가 있을 수도 있습니다.</li>
                                    <li>4. 영양표 속의 모든제품은 표준 용량이며, 실제 제공시 다소 차이가 있을 수 있습니다.</li>
                                    <li>5. 괄호안 %는 1일 영양소 기준치에 대한 비율입니다.</li>
                                    <li>6. 아이스 아메리카노, 아메리카노는 고카페인 함유 음료로 어린이, 임산부, 카페인 민감자는 섭취에 주의해 주시기 바랍니다.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            ) : null}
        </div>
    );
}

export default Modal;