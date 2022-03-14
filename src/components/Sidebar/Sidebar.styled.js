import styled from 'styled-components';

import { GrStatusGoodSmall } from 'react-icons/gr';
import { IoMdCreate } from 'react-icons/io';

export const SidebarContainer = styled.div`
    flex: 0.3;
    color: white;
    background-color: var(--slack-purple);
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 40px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
`;

export const SidebarInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const AppInfo = styled.div`
    display: flex;
    flex-direction: column;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
`;

export const OnlineStatusIcon = styled(GrStatusGoodSmall)`
    font-size: 12px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
`;

export const CreateContainer = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-end;
    padding: 8px;
    border-radius: 50%;
    color: #49274b;
    background-color: white;
`;

export const CreateIcon = styled(IoMdCreate)`
    font-size: 18px;
`;

export const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

export const SiedbarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;