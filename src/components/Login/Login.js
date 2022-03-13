import React from 'react';

import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';

import {
    Wrapper,
    LoginContainer,
    SlackLogo,
    SignInText,
    Copyrights,
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
                    src='https://firebasestorage.googleapis.com/v0/b/slack-clone-2022.appspot.com/o/images%2Fslack-icon.svg?alt=media&token=50ec4c78-dfff-4b44-8886-0dbfb677009d'
                />
                <SignInText>
                    Sign in to Slack Clone
                </SignInText>
                <Copyrights>
                    &copy; powered by Marouane Edghoughi.
                </Copyrights>
                <SignInButton
                    onClick={signIn}
                >
                    Sign in with Google
                </SignInButton>
            </LoginContainer>
        </Wrapper>
    )
}

export default Login;