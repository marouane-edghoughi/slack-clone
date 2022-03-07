import styled from 'styled-components';

import { BiTimeFive } from 'react-icons/bi';

export const HeaderContainer = styled.div`
    display: flex;
    color: #F5F5F5;
    background-color: var(--slack-purple);
    position: fixed;
    width: 100%;
    height: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`;

export const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 20px;
`;

export const Avatar = styled.span`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

export const ClockIcon = styled(BiTimeFive)`
    margin-left: auto;
    margin-right: 20px;
`;

export const Searchbar = styled.div`
    float: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid grey;
    
    > input {
        min-width: 30vw;
        outline: none;
        border: none;
        color: #F5F5F5;
        background-color: transparent;
        text-align: center;
    }
`;

export const HeaderRight = styled.div`
    display: flex;
    float: 0.3;
    margin-right: 20px;
`;