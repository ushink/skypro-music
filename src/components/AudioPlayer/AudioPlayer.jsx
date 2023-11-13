import PlayerControlBtn from "../PlayerControls/PlayerControls.jsx";
import TrackPlayNow from "../TrackPlay/TrackPlay.jsx";
import SkeletonTrackPlayNow from "../skeleton/SkeletonAudioPlayer.jsx";
import TrackPlayLikeDis from "./TrackPlayLikeDis.jsx";
import * as S from "./AudioPlayer.styles.js";
import { useRef, useState } from "react";
import { ProgressBar } from "./ProgressBar.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  nextTrack,
  pauseTrack,
  playTrack,
} from "../../Store/slices/trackSlice.js";
import { isPlayingTrack } from "../../Store/selectors/track.js";

export default function BarPlayer({ currentTrack, isLoaded }) {
  const [isRepeat, setIsRepeat] = useState(false);
  const [isVolume, setIsVolume] = useState(0.2);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);
  const [isLiked, setIsLiked] = useState(null);

  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const isPlaying = useSelector(isPlayingTrack);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(playTrack());
  };

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(pauseTrack());
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const playTrackInRow = () => {
    const durTrack = audioRef.current.duration;
    const curTime = audioRef.current.currentTime;
    if (durTrack === curTime) {
      dispatch(nextTrack());
    }
  };

  const changeVolume = (event) => {
    setIsVolume(event.target.value);
    audioRef.current.volume = event.target.value;
  };

  return (
    <S.Container>
      <S.Bar>
        <audio
          ref={audioRef}
          loop={isRepeat}
          onTimeUpdate={playTrackInRow}
          autoPlay
        >
          <source src={currentTrack.track_file} type="audio/mp3" />
        </audio>
        <S.BarContent>
          <ProgressBar
            currentTrack={currentTrack}
            audioRef={audioRef}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            duration={duration}
            setDuration={setDuration}
          />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <PlayerControlBtn
                togglePlay={togglePlay}
                isPlaying={isPlaying}
                toggleRepeat={toggleRepeat}
                isRepeat={isRepeat}
                setIsLiked={setIsLiked}
              />
              <S.PlayerTrackPlay>
                {isLoaded ? (
                  <SkeletonTrackPlayNow />
                ) : (
                  <TrackPlayNow currentTrack={currentTrack} />
                )}

                <TrackPlayLikeDis isLiked={isLiked} setIsLiked={setIsLiked} />
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="../img/icon/sprite.svg#icon-volume"></use>
                  </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    value={isVolume}
                    step={0.01}
                    onChange={changeVolume}
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </S.Container>
  );
}
