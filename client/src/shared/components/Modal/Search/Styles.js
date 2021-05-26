import styled from "styled-components";

export const SearchIssues = styled.div`
    display: inline-block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: rgb(255, 255, 255);
    min-height: 100vh;
    width: 500px;
    max-width: 600px;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 0px;
    padding: 25px 35px 60px;
`;

export const SearchHolder = styled.div`
    position: relative;
    padding-right: 30px;
    margin-bottom: 40px;
`;

export const SearchDiv = styled.div`
    position: relative;
    height: 40px;
    display: inline-block;
    width: 100%;
`;

export const Search = styled.input`
    padding: 0px 0px 0px 32px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(0, 82, 204);
    background: rgb(255, 255, 255);
    font-size: 21px;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    color: rgb(23, 43, 77);
    transition: background 0.1s ease 0s;
    font-weight: normal;
    &:focus {
        outline: none;
    }
`;

export const Icon = styled.div`
    &:before {
        content: "\\e986";
        font-family: "jira" !important;
        color: rgb(94, 108, 132);
        position: absolute;
        top: 13px;
        font-size: 20px;
    }
`;

export const Header = styled.div`
    padding-bottom: 12px;
    text-transform: uppercase;
    color: rgb(94, 108, 132);
    font-family: CircularStdBold;
    font-weight: normal;
    font-size: 11.5px;
`;

export const Task = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 4px 10px;
    border-radius: 4px;
    transition: background 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
    &:hover {
        background: rgb(235, 236, 240);
    }
`;

export const TaskIcon = styled.i`
    font-size: 25px;
    &:before {
        content: "\\ea52";
        font-family: "jira" !important;
        font-style: normal;
    }
`;

export const Description = styled.div`
    padding-left: 15px;
`;

export const DescriptionText = styled.div`
    color: rgb(66, 82, 110);
    font-size: 15px;
`;

export const DescriptionNumber = styled.div`
    text-transform: uppercase;
    color: rgb(94, 108, 132);
    font-size: 12.5px;
`;

export const Close = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: rgb(94, 108, 132);
    transition: all 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
    top: 10px;
    right: -30px;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    text-align: center;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(223, 225, 230);
    box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
`;

export const CloseButton = styled.span`
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
`;
