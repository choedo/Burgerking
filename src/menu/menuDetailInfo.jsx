import React, { useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import styled from './menuDetail.module.css';
import Modal from "./modal";

function MenuDetailInfo() {
    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const [modalOpen, setModalOpen] = useState(false);
    const body = document.querySelector('body');

    const openModal = () => {
        setModalOpen(true);
        body.classList.add('modalOn');
    }
    const closeModal = () => {
        setModalOpen(false);
        body.classList.remove('modalOn');
    }

    return(
        <div className={styled.detailInfo}>
            <div className={styled.detailInfo_in}>
                <div className={styled.detail_back}>
                    <button className={styled.detail_back_link} onClick={goBack}>메뉴 목록으로 돌아가기</button>
                </div>

                <div className={styled.detail_allergy}>
                    <button id="modalBtn" onClick={openModal}>원산지, 영양성분, 알레르기 유발성분</button>
                    <Modal open={modalOpen} close={closeModal} />
                </div>
            </div>
        </div>
    );
}

export default MenuDetailInfo;