import React, { useState } from 'react';

import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

import { db } from '../../firebase';

import {
    ChatBoxContainer,
} from './Chat.styled';

function ChatBox({channelName, channelId, chatRef}) {

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
            userImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-d231d.appspot.com/o/photo.jpg?alt=media&token=cc71e48a-7acd-4b8a-b2ed-dd98e915ccec'
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