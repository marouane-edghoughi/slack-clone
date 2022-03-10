import React from 'react'

import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase';

import { 
  MdInsertComment,
  MdNotifications,
  MdSave,
  MdApps,
  MdInsertDriveFile,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdAdd
} from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';

import {
  SidebarContainer,  
  SidebarHeader,
  SidebarInfo,
  OnlineStatusIcon,
  CreateIcon,

} from './Sidebar.styled';

import SidebarOption from './SidebarOption';

function Sidebar() {

  const [channels, loading, error] = useCollection(
    collection(db, 'rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(channels);

  return (
    <>

      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h2>Slack</h2>
            <h3>
              <OnlineStatusIcon />
              Marouane Edghoughi
            </h3>
            <CreateIcon />
          </SidebarInfo>
        </SidebarHeader>

        <SidebarOption Icon={MdInsertComment} title='Threads' />
        <SidebarOption Icon={MdNotifications} title='Mentions & Reactions' />
        <SidebarOption Icon={MdSave} title='Saved items' />
        <SidebarOption Icon={FiBookmark} title='Channel browser' />
        <SidebarOption Icon={FaUsers} title='People & user groups' />
        <SidebarOption Icon={MdApps} title='Apps' />
        <SidebarOption Icon={MdInsertDriveFile} title='File browser' />
        <SidebarOption Icon={MdOutlineKeyboardArrowUp} title='Show less' />
        <hr />
        <SidebarOption Icon={MdOutlineKeyboardArrowDown} title='Channels' />
        <hr />
        <SidebarOption Icon={MdAdd} addChannelOption title='Add Channel' />

        {channels?.docs.map(channel => (
          <SidebarOption
            key={channel.id}
            id={channel.id}
            title={channel.data().name}
          />
        ))}
      </SidebarContainer>
    </>
  )
}

export default Sidebar