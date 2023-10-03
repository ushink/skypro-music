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

export const SkeletTrackAuthor = styled(SkeletTrack)`
  width: 271px;
  height: 19px;
`;

export const SkeletTrackAlbum = styled(SkeletTrack)`
  width: 305px;
  height: 19px;
`;

export const SkeletTrackTitleImag = styled(SkeletTrack)`
  width: 51px;
  height: 51px;
  margin-right: 17px;
`;

export const SkeletTrackTitleText = styled(SkeletTrack)`
  width: 356px;
  height: 19px;
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
