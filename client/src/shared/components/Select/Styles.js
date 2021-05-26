import styled from "styled-components";

export const SelectContainer = styled.div`
    height: 32px;
    position: relative;
`;

export const SelectElement = styled.select`
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
    background-color: red;
    top: 8px;
    left: 8px;
    pointer-events: none;
    width: 25px;
    height: 25px;
`;
