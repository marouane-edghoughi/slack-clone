import React from 'react';

import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

import {
    Wrapper,
    LoginContainer,
    SlackLogo,
    SignInButton
} from './Login.styled';

function Login() {
    
    const signIn = () => {
        signInWithPopup(auth, provider)
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <Wrapper>
            <LoginContainer>
                <SlackLogo
                    src='https://firebasestorage.googleapis.com/v0/b/slack-clone-2022.appspot.com/o/slack-icon.svg?alt=media&token=a8c45fc7-204f-452f-8386-71d3c0e96095'
                />
                <SignInButton
                    onClick={signIn}
                >
                    Sign in with Google
                </SignInButton>
            </LoginContainer>
        </Wrapper>
    )
}

export default Login