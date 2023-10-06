import * as S from "./PlayerControls.styles.js";

export default function PlayerControlBtn({ togglePlay, isPlaying }) {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
        <S.PlayerBtnPlaySvg alt={!isPlaying  ? "play" : "pause"}>
          {!isPlaying ? (
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className="_btn-icon">
        <S.PlayerBtnRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon">
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}
