import PlaylistItem from "../PlaylistItem/PlaylistItem.jsx";
import Filter from "../TrackFilter/TrackFilter.jsx";
import CenterblockSearch from "./centerblockSearch.jsx";
import * as S from "./TrackList.styles.js";
import ContentTitle from "./ContentTitle.jsx";
import { useSelector } from "react-redux";
import { allTracksSelector } from "../../Store/selectors/track.js";

export default function MainTracklist({
  isLoaded,
  handleTrackClick,
  addTrackError,
}) {
  const tracks = useSelector(allTracksSelector);

  return (
    <S.MainCenterblock>
      <CenterblockSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <ContentTitle />
        {addTrackError ? (
          `Не удалось загрузить плейлист, попробуйте позже. ${addTrackError}`
        ) : (
          <S.ContentPlaylist>
            {tracks.map((track, index) => (
              <PlaylistItem
                track={track}
                isLoaded={isLoaded}
                onClick={() => handleTrackClick(track, index)}
                id={track.id}
                name={track.name}
                remix={track.remix}
                author={track.author}
                album={track.album}
                seconds={track.duration_in_seconds}
                Like={false}
              />
            ))}
          </S.ContentPlaylist>
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
