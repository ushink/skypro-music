import styled from "styled-components";

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
  cursor: pointer;
`;

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;

export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
  cursor: pointer;
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`;

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$repeat ? "#ffffff" : "#696969")};
`;

export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$shuffle ? "#ffffff" : "#696969")};
`;
