import * as S from "../Filter/TrackFilter.styles";

export default function ShowGenres({ tracks, handleGenreClick, genreActiv }) {
  const Genres = [...new Set(tracks?.map((track) => track.genre))].sort();

  const list = Genres?.map((genre) => (
    <li>
      <S.FilterListItem
        href="#"
        key={genre.id}
        onClick={() => handleGenreClick(genre)}
      >
        {genreActiv.includes(genre) ? (
          <S.ActivItem>{genre}</S.ActivItem>
        ) : (
          genre
        )}
      </S.FilterListItem>
    </li>
  ));

  return (
    <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}
