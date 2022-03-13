import React from 'react';

import {
    Wrapper,
    SplashContainer,
    SplashLogo
} from './SplashScreen.styled';

import BeatLoader from 'react-spinners/BeatLoader';

function SplashScreen() {

    return (
        <Wrapper>
            <SplashContainer>
                <SplashLogo
                    src='https://firebasestorage.googleapis.com/v0/b/slack-clone-2022.appspot.com/o/images%2Fslack-icon.svg?alt=media&token=50ec4c78-dfff-4b44-8886-0dbfb677009d'
                />
                <BeatLoader color='var(--slack-purple)' />
            </SplashContainer>
        </Wrapper>
    )
}

export default SplashScreen