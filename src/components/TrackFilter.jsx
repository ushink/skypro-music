import { useState } from "react";
import "./TrackFilter.css";
import ShowAuthors from "./TracksLibrary/Authors.jsx";
import ShowYears from "./TracksLibrary/Years.jsx";
import ShowGenres from "./TracksLibrary/Genres.jsx";

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div className="filter__box">
        <div
          className="filter__button button-author _btn-text"
          onClick={toggleRevealAuthor}
        >
          исполнителю
        </div>
        {revealAuthor && <ShowAuthors />}
      </div>

      <div className="filter__box">
        <div
          className="filter__button button-year _btn-text"
          onClick={toggleRevealYear}
        >
          году выпуска
        </div>
        {revealYear && <ShowYears />}
      </div>
      <div className="filter__box">
        <div
          className="filter__button button-genre _btn-text"
          onClick={toggleRevealGenre}
        >
          жанру
        </div>
        {revealGenre && <ShowGenres />}
      </div>
    </div>
  );
}
