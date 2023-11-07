import * as S from "./TrackFilter.styles.js";
import { useState } from "react";

export default function TrackSort({
  toggleRevealYear,
  revealYear,
  Years,
  setYears,
}) {
  const [defaultYears, setDefaultYears] = useState(true);
  const [newYears, setNewYears] = useState(false);
  const [oldYears, setOldYears] = useState(false);

  const toggleDefaultYears = () => {
    setDefaultYears(!setDefaultYears);
    setNewYears(false);
    setOldYears(false);
    setYears("По умолчанию");
  };

  const toggleNewYears = () => {
    setNewYears(!setNewYears);
    setDefaultYears(false);
    setOldYears(false);
    setYears("Сначала новые");
  };

  const toggleOldYears = () => {
    setOldYears(!setOldYears);
    setNewYears(false);
    setDefaultYears(false);
    setYears("Сначала старые");
  };

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Сортировка:</S.FilterTitle>
      <S.FilterBox>
        <S.FilterButton
          className={revealYear ? "_btn-text_focus" : "_btn-text"}
          onClick={toggleRevealYear}
        >
          {Years}
        </S.FilterButton>
        {revealYear ? (
          <S.FilterMenu>
            <S.FilterList>
              <S.FilterListItem href="#" onClick={toggleDefaultYears}>
                По умолчанию
              </S.FilterListItem>
              <S.FilterListItem href="#" onClick={toggleNewYears}>
                Сначала новые
              </S.FilterListItem>
              <S.FilterListItem href="#" onClick={toggleOldYears}>
                Сначала старые
              </S.FilterListItem>
            </S.FilterList>
          </S.FilterMenu>
        ) : null}
      </S.FilterBox>
    </S.CenterblockFilter>
  );
}
