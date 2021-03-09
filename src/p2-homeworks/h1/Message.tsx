import React from 'react'
import {messageDataType} from "./HW1";
import s from './Message.module.css'

function Message(props: messageDataType) {
    return (
        <div className={s.dialog}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.notification}>
                <div className={s.messageItem}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
