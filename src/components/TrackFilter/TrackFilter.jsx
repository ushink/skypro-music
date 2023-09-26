import { useState } from "react";
import ShowAuthors from "../FilterMenu/Authors.jsx";
import ShowYears from "../FilterMenu/Years.jsx";
import ShowGenres from "../FilterMenu/Genres.jsx";
import * as S from "./TrackFilter.styles.js"

export default function Filter() {
  const [revealAuthor, setRevealAuthor] = useState(false);
  const [revealYear, setRevealYear] = useState(false);
  const [revealGenre, setRevealGenre] = useState(false);

  const toggleRevealAuthor = () => {
    setRevealAuthor(!revealAuthor);
    setRevealYear(false);
    setRevealGenre(false);
  };

  const toggleRevealYear = () => {
    setRevealYear(!revealYear);
    setRevealAuthor(false);
    setRevealGenre(false);
  };

  const toggleRevealGenre = () => {
    setRevealGenre(!revealGenre);
    setRevealYear(false);
    setRevealAuthor(false);
  };

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>

      {revealAuthor ? (
        <S.FilterBox>
          <S.FilterButton
            className="_btn-text_focus"
            onClick={toggleRevealAuthor}
          >
            исполнителю
          </S.FilterButton>
          <ShowAuthors />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <S.FilterButton className="_btn-text" onClick={toggleRevealAuthor}>
            исполнителю
          </S.FilterButton>
        </S.FilterBox>
      )}

      {revealYear ? (
        <S.FilterBox>
          <S.FilterButton
            className="_btn-text_focus"
            onClick={toggleRevealYear}
          >
            году выпуска
          </S.FilterButton>
          <ShowYears />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <S.FilterButton
            className="_btn-text"
            onClick={toggleRevealYear}
          >
            году выпуска
          </S.FilterButton>
        </S.FilterBox>
      )}

      {revealGenre ? (
        <S.FilterBox>
          <S.FilterButton
            className="_btn-text_focus"
            onClick={toggleRevealGenre}
          >
            жанру
          </S.FilterButton>
          <ShowGenres />
        </S.FilterBox>
      ) : (
        <S.FilterBox>
          <S.FilterButton
            className="_btn-text"
            onClick={toggleRevealGenre}
          >
            жанру
          </S.FilterButton>
        </S.FilterBox>
      )}
    </S.CenterblockFilter>
  );
}
