import { useState } from "react";
import ShowAuthors from "../FilterMenu/Authors.jsx";
import ShowGenres from "../FilterMenu/Genres.jsx";
import * as S from "./TrackFilter.styles.js";
import TrackSort from "./TrackSort.jsx";

export default function Filter({
  tracks,
  Years,
  setYears,
  handleAuthorClick,
  handleGenreClick,
}) {
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
          {revealAuthor ? (
            <ShowAuthors
              tracks={tracks}
              handleAuthorClick={handleAuthorClick}
            />
          ) : null}
        </S.FilterBox>

        <S.FilterBox>
          <S.FilterButton
            className={revealGenre ? "_btn-text_focus" : "_btn-text"}
            onClick={toggleRevealGenre}
          >
            жанру
          </S.FilterButton>
          {revealGenre ? (
            <ShowGenres tracks={tracks} handleGenreClick={handleGenreClick} />
          ) : null}
        </S.FilterBox>
      </S.CenterblockFilter>

      <TrackSort
        toggleRevealYear={toggleRevealYear}
        revealYear={revealYear}
        Years={Years}
        setYears={setYears}
      />
    </S.BlockFilter>
  );
}
