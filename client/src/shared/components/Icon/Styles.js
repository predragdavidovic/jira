import styled from "styled-components";
import { issueTypeColors } from "../../constants.js";

export const Icon = styled.i`
    display: inline-block;
    font-size: 16px;
    margin-right: 3px;
    &:before {
        content: "${(props) => props.code}";
        font-family: "jira" !important;
        font-style: normal;
    }
`;

export const IconColor = styled.span`
    color: ${(props) => issueTypeColors[props.color]};
`;

export const UserAvatar = styled.div`
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background-image: url(${(props) => props.userAvatar});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: -3px;
`;
