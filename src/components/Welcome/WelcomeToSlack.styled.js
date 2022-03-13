import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
`;

export const SlackLogo = styled.img`
    width: 300px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    pointer-events: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
`;

export const SlackDescription = styled.p`
    margin-bottom: 10px;
`;