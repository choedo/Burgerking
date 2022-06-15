import React from "react";
import styled from './ingredient.module.css';
import { Route, Link } from 'react-router-dom';

function Ingredient() {
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
                <div className={styled.ingredient_in}>
                    <ul>
                        <li>
                            <div></div>
                            <h5><img src={require('./images/ingredient_beef_txt.gif')} alt="" /></h5>
                            <p>
                                버거킹의 소고기 패티는 100% 순쇠고기로 
                                만들어졌으며, 어떠한 방부제나 첨가물이 들어가지 않습니다.
                            </p>
                        </li>
                        <li>
                            <div></div>
                            <h5><img src={require('./images/ingredient_vegetable_txt.gif')} alt="" /></h5>
                            <p>
                                버거킹의 모든 햄버거에는 엄격한 검수 과정을 통해 입고된 신선한 야채가 사용됩니다. 
                                항상 신선함을 추구하는 가치로, 매일 매장에서 토마토를 직접 준비합니다.
                            </p>
                        </li>
                        <li>
                            <div></div>
                            <h5><img src={require('./images/ingredient_pickle_txt.gif')} alt="" /></h5>
                            <p>
                                풍부하고 신선한 야채와 어우러진 고소한 마요네즈와 새콤달콤한 케첩은 정통 햄버거 특유의 풍미를 제공합니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styled.ingredient_bottom}>
                <div className={styled.ingredient_bottom_in}>
                    <div className={styled.ingredient_tilte}>
                        <span>신선한</span>
                        <span>재료와</span>
                        <span>철저한</span>
                        <span>위생관리</span>
                    </div>
                    <div className={styled.ingredient_txt}>
                        <dl className={styled.quality}>
                            <dt><div></div><img src={require('./images/ingredient_txt01.png')} alt="" /></dt>
                            <dd>
                                버거킹은 자체적으로 엄격한 품질 관리 시스템을 운영하고 있습니다. 
                                지속적인 관리를 통해 버거킹 원재료는 최상의 품질을 유지합니다. 
                                올바른 품질 관리가 이루어지고 있는 업체만을 선정하여 원재료를 공급받고, 
                                자재가 매장에 입고될 땐 자체적으로 유통기한 및 제품 온도를 검사하여 기준에 미치지 못하는 제품은 반송합니다. 
                                또한 입고 후에도 보관 제품의 신선도 유지와 변질 방지에 한치의 소홀함도 용납하지 않음으로써, 
                                버거킹을 방문하시는 고객들에게 최상의 맛과 품질을 가진 제품만을 제공합니다.
                            </dd>
                        </dl>
                        <dl className={styled.service}>
                            <dt><div></div><img src={require('./images/ingredient_txt02.png')} alt="" /></dt>
                            <dd>
                                버거킹은 자체적으로 엄격한 품질 관리 시스템을 운영하고 있습니다. 
                                지속적인 관리를 통해 버거킹 원재료는 최상의 품질을 유지합니다. 
                                올바른 품질 관리가 이루어지고 있는 업체만을 선정하여 원재료를 공급받고, 
                                자재가 매장에 입고될 땐 자체적으로 유통기한 및 제품 온도를 검사하여 기준에 미치지 못하는 제품은 반송합니다. 
                                또한 입고 후에도 보관 제품의 신선도 유지와 변질 방지에 한치의 소홀함도 용납하지 않음으로써, 
                                버거킹을 방문하시는 고객들에게 최상의 맛과 품질을 가진 제품만을 제공합니다.
                            </dd>
                        </dl>
                        <dl className={styled.cleaniliness}>
                            <dt><div></div><img src={require('./images/ingredient_txt03.png')} alt="" /></dt>
                            <dd>
                                버거킹은 자체적으로 엄격한 품질 관리 시스템을 운영하고 있습니다. 
                                지속적인 관리를 통해 버거킹 원재료는 최상의 품질을 유지합니다. 
                                올바른 품질 관리가 이루어지고 있는 업체만을 선정하여 원재료를 공급받고, 
                                자재가 매장에 입고될 땐 자체적으로 유통기한 및 제품 온도를 검사하여 기준에 미치지 못하는 제품은 반송합니다. 
                                또한 입고 후에도 보관 제품의 신선도 유지와 변질 방지에 한치의 소홀함도 용납하지 않음으로써, 
                                버거킹을 방문하시는 고객들에게 최상의 맛과 품질을 가진 제품만을 제공합니다.
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ingredient;