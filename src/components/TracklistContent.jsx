import SkeletonTrackItems from "./skeleton/SkeletonPlayList.jsx";
import TrackItem1 from "./TracksLibrary/item1.jsx";
import TrackItem2 from "./TracksLibrary/item2.jsx";
import TrackItem3 from "./TracksLibrary/item3.jsx";
import TrackItem4 from "./TracksLibrary/item4.jsx";
import TrackItem5 from "./TracksLibrary/item5.jsx";
import TrackItem6 from "./TracksLibrary/item6.jsx";
import TrackItem7 from "./TracksLibrary/item7.jsx";
import TrackItem8 from "./TracksLibrary/item8.jsx";
import TrackItem9 from "./TracksLibrary/item9.jsx";
import TrackItem10 from "./TracksLibrary/item10.jsx";
import TrackItem11 from "./TracksLibrary/item11.jsx";
import TrackItem12 from "./TracksLibrary/item12.jsx";
import TrackItem13 from "./TracksLibrary/item13.jsx";
import TrackItem14 from "./TracksLibrary/item14.jsx";
import TrackItem15 from "./TracksLibrary/item15.jsx";
import TrackItem16 from "./TracksLibrary/item16.jsx";
import TrackItem17 from "./TracksLibrary/item17.jsx";

export default function PlaylistContent({ isLoaded }) {
  return (
    <div className="content__playlist playlist">
      {isLoaded ? <TrackItem1 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem2 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem3 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem4 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem5 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem6 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem7 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem8 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem9 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem10 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem11 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem12 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem13 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem14 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem15 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem16 /> : <SkeletonTrackItems />}
      {isLoaded ? <TrackItem17 /> : <SkeletonTrackItems />}
    </div>
  );
}
