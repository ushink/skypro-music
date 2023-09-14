import "./SkeletonAudioPlayer.css";

export default function SkeletonTrackPlayNow() {
    return (
      <div className="track-play__contain">
        <div className="skeleton-play__image"></div>
        <div className="skeleton-play__author"></div>
        <div className="skeleton-play__album"></div>
      </div>
    );
  }