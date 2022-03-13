import styled from 'styled-components';

import {
    AiOutlineStar,
    AiOutlineInfoCircle
} from 'react-icons/ai';

export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 30px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;

export const RoomName = styled.h4`
    margin-right: 10px;
    text-transform: lowercase;
`;

export const StartIcon = styled(AiOutlineStar)`

`;

export const DetailsIcon = styled(AiOutlineInfoCircle)`
    margin-right: 10px;
    font-size: 16px;
`;

export const ChatMessages = styled.div`
    padding: 0 20px;
`;

export const ChatBottom = styled.div`
    height: 100px;
`;

// Messages

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

export const UserImage = styled.img`
    width: 50px;
    height: auto;
    border-radius: 10px;
    pointer-events: none;
`;

export const MessageData = styled.div`
    display: inline;
    margin-left: 10px;
`;

export const UserName = styled.h4`

`;

export const MessageDate = styled.p`
    color: gray;
    margin-left: 4px;
    font-size: 10px;
    font-weight: 300;
`;

export const MessageText = styled.p`

`;

// Chat Box Component

export const ChatBoxContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
`;