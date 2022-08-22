import {useAppDispatch} from "../App/hooks";
import {getCurrentImageTC} from "../../reducer/app-reducer";
import s from './ImagePage.module.css'
import {memo} from "react";

type propsType = {
    id: number,
    url: string
    openModal: () => void
}
export const ImagePage =memo ((props: propsType) => {
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(getCurrentImageTC(props.id))
        props.openModal()

    }

    return (

        <div key={props.id} className={s.image_container}>
            <img alt={''} className={s.image} onClick={onClickHandler} src={props.url}/>
            <div>
                <span className={s.id_text}>Id:{props.id}</span>
            </div>
        </div>


    )
}
)
