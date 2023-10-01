import * as S from "./TracklistContent.styles.js";
import { useEffect, useState } from "react";
import { getTodos } from "../../api.js";

export default function PlaylistContent({ isLoaded }) {
  const [tracks, setTracks] = useState([""]);

  useEffect(() => {
    getTodos().then((todos) => {
      //console.log(todos);
      setTracks(todos);
    });
  }, []);

  const TrackItems = tracks.map((track) => (
    <S.PlaylistItem key={track.id}>
      <S.PlaylistTrack>
        <S.TrackTitle>
          {isLoaded ? (
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
          ) : (
            <S.SkeletTrackTitleImag> </S.SkeletTrackTitleImag>
          )}

          {isLoaded ? (
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
          ) : (
            <S.SkeletTrackTitleText> </S.SkeletTrackTitleText>
          )}
        </S.TrackTitle>

        {isLoaded ? (
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        ) : (
          <S.SkeletTrackAuthor> </S.SkeletTrackAuthor>
        )}

        {isLoaded ? (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
          </S.TrackAlbum>
        ) : (
          <S.SkeletTrackAlbum> </S.SkeletTrackAlbum>
        )}
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{track.duration_in_seconds}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  ));

  return <S.ContentPlaylist>{TrackItems}</S.ContentPlaylist>;
}
