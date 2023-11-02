import { useState } from "react";
import ShowAuthors from "../FilterMenu/Authors.jsx";
import ShowYears from "../FilterMenu/Years.jsx";
import ShowGenres from "../FilterMenu/Genres.jsx";
import * as S from "./TrackFilter.styles.js";

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
    <S.BlockFilter>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>

        <S.FilterBox>
          <S.FilterButton
            className={revealAuthor ? "_btn-text_focus" : "_btn-text"}
            onClick={toggleRevealAuthor}
          >
            исполнителю
          </S.FilterButton>
          {revealAuthor ? <ShowAuthors /> : null}
        </S.FilterBox>

        <S.FilterBox>
          <S.FilterButton
            className={revealGenre ? "_btn-text_focus" : "_btn-text"}
            onClick={toggleRevealGenre}
          >
            жанру
          </S.FilterButton>
          {revealGenre ? <ShowGenres /> : null}
        </S.FilterBox>
      </S.CenterblockFilter>

      <S.CenterblockFilter>
        <S.FilterTitle>Сортировка:</S.FilterTitle>
        <S.FilterBox>
          <S.FilterButton
            className={revealYear ? "_btn-text_focus" : "_btn-text"}
            onClick={toggleRevealYear}
          >
            По умолчанию
          </S.FilterButton>
          {revealYear ? <ShowYears /> : null}
        </S.FilterBox>
      </S.CenterblockFilter>
    </S.BlockFilter>
  );
}
