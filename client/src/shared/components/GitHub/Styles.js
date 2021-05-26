import styled from "styled-components";

export const Row = styled.div`
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
`;

export const PageName = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

export const Git = styled.button`
    color: blue;
    text-decoration: none;
    background: rgb(244, 245, 247);
    color: rgb(94, 108, 132);
    width: auto;
    padding: 0 10px;
    border-radius: 3px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 0;
    font-size: 17px;
`;

export const NavIcon = styled.div`
    display: inline-block;
    &:before {
        content: "\\eab0";
        font-family: "jira" !important;
        margin-right: 10px;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 35px;
`;
