import styled, { keyframes } from "styled-components";
const Blink = keyframes`
    from {
    opacity: 1;
  }

    to {
    opacity: 0.2;
  }
`;

export const SkeletSidebarItem = styled.div`
  margin-bottom: 30px;
  width: 250px;
  height: 150px;
  background-color: #313131;
  animation: ${Blink} 1s infinite alternate;
`;

const SkeletTrack = styled.div`
  background-color: #313131;
  animation: ${Blink} 1s infinite alternate;
`;

export const SkeletPlayAlbum = styled(SkeletTrack)`
  width: 59px;
  height: 15px;
`;
export const SkeletPlayAuthor = styled(SkeletTrack)`
  width: 59px;
  height: 15px;
`;
export const SkeletPlayImage = styled(SkeletTrack)`
  width: 51px;
  height: 51px;
  margin-right: 12px;
  grid-area: image;
`;
