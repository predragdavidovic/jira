import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchMagnifier = styled.i`
    position: absolute;
  top: 11px;
  margin-left: 10px;
  &:before {
    content: "\\e986";
    font-family: "jira" !important;
    color: #42526e;
    font-style: normal;
  }
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 3px;
  padding: 10px 32px;
  border: 1px solid rgb(223,225,230);
  color: rgb(23,43,77);
  background: rgb(244,245,247);
  -webkit-transition: background 0.1s ease 0s;
  transition: background 0.1s ease 0s;
  font-size: 15px;

  &:focus {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(76, 154, 255);
    box-shadow: rgb(76 154 255) 0px 0px 0px 1
  }
`;

export const UserContainer = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const UserAvatarFilter = styled.div`
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-image: url(${(props) => props.userAvatar});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 5px;
    box-sizing: border-box;
    border: ${props => props.border};
    transition: transform .2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.15)
    }
`;

export const ClearAll = styled.span`
  color: rgb(35 37 42 / 79%);
  font-size: 16px;
  margin-left: 20px;
  border-left: 1px solid rgb(94 108 132 / 70%);
  padding-left: 15px;
  height: 32px;
  line-height: 32px;
  &:hover {
    cursor: pointer;
  }
`;