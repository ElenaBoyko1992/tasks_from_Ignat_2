import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageItem}>
            <div className={s.messageItem__avatar}>
                <img className={s.messageItem__img} src={props.avatar} alt=""/>
            </div>
            <div className={`${s.messageItem__message} ${s.message}`}>
                <div className={s.message__name}>{props.name}</div>
                <div className={s.message__text}>{props.message}</div>
                <div className={s.message__date}>{props.time}</div>
                <div className={s.corner}></div>
                <div className={s.corner2}></div>
            </div>
        </div>
    )
}

export default Message
