import s from "./Header.module.css";
import banner from "../../img/Banner image.png";
import avatar from "../../img/Avatar profile.png";
import call from '../../img/call.png'
import msg from '../../img/msg.png'
import React, {memo} from "react";

export const Header =memo( () => {
    return (
        <header className={s.header_container}>
            <div>
                <img alt={'banner'} className={s.banner_img} src={banner}/>
                <div className={s.content}>
                    <div className={s.avatar_name}>
                        <div><img alt={'avatar'} src={avatar}/></div>
                        <div className={s.name}><span>Ricardo Cooper</span></div>
                    </div>

                    <div className={s.button_container}>
                        <button className={s.header__button}>
                            <img className={s.button__ico} src={msg} alt=""/>
                            <p className={s.button__text}>Message</p>
                        </button>
                        <button className={s.header__button}>
                            <img className={s.button__ico} src={call} alt=""/>
                            <p className={s.button__text}>Call</p>
                        </button>
                    </div>
                </div>
            </div>


        </header>

    )
}
)
