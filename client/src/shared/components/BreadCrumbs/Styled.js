import styled from "styled-components";

export const Crumb = styled.span`
    color: rgb(94, 108, 132);
    font-size: 18px;
    margin: 0 5px;
`;

export const Divider = styled.span`
    position: relative;
    top: 2px;
    margin: 0px 10px;
    font-size: 18px;
    &:after {
        content: "/";
    }
`;
