import React, { useState } from 'react';

import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { auth, db } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
    ChatBoxContainer,
} from './Chat.styled';

function ChatBox({channelName, channelId, chatRef}) {

    const [user] = useAuthState(auth);

    const [msg, setMsg] = useState('');

    const sendMessage = (e) => {
        e.preventDefault(); // Prevents the default behaviour -> Refresh

        if (!channelId) {
            return false;
        }

        console.log(channelId);

        addDoc(collection(db, 'rooms', channelId, 'messages'), {
            message: msg,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user?.photoURL
        }).then(() => {
            chatRef.current.scrollIntoView({
                behavior: 'smooth'
            });
            setMsg('');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <ChatBoxContainer>
            <form>
                <input
                    placeholder={'Type message to ' + channelName}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button
                    type='submit'
                    hidden
                    onClick={sendMessage}
                >
                    Send
                </button>
            </form>
        </ChatBoxContainer>
    )
}

export default ChatBox