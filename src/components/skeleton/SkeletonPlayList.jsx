import * as Style from "./Skeletons.styles.js";
import * as S from "../TracksLibrary/item.styles.js";

export default function SkeletonTrackItems() {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <Style.SkeletTrackTitleImag></Style.SkeletTrackTitleImag>
          <Style.SkeletTrackTitleText></Style.SkeletTrackTitleText>
        </S.TrackTitle>
        <Style.SkeletTrackAuthor></Style.SkeletTrackAuthor>
        <Style.SkeletTrackAlbum></Style.SkeletTrackAlbum>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
