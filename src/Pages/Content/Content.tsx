import s from "./Content.module.css"
import {ImagePage} from "../ImagePage/ImagePage";
import React from "react";
import {useAppSelector} from "../App/hooks";

type ContentPropsType = {
    openModal: () => void
}
export const Content = (props: ContentPropsType) => {
    const images = useAppSelector(state => state.app.images)
    return (
        <div className={s.images_container}>
            {images && images.map(el => <ImagePage key={el.id} openModal={props.openModal} id={el.id} url={el.url}/>)}
        </div>
    )
}
