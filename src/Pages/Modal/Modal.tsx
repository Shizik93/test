import React, {memo, MouseEvent, ReactNode} from "react";
import s from './Modal.module.css'

type ModalType =  {
    active:boolean | undefined
    setActive:(active:boolean) => void
    children:ReactNode
}



export const Modal =memo( ({active,setActive,children}:ModalType) => {
    const modalHandler = (e:MouseEvent) => {
        e.stopPropagation();
    }

    return(
        <div className={active ? s.modal_active: s.modal} onClick={ () => setActive(false)}>
            <div className={active ? s.modal_Content_active : s.modal_Content} onClick={modalHandler}>
                {children}
            </div>
        </div>
    )
}
)
