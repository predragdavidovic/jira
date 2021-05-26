import styled from "styled-components";

export const SideBar = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    overflow-x: hidden;
    height: 100vh;
    width: 64px;
    background: rgb(7, 71, 166);
    transition: all 0.1s ease 0s;
    transform: translateZ(0px);
    text-align: center;
    padding: 25px 0;
`;

export const SideBarItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    min-height: 40px;
    &:before {
        content: "${(props) => props.icon}";
        font-family: "jira" !important;
        color: #fff;
    }
    &:hover {
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background: #1c63ce;
        margin: 0 auto;
    }
`;
