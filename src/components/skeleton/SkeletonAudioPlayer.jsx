import * as Style from "./Skeletons.styles.js";
import * as S from "../TrackPlay/TrackPlay.styled.js";

export default function SkeletonTrackPlayNow() {
  return (
    <S.TrackPlayContain>
      <Style.SkeletPlayImage></Style.SkeletPlayImage>
      <Style.SkeletPlayAuthor></Style.SkeletPlayAuthor>
      <Style.SkeletPlayAlbum></Style.SkeletPlayAlbum>
    </S.TrackPlayContain>
  );
}
