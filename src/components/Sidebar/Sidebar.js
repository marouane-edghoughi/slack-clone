import React from 'react'

import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { auth, db } from '../../firebase';

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
  AppInfo,
  OnlineStatusIcon,
  CreateContainer,
  CreateIcon,
  SidebarOptions
} from './Sidebar.styled';

import SidebarOption from './SidebarOption';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {

  const [user] = useAuthState(auth);

  const [channels, loading, error] = useCollection(
    collection(db, 'rooms'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <>

      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <AppInfo>
              <h2>Slack</h2>
              <h3>
                <OnlineStatusIcon />
                {user?.displayName}
              </h3>
            </AppInfo>
            <CreateContainer>
              <CreateIcon />
            </CreateContainer>
          </SidebarInfo>
        </SidebarHeader>

        <SidebarOptions>
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
        </SidebarOptions>
      </SidebarContainer>
    </>
  )
}

export default Sidebar