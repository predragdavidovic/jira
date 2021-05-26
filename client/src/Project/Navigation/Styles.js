import styled from "styled-components";

export const Navigation = styled.div`
    position: fixed;
    top: 0px;
    left: 64px;
    height: 100vh;
    width: 160px;
    padding: 0px 16px 24px;
    color: rgb(66, 82, 110);
    background: rgb(244, 245, 247);
    border-right: 1px solid rgb(223, 225, 230);
    overflow: hidden auto;
    font-size: 15px;
    transition: width 0.2s cubic-bezier(0.1, 0, 0, 1) 0s;
    @media (max-width: 1024px) {
        width: 0;
        padding: 0;
    }
`;

export const HrBorder = styled.div`
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid rgb(189, 189, 203);
`;

export const NavAvatar = styled.div`
    display: flex;
    padding: 24px 0px;
    align-items: center;
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    padding-right: 10px;
`;

export const ProjectName = styled.div`
    font-size: 15px;
`;

export const ProjectDeveloper = styled.div`
    font-size: 13px;
    color: #5e6c84;
`;
export const NavItem = styled.div`
    display: flex;
    &:hover {
        cursor: pointer;
        background-color: #ebecf0;
        border-radius: 3px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2px 0;
    font-size: 17px;
`;

export const NavIcon = styled.div`
    display: inline-block;
    &:before {
        content: "${(props) => props.icon}";
        font-family: "jira" !important;
        margin-right: 10px;
    }
`;

export const NotImplemented = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 35px;
    span {
        padding: 8px 0px;
    }
    &:hover {
        cursor: not-allowed;
    }
    &:hover span {
        display: none;
    }
    &:hover:after {
        content: "Not implemented";
        text-transform: uppercase;
        font-size: 11px;
        background: rgb(223, 225, 230);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        padding: 8px 10px;
    }
`;
