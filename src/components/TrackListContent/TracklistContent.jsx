import { useSelector } from "react-redux";
import SkeletonTrackItems from "../skeleton/SkeletonPlaylist.jsx";
import * as S from "./TracklistContent.styles.js";
import { tracksSelector } from "../../Store/selectors/track.js";

export default function PlaylistContent({
  handleTrackClick,
  // tracks,
  isLoaded,
}) {
  const tracks = useSelector(tracksSelector);
  const TrackItems = tracks.map((track) => (
    <S.PlaylistItem onClick={() => handleTrackClick(track)} key={track.id}>
      {isLoaded ? (
        <SkeletonTrackItems />
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {track.name}{" "}
                {track.remix ? (
                  <S.TrackTitleSpan>{track.remix}</S.TrackTitleSpan>
                ) : (
                  ""
                )}
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {Math.floor(track.duration_in_seconds / 60) +
                ":" +
                (track.duration_in_seconds % 60 < 10
                  ? (track.duration_in_seconds % 60) + "0"
                  : track.duration_in_seconds % 60) ||
                (track.duration_in_seconds % 60 === 0
                  ? "00"
                  : track.duration_in_seconds % 60)}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      )}
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{TrackItems}</S.ContentPlaylist>;
}
