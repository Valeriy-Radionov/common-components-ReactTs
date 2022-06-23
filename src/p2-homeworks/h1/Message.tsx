import React from 'react'
import s from './Message.module.css'

type Data = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: Data) {
    return (
        <div className={s.wrapper}>
            <div className={s.message_body}>
                <img className={s.avatar_image} src={props.avatar} alt="avatar"/>
                {/*//message*/}
                <div className={s.message}>
                    {/*//NAME*/}
                    <div className={s.user_name}>{props.name}</div>
                    {/*//MESSAGE*/}
                    <div className={s.text_message}>{props.message}</div>
                    {/*//TIME*/}
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
