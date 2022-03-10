import React, { useState } from 'react';

import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '../../firebase';

import {
    ChatBoxContainer,
} from './Chat.styled';

function ChatBox({channelName, channelId}) {

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
            user: 'Marouane Edghoughi',
        }).then(() => {
            setMsg('');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <ChatBoxContainer>
            <form>
                <input
                    placeholder={'Message #Room'}
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