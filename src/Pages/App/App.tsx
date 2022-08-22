import React, {useCallback, useEffect, useState} from 'react';
import s from './App.module.css'
import {getImagesTC} from "../../reducer/app-reducer";
import {useAppDispatch} from "./hooks";
import {Modal} from "../Modal/Modal";
import {CurrentImage} from "../CurrentImage/CurrentImage";
import {Header} from "../Header/Header";
import {Content} from "../Content/Content";


function App() {
    const [activeModal, setActiveModal] = useState(false)
    const dispatch = useAppDispatch()
    const openModal = useCallback(() => {
        setActiveModal(true)
    }, [setActiveModal])
    useEffect(() => {
        dispatch(getImagesTC())
    }, [dispatch])

    return (
        <div className={s.app_wrapper}>
            <Modal active={activeModal} setActive={setActiveModal}><CurrentImage/></Modal>
            <Header/>
            <Content openModal={openModal}/>
        </div>
    );
}

export default App;
