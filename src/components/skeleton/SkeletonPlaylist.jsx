import * as Style from "./Skeletons.styles.js";
import * as S from "../TrackListContent/TracklistContent.styles";

export default function SkeletonTrackItems() {
  return (
    <S.PlaylistTrack>
      <S.TrackTitle>
        <Style.SkeletTrackTitleImag />
        <Style.SkeletTrackTitleText />
      </S.TrackTitle>
      <Style.SkeletTrackAuthor />
      <Style.SkeletTrackAlbum />
    </S.PlaylistTrack>
  );
}
