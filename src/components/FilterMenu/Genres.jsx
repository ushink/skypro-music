import * as S from "../TrackFilter/TrackFilter.styles";

export default function ShowGenres({ tracks, handleGenreClick }) {
  const Genres = [...new Set(tracks?.map((track) => track.genre))].sort();

  const list = Genres?.map((genre) => (
    <li>
      <S.FilterListItem href="#" onClick={() => handleGenreClick(genre)}>
        {genre}
      </S.FilterListItem>
    </li>
  ));

  return (
    <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}
