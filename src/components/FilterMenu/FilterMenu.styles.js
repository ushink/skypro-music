import styled from "styled-components";

export const FilterMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 248px;
  height: 305px;
  box-sizing: border-box;
  background-color: #313131;
  border-radius: 12px;
  padding: 34px;
`;

export const FilterList = styled.ul`
  width: 180px;
  height: 237px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    height: 35px;
  }
`;

export const FilterListItem = styled.a`
  color: #ffffff;

  &:hover {
    text-decoration: underline;
    color: #9a48f1;
  }
`;
