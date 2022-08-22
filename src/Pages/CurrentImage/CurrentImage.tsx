import {sendCommentTC} from "../../reducer/app-reducer";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../App/hooks";
import s from './CurrentImage.module.css'

export const CurrentImage = () => {
    const status = useAppSelector(state => state.app.status)
    const [value, setValue] = useState('')
    const currentImage = useAppSelector(state => state.app.currentImage)
    const dispatch = useAppDispatch()
    return (

        <div>
            {}
            {currentImage.url && <div className={s.wrapper}>
              <div className={s.imgContainer}>
                  {status === 'loading' ? <Loader/> : <img alt={''} src={currentImage.url}/>}
              </div>
              <div className={s.comments_list}>{currentImage.comments.map(el => {
                  return (
                      <div className={s.comments} key={el.id}>
                          {el.text}
                      </div>
                  )
              })}

                <textarea className={s.comments_form} value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
                <div className={s.comments__tip}>
                  Write a few sentences about photo.
                </div>
                <div className={s.comments_btn_wrapper}>
                  <button className={s.comments_saveBtn}
                          onClick={() => {
                              currentImage.id && dispatch(sendCommentTC(currentImage.id, value))
                              setValue('')
                          }
                          }>Save
                  </button>
                </div>


              </div>
            </div>}
        </div>
    )
}
const Loader = () => {
    return (
        <div className={s.box}>
            <span className={s.spinner}></span>
        </div>


    )
}
