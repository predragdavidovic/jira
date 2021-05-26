import styled from "styled-components";

export const TaskComponent = styled.div`
    padding: 10px;
    border-radius: 3px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 2px 0px;
    transition: background 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
    margin-bottom: 5px;
    box-shadow: 0 0 2px 0 rgba(9, 30, 66, 0.31),
        0 2px 5px -1px rgba(9, 30, 66, 0.25);
    line-height: 1.1em;
    padding-bottom: 4px;
    &:hover {
        background: #ebecf0;
        cursor: pointer;
    }
    &:active {
        background: #ebecf0;
        cursor: pointer;
    }
`;

export const TaskParagraph = styled.p`
    font-size: 15px;
    margin: 0 0 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TaskDetails = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;

export const PriortyType = styled.div`
    display: flex;
`;
