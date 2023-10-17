import { useEffect } from "react";
import * as S from "./ProgressBar.styles";

export function ProgressBar({
  currentTrack,
  audioRef,
  currentTime,
  setCurrentTime,
  duration,
  setDuration,
}) {
  function getTrackTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  }

  const interval = () => {
    setInterval(() => {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
    }, 1000);
  };

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.src = currentTrack.track_file;

      audioRef.current.addEventListener("timeupdate", () => {
        setDuration(audioRef.current.duration);
        interval();
      });
    }
  }, [currentTrack]);

  const rewindTime = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };

  return (
    <>
      <S.BarPlayerProgressTime>
        {getTrackTime(currentTime)} / {getTrackTime(duration)}
      </S.BarPlayerProgressTime>
      <S.BarPlayerProgress
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={rewindTime}
        $color="#ff0000"
      />
    </>
  );
}
