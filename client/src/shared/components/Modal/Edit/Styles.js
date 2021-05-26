import styled from "styled-components";

export const IssueHeader = styled.div`
    padding-bottom: 15px;
    font-size: 20px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;
`;

export const Title = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgb(94, 108, 132);
    font-size: 13px;
    padding-left: 5px;
`;

export const CreateModal = styled.div`
    padding: 20px;
`;

export const ControlButtons = styled.div`
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    vertical-align: middle;
    line-height: 1;
    padding: 0px 11px;
    white-space: nowrap;
    border-radius: 3px;
    transition: all 0.1s ease 0s;
    appearance: none;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    color: ${(props) => props.color};
    background: ${(props) => props.background};
    font-weight: normal;
    transition: box-shadow 0.3s;
    border: 0;
    &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
`;
