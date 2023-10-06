import PlayerControlBtn from "../PlayerControls/PlayerControls.jsx";
import TrackPlayNow from "../TrackPlay/TrackPlay.jsx";
import SkeletonTrackPlayNow from "../skeleton/SkeletonAudioPlayer.jsx";
import * as S from "./AudioPlayer.styles.js";
import { useRef, useState } from "react";
import { ProgressBar } from "./ProgressBar.jsx";

export default function BarPlayer({ currentTrack, isLoaded }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const audioRef = useRef(null);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  return (
    <S.Bar>
      {currentTrack ? (
        <audio ref={audioRef} autoPlay>
          <source src={currentTrack.track_file} type="audio/mp3" />
        </audio>
      ) : null}
      {currentTrack ? (
        <S.BarContent>
          <ProgressBar currentTrack={currentTrack} audioRef={audioRef} />
          
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <PlayerControlBtn togglePlay={togglePlay} isPlaying={isPlaying} />
              <S.PlayerTrackPlay>
                {isLoaded ? (
                  <SkeletonTrackPlayNow />
                ) : (
                  <TrackPlayNow currentTrack={currentTrack} />
                )}

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLike className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLike>
                  <S.TrackPlayDislike className="_btn-icon">
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayDislike>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      ) : null}
    </S.Bar>
  );
}
