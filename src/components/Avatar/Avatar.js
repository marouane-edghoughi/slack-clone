import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

import {
    AvatarContainer,
    AvatarImage
} from './Avatar.styled';

function Avatar() {

    const [user] = useAuthState(auth);

    const avatarImage = 'https://firebasestorage.googleapis.com/v0/b/slack-clone-2022.appspot.com/o/images%2FuserImage.png?alt=media&token=ed79470e-fcc4-4a91-a574-b8f3fa05d514';

    return (
        <AvatarContainer>
            <AvatarImage
                src={user ? (
                    user?.photoURL
                ) : (
                    avatarImage
                )}
            />
        </AvatarContainer>
    )
}

export default Avatar;