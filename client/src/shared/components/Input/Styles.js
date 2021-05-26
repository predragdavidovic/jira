import styled from "styled-components";
// import Icon from '../Icon/Index';

export const InputContainer = styled.div`
    height: 32px;
    position: relative;
`;

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #dedede;
    background: #f4f5f7;
    color: #162a4b;
`;

export const StyledIcon = styled.div`
    position: absolute;
    background-color: purple;
    top: 8px;
    left: 8px;
    pointer-events: none;
    width: 25px;
    height: 25px;
`;
