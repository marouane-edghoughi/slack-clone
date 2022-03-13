import React from 'react'

import {
    MessageContainer,
    UserImage,
    MessageData,
    UserName,
    MessageDate,
    MessageText
} from './Chat.styled';

function Message(props) {
    return (
        <MessageContainer>
            <UserImage
                src={props.userImage}
            />
            <MessageData>
                <UserName>{props.user}</UserName>
                <MessageDate>{new Date(props.timestamp?.toDate()).toUTCString()}</MessageDate>
                <MessageText>{props.message}</MessageText>
            </MessageData>
        </MessageContainer>
    )
}

export default Message