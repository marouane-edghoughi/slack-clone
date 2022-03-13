import React from 'react';

import {
    Wrapper,
    WelcomeContainer,
    SlackLogo,
    SlackDescription
} from './WelcomeToSlack.styled';
import { Copyrights } from '../Login/Login.styled';

function WelcomeToSlack() {
    return (
        <Wrapper>
            <WelcomeContainer>
                <h1>Welcome to</h1>
                <SlackLogo
                    src='https://firebasestorage.googleapis.com/v0/b/slack-clone-2022.appspot.com/o/images%2Fslack-logo.svg?alt=media&token=b94f96aa-776f-4363-9c36-8048636eb29b'
                />
                <SlackDescription>Slack brings all your team communication into one place, making it all instantly searchable and available wherever you go.</SlackDescription>
                <Copyrights>
                    &copy; powered by Marouane Edghoughi.
                </Copyrights>
            </WelcomeContainer>
        </Wrapper>
    );
}

export default WelcomeToSlack;