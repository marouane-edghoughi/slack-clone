import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f8f8f8;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid lightgray;
    box-shadow:
        0px 0px 0.8px rgba(0, 0, 0, 0.017),
        0px 0px 3.3px rgba(0, 0, 0, 0.025),
        0px 0px 11.1px rgba(0, 0, 0, 0.033),
        0px 0px 40px rgba(0, 0, 0, 0.05)
    ;
`;

export const SlackLogo = styled.img`
    height: 100px;
    margin-bottom: 40px;
    pointer-events: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
`;

export const SignInText = styled.h2`
    margin-bottom: 5px;
`;

export const Copyrights = styled.p`
    font-size: 12px;
    margin-bottom: 20px;
`;

export const SignInButton = styled.button`
    padding: 10px 15px;
    color: white;
    background-color: var(--slack-green);
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;