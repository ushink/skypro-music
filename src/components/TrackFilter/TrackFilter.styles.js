import styled from "styled-components";

export const BlockFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  column-gap: 10px;
`;

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 10px;
`;

export const FilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;

  // &:not(:last-child) {
  //   margin-right: 10px;
  // }
`;

export const FilterMenu = styled.div`
  position: absolute;
  top: 50px;
  width: 280px;
  height: 200px;
  box-sizing: border-box;
  background-color: #313131;
  border-radius: 12px;
  padding: 34px;
`;

export const FilterList = styled.ul`
  width: 250px;
  height: 237px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const FilterListItem = styled.a`
  color: #ffffff;

  &:hover {
    text-decoration: underline;
    color: #9a48f1;
  }

  &:focus {
    text-decoration: none;
    color: #9a48f1;
  }
`;
