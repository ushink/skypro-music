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
  isLoaded,
  onClick,
  id,
  name,
  remix,
  author,
  album,
  seconds,
  isLiked,
}) {
  const isPlaying = useSelector(isPlayingTrack);
  const currentTrack = useSelector(trackPlaySelector);

  const [like, { error: likeError }] = useLikeTrackMutation();
  const [dislike, { error: dislikeError }] = useDislikeTrackMutation();

  // поставить лайк
  const handleLike = async (id) => {
    await like({ id })
      .unwrap()
      .catch((error) => {
        console.error(error);
        console.log("Ошибка лайка");
      });

    console.log("like");
  };

  // убрать лайк
  const handleDislike = async (id) => {
    await dislike({ id })
      .unwrap()
      .catch((error) => {
        console.error(error);
        console.log("Ошибка лайка");
      });

    console.log("dislike");
  };

  // ф-ция лайков
  const handleLikeClick = (id) => {
    isLiked ? handleDislike(id) : handleLike(id);
  };

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
                  <use xlinkHref="../img/icon/sprite.svg#icon-note"></use>
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
                handleLikeClick(id);
              }}
            >
              {!isLiked ? (
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
