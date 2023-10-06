import { useEffect, useState } from "react";
import { BarPlayerProgress } from "./ProgressBar.styles";

export function ProgressBar({ currentTrack, audioRef }) {
  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(null);
  // const timeUpdate = (event) => {
  //   const minutes = Math.floor(event.target.currentTime / 60);
  //   const seconds = Math.floor(event.target.currentTime - minutes * 60);
  //   const currentTime = str_pad_left(minutes,'0',2) + ':' + str_pad_left(seconds,'0',2);
  //   setCurrentTime(currentTime);
  // }
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
  }, []);

  const rewindTime = (event) => {
    setCurrentTime(event.target.value);
    audioRef.current.currentTime = event.target.value;
  };

  return (
    <>
      <p>{currentTime}</p>
      <BarPlayerProgress
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
