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
  // сортировка
  const [Years, setYears] = useState("По умолчанию");
  // фильтры
  const [authorActiv, setAuthorActiv] = useState([]);
  const [genreActiv, setGenreActiv] = useState([]);

  // ф-ция выбора авторов
  const handleAuthorClick = (value) => {
    if (authorActiv.includes(value)) {
      setAuthorActiv(authorActiv.filter((item) => item !== value));
    } else {
      setAuthorActiv([...authorActiv, value]);
    }
  };
  
  // ф-ция выбора жанров
  const handleGenreClick = (value) => {
    if (genreActiv.includes(value)) {
      setGenreActiv(genreActiv.filter((item) => item !== value));
    } else {
      setGenreActiv([...genreActiv, value]);
    }
  };

  // useMemo как useEffect только с const
  const searchTracks = useMemo(() => {
    let playlist = [...tracks];

    if (search !== "") {
      playlist = playlist.filter((track) =>
        track.name.toLowerCase().includes(search)
      );
    }
    if (Years === "Сначала новые") {
      playlist = playlist.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }
    if (Years === "Сначала старые") {
      playlist = playlist.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      );
    }
    if (authorActiv.length > 0) {
      playlist = playlist.filter((track) => authorActiv.includes(track.author));
    }
    if (genreActiv.length > 0) {
      playlist = playlist.filter((track) => genreActiv.includes(track.genre));
    }
    return playlist;
  }, [tracks, search, Years, authorActiv, genreActiv]);

  return (
    <S.MainCenterblock>
      <CenterblockSearch onChange={(value) => setSearch(value)} />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter
        tracks={tracks}
        Years={Years}
        setYears={setYears}
        handleAuthorClick={handleAuthorClick}
        handleGenreClick={handleGenreClick}
      />
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
