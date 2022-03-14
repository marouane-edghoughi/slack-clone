import React, { useEffect, useRef } from 'react'

import { useSelector } from 'react-redux';
import { selectRoom } from '../../features/appSlice';
import { 
    useDocument,
    useCollection
} from 'react-firebase-hooks/firestore';

import WelcomeToSlack from '../Welcome/WelcomeToSlack';

import {
    ChatContainer,
    Header,
    HeaderLeft,
    HeaderRight,
    RoomName,
    StartIcon,
    DetailsIcon,
    ChatMessages,
    ChatBottom
} from './Chat.styled';

import Message from './Message';

import ChatBox from './ChatBox';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

function Chat() {

    const roomId = useSelector(selectRoom);

    const chatRef = useRef();

    const [roomDetails] = useDocument(
        roomId && doc(db, 'rooms', roomId),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const [roomMessages, loading] = useCollection(
        roomId &&
            query(
                collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc') 
            )
    );
    

    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomId ?
                <>
                    <Header>
                        <HeaderLeft>
                            <RoomName>#{roomDetails?.data().name}</RoomName>
                            <StartIcon />
                        </HeaderLeft>

                        <HeaderRight>
                            <DetailsIcon />
                            <p>Details</p>
                        </HeaderRight>
                    </Header>

                    <ChatMessages>
                        {roomMessages?.docs.map(doc => {
                            const { message, timestamp, user, userImage } = doc.data();

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                            );
                        })}

                        <ChatBottom
                            ref={chatRef}
                        />
                    </ChatMessages>

                    <ChatBox
                        chatRef={chatRef}
                        channelName={roomDetails?.data().name}
                        channelId={roomId}
                    />
                </>
                    :
                <WelcomeToSlack />
            }
        </ChatContainer> 
    );
}

export default Chat