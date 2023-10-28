import { useSelector } from "react-redux";
import SkeletonTrackItems from "../skeleton/SkeletonPlaylist.jsx";
import * as S from "./PlaylistItem.js";
import {
  isPlayingTrack,
  trackPlaySelector,
} from "../../Store/selectors/track.js";
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../services/trackQuery.js";

export default function PlaylistItem({
  track,
  isLoaded,
  onClick,
  id,
  name,
  remix,
  author,
  album,
  seconds,
  isFavorite,
}) {
  const isPlaying = useSelector(isPlayingTrack);
  const currentTrack = useSelector(trackPlaySelector);

  const [like, { error: likeError }] = useLikeTrackMutation();
  const [dislike, { error: dislikeError }] = useDislikeTrackMutation();

  const handleLikeClick = () => {
    if (isFavorite) {
      dislike({
        id: track.id,
      });
      console.log('dislike')
    } else {
      like({
        id: track.id,
      });
      console.log('like')
    }
  };

  const error = likeError ?? dislikeError ?? null;

  if (error) {
    console.error(error);
    console.log("Ошибка лайка");
  }

  return (
    <S.PlaylistItem onClick={onClick} key={id}>
      {isLoaded ? (
        <SkeletonTrackItems />
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              {currentTrack && currentTrack.id === id && isPlaying ? (
                <S.PulsePoint />
              ) : currentTrack && currentTrack.id === id && !isPlaying ? (
                <S.StaticPoint />
              ) : (
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </S.TrackTitleSvg>
              )}
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href="http://">
                {name}{" "}
                {remix ? <S.TrackTitleSpan>{remix}</S.TrackTitleSpan> : ""}
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <S.TrackTime>
            <S.TrackTimeSvg
              alt="heart"
              onClick={(event) => {
                event.stopPropagation();
                handleLikeClick();
              }}
            >
              {isFavorite ? (
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              ) : (
                <use xlinkHref="img/icon/sprite.svg#icon-like-activ"></use>
              )}
            </S.TrackTimeSvg>
            <S.TrackTimeText>
              {Math.floor(seconds / 60) +
                ":" +
                (seconds % 60 < 10 ? (seconds % 60) + "0" : seconds % 60) ||
                (seconds % 60 === 0 ? "00" : seconds % 60)}
            </S.TrackTimeText>
          </S.TrackTime>
        </S.PlaylistTrack>
      )}
    </S.PlaylistItem>
  );
}
