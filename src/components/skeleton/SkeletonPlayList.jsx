import "./SkeletonPlayList.css";

export default function SkeletonTrackItems() {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="skelet-track__title-image"></div>
          <div className="skelet-track__title-text"></div>
        </div>
        <div className="skelet-track__author"></div>
        <div className="skelet-track__album"></div>
      </div>
    </div>
  );
}
