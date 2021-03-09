import React from 'react'
import AlternativeMessage from './AlternativeMessage'
import Message from './Message'

export type messageDataType = {
    avatar: string,
    name: string,
    message: string
    time: string
}
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '20:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            should work (должно работать)

            <Message avatar={messageData.avatar}
                     name={messageData.name}
                     message={messageData.message}
                     time={messageData.time}
            />
            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>
        </div>
    )
}

export default HW1
