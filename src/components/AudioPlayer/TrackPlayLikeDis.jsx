import { useState } from "react";
import {
  useDislikeTrackMutation,
  useLikeTrackMutation,
} from "../../services/trackQuery.js";
import * as S from "./AudioPlayer.styles.js";
import { useSelector } from "react-redux";
import { trackPlaySelector } from "../../Store/selectors/track.js";

export default function TrackPlayLikeDis() {
  const currentTrack = useSelector(trackPlaySelector);

  const [like] = useLikeTrackMutation();
  const [dislike] = useDislikeTrackMutation();

  const handleLike = async (id) => {
    await like({ id })
      .unwrap()
      .catch((error) => {
        console.error(error);
        console.log("Ошибка лайка");
      });
  };

  const handleDislike = async (id) => {
    await dislike({ id })
      .unwrap()
      .catch((error) => {
        console.error(error);
        console.log("Ошибка лайка");
      });
  };

  return (
    <S.TrackPlayLikeDis>
      <S.TrackPlayLike className="_btn-icon">
        <S.TrackPlayLikeSvg
          alt="like"
          onClick={(event) => {
            event.stopPropagation();
            handleLike(currentTrack?.id);
          }}
        >
          <use xlinkHref="../img/icon/sprite.svg#icon-like"></use>
        </S.TrackPlayLikeSvg>
      </S.TrackPlayLike>
      <S.TrackPlayDislike className="_btn-icon">
        <S.TrackPlayDislikeSvg
          alt="dislike"
          onClick={(event) => {
            event.stopPropagation();
            handleDislike(currentTrack?.id);
          }}
        >
          <use xlinkHref="../img/icon/sprite.svg#icon-dislike"></use>
        </S.TrackPlayDislikeSvg>
      </S.TrackPlayDislike>
    </S.TrackPlayLikeDis>
  );
}
