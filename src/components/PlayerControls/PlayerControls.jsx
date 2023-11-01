import { useDispatch } from "react-redux";
import * as S from "./PlayerControls.styles.js";
import {
  nextTrack,
  playTrack,
  prevTrack,
  toggleSuffled,
} from "../../Store/slices/trackSlice.js";
import { useState } from "react";

export default function PlayerControlBtn({
  toggleRepeat,
  isRepeat,
  togglePlay,
  isPlaying,
}) {
  const dispatch = useDispatch();
  const [isShuffle, setIsShuffle] = useState(false);

  const clickPrev = () => {
    dispatch(prevTrack());
    dispatch(playTrack());
  };

  const clickNext = () => {
    dispatch(nextTrack());
    dispatch(playTrack());
  };

  const clickShuffle = () => {
    dispatch(toggleSuffled());
    dispatch(playTrack());
    setIsShuffle(!isShuffle);
  };

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev" onClick={clickPrev}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
        <S.PlayerBtnPlaySvg alt={!isPlaying ? "play" : "pause"}>
          {!isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerBtnNextSvg alt="next" onClick={clickNext}>
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleRepeat}>
        <S.PlayerBtnRepeatSvg alt="repeat" $repeat={isRepeat}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon" onClick={clickShuffle}>
        <S.PlayerBtnShuffleSvg alt="shuffle" $shuffle={isShuffle}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}
