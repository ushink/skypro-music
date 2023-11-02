import PlaylistItem from "../PlaylistItem/PlaylistItem.jsx";
import Filter from "../TrackFilter/TrackFilter.jsx";
import CenterblockSearch from "./centerblockSearch.jsx";
import * as S from "./TrackList.styles.js";
import ContentTitle from "./ContentTitle.jsx";
import { useSelector } from "react-redux";
import { allTracksSelector } from "../../Store/selectors/track.js";
import { useMemo, useState } from "react";

export default function MainTracklist({
  isLoaded,
  handleTrackClick,
  addTrackError,
}) {
  const tracks = useSelector(allTracksSelector);
  const auth = JSON.parse(localStorage.getItem("user"));

  // строка поиска
  const [search, setSearch] = useState("");

  // useMemo как useEffect только с const
  const searchTracks = useMemo(() => {
    let playlist = [...tracks];

    if (search !== "") {
      playlist = playlist.filter((track) =>
        track.name.toLowerCase().includes(search)
      );
    }
    return playlist;
  }, [tracks, search]);

  return (
    <S.MainCenterblock>
      <CenterblockSearch onChange={(value) => setSearch(value)} />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <ContentTitle />
        {addTrackError ? (
          `Не удалось загрузить плейлист, попробуйте позже. ${addTrackError}`
        ) : (
          <S.ContentPlaylist>
            {searchTracks.map((track, index) => (
              <PlaylistItem
                isLoaded={isLoaded}
                onClick={() => handleTrackClick(track, index)}
                id={track.id}
                name={track.name}
                remix={track.remix}
                author={track.author}
                album={track.album}
                seconds={track.duration_in_seconds}
                isLiked={(track.stared_user ?? []).find(
                  ({ id }) => id === auth.id
                )}
              />
            ))}
          </S.ContentPlaylist>
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
