import styled from 'styled-components';

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AvatarImage = styled.img`
    height: 35px;
    width: auto;
    border-radius: 50%;
    cursor: pointer;
    -webkit-user-drag: none;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
    

    :hover {
        opacity: 0.8;
    }
`;