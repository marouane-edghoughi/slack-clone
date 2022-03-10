import React from 'react'
import { useSelector } from 'react-redux';
import { selectRoom } from '../../features/appSlice';

import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    RoomName,
    StartIcon,
    DetailsIcon,
    ChatMessages
} from './Chat.styled';

import ChatBox from './ChatBox';

function Chat() {

    const roomId = useSelector(selectRoom);
    
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <RoomName>#Room-Name</RoomName>
                    <StartIcon />
                </HeaderLeft>

                <HeaderRight>
                    <DetailsIcon />
                    <p>Details</p>
                </HeaderRight>
            </Header>

            <ChatMessages>
                {/* List out all the messages */}
            </ChatMessages>

            <ChatBox
                // channelName={}
                channelId={roomId}
            />
        </ChatContainer> 
    );
}

export default Chat