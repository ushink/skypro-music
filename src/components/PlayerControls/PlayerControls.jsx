import * as S from "./PlayerControls.styles.js";

export default function PlayerControlBtn({
  toggleRepeat,
  isRepeat,
  togglePlay,
  isPlaying,
}) {
  const clickPrev = () => {
    alert("Еще не реализовано");
  };

  const clickNext = () => {
    alert("Еще не реализовано");
  };

  const clickShuffle = () => {
    alert("Еще не реализовано");
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
        <S.PlayerBtnRepeatSvg alt="repeat" $repeat={!isRepeat}>
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon">
        <S.PlayerBtnShuffleSvg alt="shuffle" onClick={clickShuffle}>
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}
