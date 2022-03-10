import React from 'react'
import { useDispatch } from 'react-redux';

import { enterRoom } from '../../features/appSlice';

import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

import {
    SidebarOptionContainer,
    SiedbarOptionChannel
} from './Sidebar.styled';

function SidebarOption({ Icon, title, addChannelOption, id }) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please enter a channel name:');

        if (channelName) {
            addDoc(collection(db, 'rooms'), {
                name: channelName,
            });
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon style={{ fontSize: '1rem', padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SiedbarOptionChannel>
                    <span>#</span> {title}
                </SiedbarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption;